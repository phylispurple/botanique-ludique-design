#!/usr/bin/env node
/**
 * Static prerendering script.
 *
 * Boots a tiny HTTP server on top of `dist/`, launches a system Chromium via
 * puppeteer-core, navigates each route in PRERENDER_ROUTES, waits for the React
 * app to inject its <head> tags (via react-helmet-async) and the main content,
 * then writes the fully rendered HTML to `dist/<route>/index.html`.
 *
 * Why: social crawlers (LinkedIn, X, Facebook, WhatsApp) and some search bots
 * do not execute JavaScript. Prerendering gives them real meta/OG/JSON-LD tags
 * for each route while keeping the SPA behaviour on the client (createRoot
 * re-renders on mount, no hydration mismatch).
 *
 * Fails gracefully: if Chromium is not available on the build host, the build
 * still succeeds — only the prerendering step is skipped.
 */

import { existsSync, mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import sirv from "sirv";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "..", "dist");
const SITEMAP = resolve(__dirname, "..", "public", "sitemap.xml");

// Curated SEO scope: all blog articles + landing/pillar pages that target
// search and social sharing. Pulled from the project sitemap, minus internal
// routes (admin, inscription forms) which never need previews.
const EXCLUDE_PATTERNS = [
  /^\/admin/,
  /^\/inscription\//,
  /^\/unsubscribe/,
  /^\/demo-/,
];

function loadRoutesFromSitemap() {
  if (!existsSync(SITEMAP)) return ["/"];
  const xml = readFileSync(SITEMAP, "utf8");
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  const seen = new Set();
  for (const m of matches) {
    let url = m[1].trim();
    try {
      const u = new URL(url);
      url = u.pathname || "/";
    } catch {
      /* keep as-is if already a path */
    }
    if (!url.startsWith("/")) continue;
    if (EXCLUDE_PATTERNS.some((re) => re.test(url))) continue;
    // strip trailing slash except root
    if (url.length > 1 && url.endsWith("/")) url = url.slice(0, -1);
    seen.add(url);
  }
  if (!seen.has("/")) seen.add("/");
  return [...seen];
}

function findChromium() {
  const env = process.env.PUPPETEER_EXECUTABLE_PATH;
  const candidates = [
    env,
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/bin/chromium",
    "/bin/chromium-browser",
    "/snap/bin/chromium",
  ].filter(Boolean);
  return candidates.find((p) => {
    try {
      return existsSync(p);
    } catch {
      return false;
    }
  });
}

async function startServer(port, spaRoutes) {
  const staticHandler = sirv(DIST, { dev: false, etag: true });
  const indexHtml = readFileSync(join(DIST, "index.html"), "utf8");
  const spaSet = new Set(spaRoutes);
  return new Promise((resolveP, rejectP) => {
    const server = createServer((req, res) => {
      const pathname = (req.url || "/").split("?")[0].replace(/\/$/, "") || "/";
      // Force SPA fallback for known app routes, bypassing legacy /<slug>.html redirects.
      if (spaSet.has(pathname)) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(indexHtml);
        return;
      }
      staticHandler(req, res, () => {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(indexHtml);
      });
    });
    server.once("error", rejectP);
    server.listen(port, "127.0.0.1", () => resolveP(server));
  });
}

async function main() {
  if (!existsSync(DIST)) {
    console.warn("[prerender] dist/ not found, skipping.");
    return;
  }

  // Skip prerendering in CI environments (GitHub Actions, etc.) where
  // Chromium is unavailable or the build window is too tight. Prerendering
  // still runs locally (npm run build) and in environments that explicitly
  // opt in via PRERENDER=1.
  const isCI =
    process.env.CI === "true" ||
    process.env.GITHUB_ACTIONS === "true" ||
    process.env.SKIP_PRERENDER === "1";
  const forced = process.env.PRERENDER === "1";
  if (isCI && !forced) {
    console.warn(
      "[prerender] CI environment detected (CI/GITHUB_ACTIONS). " +
        "Skipping prerendering. Set PRERENDER=1 to force."
    );
    return;
  }

  const executablePath = findChromium();
  if (!executablePath) {
    console.warn(
      "[prerender] No Chromium binary found. Skipping prerendering. " +
        "Install Chromium or set PUPPETEER_EXECUTABLE_PATH to enable."
    );
    return;
  }

  const routes = loadRoutesFromSitemap();
  console.log(`[prerender] Routes to prerender: ${routes.length}`);
  console.log(`[prerender] Using Chromium at ${executablePath}`);

  const port = 4173 + Math.floor(Math.random() * 1000);
  const server = await startServer(port, routes);
  const base = `http://127.0.0.1:${port}`;

  const puppeteer = (await import("puppeteer-core")).default;
  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
    ],
  });

  const indexHtml = readFileSync(join(DIST, "index.html"), "utf8");
  let ok = 0;
  let fail = 0;

  try {
    for (const route of routes) {
      const url = base + route;
      const page = await browser.newPage();
      try {
        await page.setUserAgent("Mozilla/5.0 (compatible; PrerenderBot/1.0)");
        const response = await page.goto(url, {
          waitUntil: "domcontentloaded",
          timeout: 45000,
        });
        if (!response || response.status() >= 400) {
          throw new Error(`HTTP ${response ? response.status() : "no-response"}`);
        }
        // Give React + react-helmet-async time to mount and inject head tags.
        await new Promise((r) => setTimeout(r, 2500));
        const len = await page.evaluate(
          () => document.getElementById("root")?.innerHTML.trim().length || 0
        );
        if (len < 500) throw new Error(`root too small (${len})`);

        const html = await page.content();
        const outDir =
          route === "/" ? DIST : join(DIST, ...route.split("/").filter(Boolean));
        mkdirSync(outDir, { recursive: true });
        const outFile = join(outDir, "index.html");
        writeFileSync(outFile, html, "utf8");
        ok++;
        if (ok % 20 === 0) console.log(`[prerender] ${ok}/${routes.length}…`);
      } catch (err) {
        fail++;
        console.warn(`[prerender] FAIL ${route}: ${err.message}`);
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log(`[prerender] Done. ${ok} OK, ${fail} failed.`);
  // Do not exit non-zero: a few failed routes shouldn't break the deploy.
  void indexHtml;
}

main().catch((err) => {
  console.error("[prerender] Fatal error, skipping prerender:", err);
  // Soft-fail so the build still ships.
  process.exit(0);
});
