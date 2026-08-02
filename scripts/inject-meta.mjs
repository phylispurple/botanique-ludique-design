/**
 * ÉTAPE 2 (tourne au build, y compris sur Netlify) — injection des métadonnées.
 *
 * Lit `seo-snapshot.json` (produit par capture-meta.mjs) et écrit un
 * index.html par route, avec le bon titre et les bonnes balises Open Graph.
 * Aucun navigateur requis : c'est du texte, donc ça marche partout.
 *
 * Seul <head> est figé. Le corps de page reste rendu par React, pour ne pas
 * graver de contenu dynamique (témoignages Supabase) dans le HTML.
 *
 * Usage : node scripts/inject-meta.mjs   (appelé par `npm run build`)
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { empreinteSEO } from "./seo-fingerprint.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const SNAPSHOT = path.join(ROOT, "seo-snapshot.json");

function avertir(msg) {
  console.warn("\n" + "!".repeat(64));
  console.warn("METADONNEES NON INJECTEES : " + msg);
  console.warn("Le site se deploie normalement, mais les apercus de partage");
  console.warn("(LinkedIn, WhatsApp, mail) afficheront le titre generique.");
  console.warn("Pour corriger : npm run seo:capture puis commiter seo-snapshot.json");
  console.warn("!".repeat(64) + "\n");
}

if (!existsSync(DIST)) { console.error("dist/ absent."); process.exit(1); }
if (!existsSync(SNAPSHOT)) { avertir("seo-snapshot.json introuvable"); process.exit(0); }

const brut = JSON.parse(await readFile(SNAPSHOT, "utf-8"));
// Ancien format (routes à la racine) ou nouveau format (avec empreinte)
const snapshot = brut.routes ?? brut;
const empreinteInstantane = brut.__empreinte ?? null;

// Garde-fou : l'instantané correspond-il encore aux textes présents dans le code ?
const empreinteActuelle = await empreinteSEO();
if (empreinteInstantane && empreinteInstantane !== empreinteActuelle) {
  avertir(
    `seo-snapshot.json est perime (empreinte ${empreinteInstantane} != ${empreinteActuelle}).\n` +
    "  Des titres ou descriptions ont change depuis la derniere capture."
  );
}

const shell = await readFile(path.join(DIST, "index.html"), "utf-8");

// Routes actuellement declarees, pour reperer celles absentes de l'instantane
const appSrc = await readFile(path.join(ROOT, "src/App.tsx"), "utf-8");
const routesActuelles = [...appSrc.matchAll(/<Route\s+path="([^"]+)"/g)]
  .map((m) => m[1])
  .filter((r) => !r.includes(":") && !r.includes("*") && !r.endsWith(".html"));

const echap = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
let ok = 0;

for (const [route, data] of Object.entries(snapshot)) {
  let html = shell.replace(/<title>[\s\S]*?<\/title>/i, `<title>${data.title}</title>`);

  // retire du gabarit les balises statiques que l'on remplace
  for (const tag of data.tags) {
    const key = tag.match(/(?:name|property|rel)="([^"]+)"/);
    if (!key) continue;
    html = html.replace(
      new RegExp(`\\s*<(?:meta|link)[^>]*(?:name|property|rel)="${echap(key[1])}"[^>]*>`, "gi"),
      ""
    );
  }

  const ld = (data.ld || []).map((j) => `<script type="application/ld+json">${j}</script>`);
  html = html.replace("</head>", `  ${[...data.tags, ...ld].join("\n  ")}\n</head>`);

  const dir = route === "/" ? DIST : path.join(DIST, route);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "index.html"), html);
  ok++;
}

const manquantes = routesActuelles.filter((r) => !(r in snapshot));
console.log(`Métadonnées injectées : ${ok} routes`);
if (manquantes.length) {
  console.warn(`\n${manquantes.length} route(s) absente(s) de l'instantané — relancez \`npm run seo:capture\` :`);
  manquantes.slice(0, 10).forEach((r) => console.warn("   " + r));
}
