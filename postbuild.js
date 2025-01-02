import fs from 'fs';
import path from 'path';

import { glob } from 'glob';

const typesDir = './dist/types';
const componentsDir = './dist/components';

const files = glob.sync(`${typesDir}/**/*.d.ts`);

const fixPaths = (file) => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/(from\s+['"])(\.\.?\/[^'"]+)(['"])/g, '$1$2.js$3');
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Processed: ${file}`);
};

const moveFile = (src, dest) => {
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.renameSync(src, dest);
  console.log(`Moved: ${src} -> ${dest}`);
};

files.forEach((file) => {
  fixPaths(file);

  const relativePath = path.relative(typesDir, file);

  const cleanPath = relativePath.split(path.sep)
    .filter((segment, index) => !(index === 0 && segment === 'components'))
    .join(path.sep);

  console.log(`>>>> Final Calculated Path: ${cleanPath}`);
  const targetPath = path.resolve(componentsDir, cleanPath);

  moveFile(file, targetPath);
});

if (fs.existsSync(typesDir)) {
  fs.rmSync(typesDir, { recursive: true });
  console.log(`Removed: ${typesDir}`);
}
