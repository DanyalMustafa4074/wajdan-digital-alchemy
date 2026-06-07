import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, '..', 'public');

const RULES = [
  { dir: 'team',          maxW: 900,  maxH: 1200, quality: 82 },
  { dir: 'client logos',  maxW: 400,  maxH: 400,  quality: 85 },
  { dir: 'landing-pages', maxW: 800,  maxH: 1200, quality: 80 },
  { dir: '',              maxW: 1400, maxH: 1400, quality: 85 }, // root-level
];

async function convertFile(src, destDir, maxW, maxH, quality) {
  const name = path.basename(src, path.extname(src));
  const dest = path.join(destDir, name + '.webp');

  if (existsSync(dest)) {
    console.log(`  skip  ${path.relative(PUBLIC, dest)} (exists)`);
    return;
  }

  const before = (await stat(src)).size;
  await sharp(src)
    .resize({ width: maxW, height: maxH, fit: 'inside', withoutEnlargement: true })
    .webp({ quality, effort: 5 })
    .toFile(dest);
  const after = (await stat(dest)).size;
  const saved = (((before - after) / before) * 100).toFixed(1);
  console.log(`  ✓  ${path.relative(PUBLIC, dest)}  ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB  (-${saved}%)`);
}

async function processDir(relDir, maxW, maxH, quality) {
  const dir = path.join(PUBLIC, relDir);
  if (!existsSync(dir)) return;

  let files;
  try { files = await readdir(dir); } catch { return; }

  for (const f of files) {
    const src = path.join(dir, f);
    const s = await stat(src);
    if (s.isDirectory()) continue;
    const ext = path.extname(f).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

    const destDir = dir;
    await convertFile(src, destDir, maxW, maxH, quality);
  }
}

console.log('\n=== Image optimiser ===\n');

// Root-level PNGs
await processDir('', 1400, 1400, 85);

// Sub-directories
for (const rule of RULES.filter(r => r.dir)) {
  console.log(`\n[${rule.dir}]`);
  await processDir(rule.dir, rule.maxW, rule.maxH, rule.quality);
}

console.log('\n=== Done ===\n');
