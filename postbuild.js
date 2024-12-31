import fs from 'fs';

import {glob} from 'glob';

const files = glob.sync('./dist/types/**/*.d.ts');

files.forEach((file) => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/(from\s+['"])(\.\/[^'"]+)(['"])/g, '$1$2.js$3');
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Processed: ${file}`);
});
