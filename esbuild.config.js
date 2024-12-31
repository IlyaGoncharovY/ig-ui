import path from 'path';

import esbuild from 'esbuild';
import { glob } from 'glob';
import stylePlugin from 'esbuild-style-plugin';

const componentFiles = glob.sync('./src/components/*/index.ts');

const buildComponent = (entry) => {
  const componentName = path.basename(path.dirname(entry));
  return esbuild.build({
    entryPoints: [entry],
    bundle: true,
    format: 'esm',
    outdir: `dist/components/${componentName}`,
    external: ['react', 'clsx'],
    plugins: [
      stylePlugin({
        cssModules: true,
        minify: true,
      }),
    ],
  });
};

const buildAll = async () => {
  await Promise.all(componentFiles.map(buildComponent));

  await esbuild.build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    format: 'esm',
    outfile: './dist/index.esm.js',
    external: ['react', 'clsx'],
    plugins: [
      stylePlugin({
        cssModules: true,
        extract: true,
        minify: true,
      }),
    ],
  });

  await esbuild.build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    format: 'cjs',
    outfile: './dist/index.js',
    external: ['react', 'clsx'],
    plugins: [
      stylePlugin({
        cssModules: true,
        extract: true,
        minify: true,
      }),
    ],
  });
};

buildAll().catch((e) => {
  console.error(e);
  process.exit(1);
});
