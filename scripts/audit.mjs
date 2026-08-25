/**
 * Audit de santé du site Botanique Ludique.
 *
 * Vérifie d'un coup : collisions public/ vs React, contradictions
 * sitemap/noindex, images lourdes, fraîcheur du snapshot SEO,
 * références d'images cassées et pages sans titre.
 *
 * Usage : node scripts/audit.mjs
 *         npm run audit
 */
import { readFile, readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { empreinteSEO } from "./seo-fingerprint.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ok = (msg) => console.log(`  ✅ ${msg}`);
const warn = (msg) => console.log(`  ⚠️  ${msg}`);
const fail = (msg) => console.log(`  ❌ ${msg}`);
let problems = 0;

// ─── 1. Extraire les routes React depuis App.tsx ────────────────────────────
console.log("\n🔍 1/7 — Routes React vs fichiers public/\n");

const appSrc = await readFile(path.join(ROOT, "src/App.tsx"), "utf-8");
const reactRoutes = new Set(
  [...appSrc.matchAll(/<Route\s+path="([^"]+)"/g)]
    .map((m) => m[1])
    .filter((r) => !r.includes(":") && !r.includes("*"))
);

const publicFiles = await readdir(path.join(ROOT, "public"));
const htmlFiles = publicFiles.filter((f) => f.endsWith(".html") && f !== "404.html");
const collisions = htmlFiles.filter((f) => {
  const slug = "/" + f.replace(".html", "");
  return reactRoutes.has(slug);
});

if (collisions.length) {
  collisions.forEach((f) => fail(`public/${f} masque la route React /${f.replace(".html", "")}`));
  problems += collisions.length;
} else {
  ok(`Aucune collision parmi ${htmlFiles.length} fichiers HTML dans public/`);
}

// ─── 2. Sitemap vs noindex ──────────────────────────────────────────────────
console.log("\n🔍 2/7 — Contradictions sitemap / noindex\n");

const sitemapXml = await readFile(path.join(ROOT, "public/sitemap.xml"), "utf-8");
const sitemapUrls = new Set(
  [...sitemapXml.matchAll(/<loc>https:\/\/botaniqueludique\.com([^<]+)<\/loc>/g)].map(
    (m) => m[1]
  )
);

const seoSrc = await readFile(path.join(ROOT, "src/components/SEO.tsx"), "utf-8");
const noindexPatterns = [];
const patternBlock = seoSrc.match(/AUTO_NOINDEX_PATTERNS[^=]*=\s*\[([\s\S]*?)\];/);
if (patternBlock) {
  const regexes = [...patternBlock[1].matchAll(/\/([^/]+)\//g)];
  regexes.forEach((m) => {
    try {
      noindexPatterns.push(new RegExp(m[0].replace(/\//g, "")));
    } catch { /* skip invalid */ }
  });
}

const noindexExplicit = new Set();
for (const f of await readdir(path.join(ROOT, "src/pages"))) {
  if (!f.endsWith(".tsx")) continue;
  const src = await readFile(path.join(ROOT, "src/pages", f), "utf-8");
  const match = src.match(/noindex=\{?true\}?/);
  if (match) {
    const routeMatch = src.match(/canonical="([^"]+)"/);
    if (routeMatch) noindexExplicit.add(routeMatch[1]);
  }
}

let contradictions = 0;
for (const url of sitemapUrls) {
  const isNoindex =
    noindexExplicit.has(url) ||
    noindexPatterns.some((p) => p.test(url));
  if (isNoindex) {
    fail(`${url} est dans le sitemap mais marquée noindex`);
    contradictions++;
  }
}

for (const route of reactRoutes) {
  const isNoindex =
    noindexExplicit.has(route) ||
    noindexPatterns.some((p) => p.test(route));
  if (!isNoindex && !sitemapUrls.has(route)) {
    const isNested = route.startsWith("/inscription/") || route.startsWith("/blog/") || route.startsWith("/admin");
    if (!isNested) {
      warn(`${route} est indexable mais absente du sitemap`);
    }
  }
}

if (contradictions) {
  problems += contradictions;
} else {
  ok("Aucune contradiction sitemap/noindex");
}

// ─── 3. Images lourdes ──────────────────────────────────────────────────────
console.log("\n🔍 3/7 — Images > 500 Ko\n");

async function scanImages(dir) {
  const results = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return results;
  }
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      results.push(...(await scanImages(p)));
    } else if (/\.(jpe?g|png|webp|gif|svg|avif)$/i.test(e.name)) {
      const s = await stat(p);
      if (s.size > 500_000) {
        results.push({ path: path.relative(ROOT, p), size: s.size });
      }
    }
  }
  return results;
}

const heavyImages = [
  ...(await scanImages(path.join(ROOT, "src/assets"))),
  ...(await scanImages(path.join(ROOT, "public"))),
];

if (heavyImages.length) {
  heavyImages
    .sort((a, b) => b.size - a.size)
    .forEach((img) =>
      warn(`${img.path} — ${(img.size / 1_000_000).toFixed(1)} Mo`)
    );
  problems += heavyImages.length;
} else {
  ok("Toutes les images < 500 Ko");
}

// ─── 4. PDFs lourds ─────────────────────────────────────────────────────────
console.log("\n🔍 4/7 — PDFs > 5 Mo\n");

const pdfs = publicFiles.filter((f) => f.endsWith(".pdf"));
let heavyPdfs = 0;
for (const f of pdfs) {
  const s = await stat(path.join(ROOT, "public", f));
  if (s.size > 5_000_000) {
    warn(`public/${f} — ${(s.size / 1_000_000).toFixed(1)} Mo`);
    heavyPdfs++;
  }
}
if (heavyPdfs) {
  problems += heavyPdfs;
} else {
  ok(pdfs.length ? `${pdfs.length} PDF(s), tous < 5 Mo` : "Aucun PDF");
}

// ─── 5. Pages sans titre ni description ─────────────────────────────────────
console.log("\n🔍 5/7 — Pages sans titre ou description\n");

const pageFiles = await readdir(path.join(ROOT, "src/pages"));
let missingMeta = 0;
for (const f of pageFiles) {
  if (!f.endsWith(".tsx")) continue;
  const src = await readFile(path.join(ROOT, "src/pages", f), "utf-8");
  const hasTitle = /title=/.test(src);
  const hasDesc = /description=/.test(src);
  if (!hasTitle && !hasDesc) {
    const isAdmin = f.startsWith("Admin");
    if (!isAdmin) {
      warn(`${f} — pas de balise <SEO> (ni titre ni description)`);
      missingMeta++;
    }
  }
}

if (missingMeta) {
  problems += missingMeta;
} else {
  ok("Toutes les pages ont un titre et une description");
}

// ─── 6. Fraîcheur du snapshot SEO ───────────────────────────────────────────
console.log("\n🔍 6/7 — Fraîcheur de seo-snapshot.json\n");

const snapshotPath = path.join(ROOT, "seo-snapshot.json");
if (!existsSync(snapshotPath)) {
  fail("seo-snapshot.json introuvable — les aperçus de partage ne fonctionnent pas");
  problems++;
} else {
  const brut = JSON.parse(await readFile(snapshotPath, "utf-8"));
  const empreinteSnap = brut.__empreinte ?? null;
  const empreinteActuelle = await empreinteSEO();

  if (!empreinteSnap) {
    warn("seo-snapshot.json sans empreinte — impossible de vérifier la fraîcheur");
  } else if (empreinteSnap !== empreinteActuelle) {
    fail(
      `Snapshot périmé (${empreinteSnap.slice(0, 8)}… ≠ ${empreinteActuelle.slice(0, 8)}…) — relancez npm run seo:capture`
    );
    problems++;
  } else {
    ok("Snapshot SEO à jour");
  }

  const snapshot = brut.routes ?? brut;
  const routesManquantes = [...reactRoutes].filter((r) => !(r in snapshot));
  if (routesManquantes.length) {
    warn(`${routesManquantes.length} route(s) absente(s) du snapshot`);
  }
}

// ─── 7. Imports d'images cassés ─────────────────────────────────────────────
console.log("\n🔍 7/7 — Imports d'images cassés\n");

async function scanTsx(dir) {
  const results = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return results;
  }
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) results.push(...(await scanTsx(p)));
    else if (/\.tsx?$/.test(e.name)) results.push(p);
  }
  return results;
}

const tsxFiles = [
  ...(await scanTsx(path.join(ROOT, "src/pages"))),
  ...(await scanTsx(path.join(ROOT, "src/components"))),
];

let brokenImports = 0;
for (const f of tsxFiles) {
  const src = await readFile(f, "utf-8");
  const imports = [
    ...src.matchAll(/import\s+\w+\s+from\s+["'](@\/assets\/[^"']+)["']/g),
  ];
  for (const m of imports) {
    const assetPath = m[1].replace("@/", "src/");
    if (!existsSync(path.join(ROOT, assetPath))) {
      fail(`${path.relative(ROOT, f)} → ${m[1]} (fichier absent)`);
      brokenImports++;
    }
  }
}

if (brokenImports) {
  problems += brokenImports;
} else {
  ok("Tous les imports d'images existent");
}

// ─── Résumé ─────────────────────────────────────────────────────────────────
console.log("\n" + "─".repeat(50));
if (problems === 0) {
  console.log("✅ Audit complet — aucun problème détecté\n");
} else {
  console.log(`⚠️  Audit complet — ${problems} problème(s) détecté(s)\n`);
}

process.exit(problems > 0 ? 1 : 0);
