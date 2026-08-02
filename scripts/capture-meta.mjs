/**
 * ÉTAPE 1 (à lancer sur votre Mac) — capture des métadonnées SEO.
 *
 * Lance le vrai site dans Chrome, laisse React poser ses balises (titre,
 * description, Open Graph, canonical…) et enregistre le tout dans
 * `seo-snapshot.json`, qui est versionné avec le code.
 *
 * C'est ensuite `inject-meta.mjs` qui s'en sert au moment du build Netlify,
 * sans avoir besoin de navigateur là-bas.
 *
 * Usage :
 *   npm run seo:capture
 *
 * À relancer après avoir modifié un titre, une description, ou ajouté une page.
 */
import puppeteer from "puppeteer";
import { createServer } from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import { existsSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const SNAPSHOT = path.join(ROOT, "seo-snapshot.json");
const PORT = 4179;

const KEEP = /^(description|keywords|robots|canonical|og:|twitter:)/;

function trouverChrome() {
  const candidats = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    process.env.CHROME_PATH,
    (() => { try { const p = puppeteer.executablePath(); return typeof p === "string" ? p : null; } catch { return null; } })(),
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
  ].filter(Boolean);
  for (const c of candidats) if (existsSync(c)) return c;
  return null;
}

if (!existsSync(DIST)) {
  console.error("dist/ absent — lancez d'abord : npm run build:no-prerender");
  process.exit(1);
}

const chrome = trouverChrome();
if (!chrome) {
  console.error("Chrome introuvable. Lancez : npx puppeteer browsers install chrome");
  process.exit(1);
}

const appSrc = await readFile(path.join(ROOT, "src/App.tsx"), "utf-8");
const routes = [...appSrc.matchAll(/<Route\s+path="([^"]+)"/g)]
  .map((m) => m[1])
  .filter((r) => !r.includes(":") && !r.includes("*") && !r.endsWith(".html"));

const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".woff2": "font/woff2", ".ico": "image/x-icon", ".mp4": "video/mp4", ".pdf": "application/pdf" };

const server = createServer(async (req, res) => {
  const url = decodeURIComponent((req.url || "/").split("?")[0]);
  let file = path.join(DIST, url);
  if (!existsSync(file) || statSync(file).isDirectory()) file = path.join(DIST, "index.html");
  try {
    res.writeHead(200, { "Content-Type": MIME[path.extname(file)] || "application/octet-stream" });
    res.end(await readFile(file));
  } catch { res.writeHead(404).end("404"); }
});
await new Promise((r) => server.listen(PORT, r));

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage();

const snapshot = {};
const echecs = [];

for (const route of routes) {
  try {
    await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: "networkidle2", timeout: 30000 });
    await page.waitForFunction(() => document.title && document.title.length > 0, { timeout: 10000 });
    const data = await page.evaluate(() => {
      const tags = [];
      document.querySelectorAll("head meta, head link[rel=canonical]").forEach((el) => tags.push(el.outerHTML));
      const ld = [...document.querySelectorAll("head script[type='application/ld+json']")].map((s) => s.textContent);
      return { title: document.title, tags, ld };
    });
    // une seule balise par clé : la dernière posée (celle de React)
    const parKey = new Map();
    for (const t of data.tags) {
      const m = t.match(/(?:name|property|rel)="([^"]+)"/);
      if (m && KEEP.test(m[1])) parKey.set(m[1], t);
    }
    snapshot[route] = { title: data.title, tags: [...parKey.values()], ld: data.ld };
  } catch (err) {
    echecs.push(`${route} — ${err.message.split("\n")[0].slice(0, 70)}`);
  }
}

await browser.close();
server.close();

await writeFile(SNAPSHOT, JSON.stringify(snapshot, null, 2) + "\n", "utf-8");
console.log(`Capturé : ${Object.keys(snapshot).length}/${routes.length} routes -> seo-snapshot.json`);
if (echecs.length) {
  console.log(`\nEchecs (${echecs.length}) :`);
  echecs.forEach((e) => console.log("   " + e));
  process.exit(1);
}
