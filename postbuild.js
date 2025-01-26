import fs from 'fs';
import path from 'path';

import { glob } from 'glob';

const distDir = './dist';
const typesDir = `${distDir}/types`;

const files = glob.sync(`${typesDir}/**/*.d.ts`);

files.forEach((file) => {
  const relativePath = path.relative(typesDir, file);
  const destPath = path.resolve(distDir, relativePath);
  const dir = path.dirname(destPath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.renameSync(file, destPath);
});

if (fs.existsSync(typesDir)) {
  fs.rmSync(typesDir, { recursive: true });
}
