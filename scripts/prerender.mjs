/**
 * Pré-rendu des métadonnées (titre, description, Open Graph, canonical).
 *
 * Problème résolu : le site est une application JavaScript. LinkedIn, WhatsApp,
 * Slack et les clients mail n'exécutent pas le JavaScript — ils recevaient donc
 * le titre générique de l'accueil pour TOUTES les pages partagées.
 *
 * Principe : on lance le vrai site dans Chrome, on laisse React poser ses
 * métadonnées, puis on écrit un index.html par route avec ces métadonnées
 * figées dans le HTML. Le corps de page reste vide : React l'affiche comme
 * avant (on évite ainsi de figer des contenus dynamiques type témoignages).
 *
 * Usage : node scripts/prerender.mjs      (après `vite build`)
 */
import puppeteer from "puppeteer";
import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const PORT = 4179;

/**
 * Trouve un Chrome utilisable : celui installé par puppeteer (local comme sur
 * Netlify), sinon une variable d'environnement, sinon le Chrome du Mac.
 */
function trouverChrome() {
  const candidats = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    process.env.CHROME_PATH,
    // Chrome téléchargé par puppeteer (local comme sur un serveur de build)
    (() => { try { const p = puppeteer.executablePath(); return typeof p === "string" ? p : null; } catch { return null; } })(),
    // Images de build Linux (Netlify, CI)
    "/usr/bin/google-chrome-stable",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium-browser",
    "/usr/bin/chromium",
    // macOS
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  ].filter(Boolean);
  for (const c of candidats) if (existsSync(c)) return c;
  return null;
}

// Les balises que l'on fige. Tout le reste de <head> vient de index.html.
const KEEP = /^(title|description|keywords|robots|canonical|og:|twitter:|application\/ld\+json)/;

if (!existsSync(DIST)) {
  console.error("dist/ absent — lancez `npx vite build` d'abord.");
  process.exit(1);
}

// 1. Routes statiques declarees dans App.tsx
const appSrc = await readFile(path.join(ROOT, "src/App.tsx"), "utf-8");
const routes = [...appSrc.matchAll(/<Route\s+path="([^"]+)"/g)]
  .map((m) => m[1])
  // on exclut les segments dynamiques et les routes de simple redirection (/index.html)
  .filter((r) => !r.includes(":") && !r.includes("*") && !r.endsWith(".html"));

// 2. Serveur statique minimal sur dist/ (avec repli SPA)
const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".woff2": "font/woff2", ".ico": "image/x-icon", ".mp4": "video/mp4", ".pdf": "application/pdf" };

const server = createServer(async (req, res) => {
  const url = decodeURIComponent((req.url || "/").split("?")[0]);
  let file = path.join(DIST, url);
  if (!existsSync(file) || (await import("node:fs")).statSync(file).isDirectory()) {
    file = path.join(DIST, "index.html"); // repli SPA
  }
  try {
    const buf = await readFile(file);
    res.writeHead(200, { "Content-Type": MIME[path.extname(file)] || "application/octet-stream" });
    res.end(buf);
  } catch {
    res.writeHead(404).end("404");
  }
});
await new Promise((r) => server.listen(PORT, r));

// 3. Chrome
// Le pré-rendu est une amélioration, jamais un bloquant : s'il échoue, on
// laisse le site se déployer sans (comportement d'avant) plutôt que de casser
// la mise en ligne. L'échec est signalé bien visiblement dans le journal.
function abandon(raison) {
  console.warn("\n" + "!".repeat(64));
  console.warn("PRE-RENDU IGNORE : " + raison);
  console.warn("Le site se deploie normalement, mais les apercus de partage");
  console.warn("(LinkedIn, WhatsApp, mail) afficheront le titre generique.");
  console.warn("!".repeat(64) + "\n");
  server.close();
  process.exit(0);
}

const chromePath = trouverChrome();
if (!chromePath) abandon("aucun Chrome trouve sur cette machine");
console.log("Chrome utilise : " + chromePath);

let browser;
try {
  browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage", "--disable-gpu"],
  });
} catch (err) {
  abandon("Chrome n'a pas demarre — " + err.message.split("\n")[0].slice(0, 120));
}
const page = await browser.newPage();
const shell = await readFile(path.join(DIST, "index.html"), "utf-8");

let ok = 0;
const failures = [];

for (const route of routes) {
  try {
    await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: "networkidle2", timeout: 30000 });
    // laisse react-helmet poser les balises
    await page.waitForFunction(() => document.title && document.title.length > 0, { timeout: 10000 });

    const meta = await page.evaluate(() => {
      const out = { title: document.title, tags: [] };
      document.querySelectorAll("head meta, head link[rel=canonical], head script[type='application/ld+json']")
        .forEach((el) => out.tags.push(el.outerHTML));
      return out;
    });

    // remplace <title> et retire du shell les balises que l'on re-injecte
    let html = shell.replace(/<title>[\s\S]*?<\/title>/i, `<title>${meta.title}</title>`);
    // index.html contient des balises og: statiques, et react-helmet en ajoute
    // d'autres plus bas dans <head>. On ne garde que la DERNIÈRE de chaque clé,
    // c'est-à-dire celle posée par React (la bonne pour la page courante).
    const parKey = new Map();
    for (const t of meta.tags) {
      const m = t.match(/(?:name|property|rel|type)="([^"]+)"/);
      if (m && KEEP.test(m[1])) parKey.set(m[1], t);
    }
    const injected = [...parKey.values()];
    // supprime les equivalents statiques pour eviter les doublons
    for (const tag of injected) {
      const key = tag.match(/(?:name|property|rel)="([^"]+)"/);
      if (!key) continue;
      const re = new RegExp(`\\s*<(?:meta|link)[^>]*(?:name|property|rel)="${key[1].replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[^>]*>`, "gi");
      html = html.replace(re, "");
    }
    html = html.replace("</head>", `  ${injected.join("\n  ")}\n</head>`);

    const dir = route === "/" ? DIST : path.join(DIST, route);
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, "index.html"), html);
    ok++;
  } catch (err) {
    failures.push(`${route} — ${err.message.split("\n")[0].slice(0, 70)}`);
  }
}

await browser.close();
server.close();

console.log(`Pré-rendu : ${ok}/${routes.length} routes`);
if (failures.length) {
  console.log(`\nRoutes non pré-rendues (${failures.length}) — elles resteront en rendu JavaScript :`);
  failures.forEach((f) => console.log("   " + f));
}
// On ne fait jamais echouer le build : mieux vaut un site en ligne sans
// pre-rendu qu'un deploiement bloque.
process.exit(0);
