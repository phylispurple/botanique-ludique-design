/**
 * Optimisation des images du site.
 *
 * Réduit les images trop grandes et les ré-encode dans LE MÊME format,
 * sous LE MÊME nom de fichier : aucun import à modifier dans le code.
 *
 * Usage :
 *   node scripts/optimize-images.mjs --dry    (simulation, n'écrit rien)
 *   node scripts/optimize-images.mjs          (applique)
 *
 * À relancer après avoir ajouté de nouvelles photos.
 */
import sharp from "sharp";
import { readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const DIRS = ["src/assets", "public"];
const MAX_EDGE = 1600; // largeur/hauteur max — largement suffisant pour un site
const QUALITY = 82;
const EXTS = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const DRY = process.argv.includes("--dry");

async function walk(dir) {
  const out = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (EXTS.has(path.extname(e.name).toLowerCase())) out.push(p);
  }
  return out;
}

const fmt = (n) => (n / 1048576).toFixed(2).padStart(6) + " Mo";

const files = (await Promise.all(DIRS.map(walk))).flat().sort();
let before = 0, after = 0, changed = 0, skipped = 0;
const rows = [];

for (const file of files) {
  const sizeBefore = (await stat(file)).size;
  before += sizeBefore;

  let buf;
  try {
    const img = sharp(file, { animated: true });
    const meta = await img.metadata();

    // Ne redimensionne que si l'image dépasse la taille max (jamais d'agrandissement)
    const tooBig = Math.max(meta.width ?? 0, meta.height ?? 0) > MAX_EDGE;
    let pipeline = tooBig
      ? img.resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true })
      : img;

    const ext = path.extname(file).toLowerCase();
    if (ext === ".png") {
      pipeline = pipeline.png({ compressionLevel: 9, palette: true });
    } else if (ext === ".webp") {
      pipeline = pipeline.webp({ quality: QUALITY });
    } else {
      pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
    }
    buf = await pipeline.toBuffer();
  } catch (err) {
    after += sizeBefore;
    skipped++;
    rows.push(`  SAUTE  ${file} (${err.message.slice(0, 60)})`);
    continue;
  }

  // On n'écrit que si c'est réellement plus léger (marge de 3%)
  if (buf.length < sizeBefore * 0.97) {
    if (!DRY) await writeFile(file, buf);
    after += buf.length;
    changed++;
    const pct = Math.round((1 - buf.length / sizeBefore) * 100);
    rows.push(`  ${fmt(sizeBefore)} -> ${fmt(buf.length)}  -${String(pct).padStart(2)}%  ${file}`);
  } else {
    after += sizeBefore;
    skipped++;
  }
}

console.log(rows.join("\n"));
console.log(`\n${DRY ? "[SIMULATION] " : ""}${changed} optimisées, ${skipped} inchangées`);
console.log(`Total : ${fmt(before)} -> ${fmt(after)}  (-${Math.round((1 - after / before) * 100)}%)`);
