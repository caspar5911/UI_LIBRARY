import fs from 'node:fs';
import path from 'node:path';

const srcRoot = path.resolve('src');
const distRoot = path.resolve('dist');

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && full.endsWith('.scss')) {
      const rel = path.relative(srcRoot, full);
      const out = path.join(distRoot, rel);
      fs.mkdirSync(path.dirname(out), { recursive: true });
      fs.copyFileSync(full, out);
    }
  }
}

walk(srcRoot);
console.log('Copied .scss files to dist/');