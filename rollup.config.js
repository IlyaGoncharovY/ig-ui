import path from 'path';

import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import { dts } from 'rollup-plugin-dts';
import url from '@rollup/plugin-url';
import {glob} from 'glob';

const componentFiles = glob.sync('./src/components/*/index.ts');

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: './dist/index.js',
        format: 'cjs',
      },
      {
        file: './dist/index.esm.js',
        format: 'esm',
      },
    ],
    external: ['react', 'clsx'],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
      }),
      postcss({
        extract: 'index.css',
        modules: true,
        minimize: true,
        use: ['sass'],
      }),
      terser(),
      url(),
    ],
  },

  ...componentFiles.map((input) => ({
    input,
    output: [
      {
        file: `./dist/components/${path.basename(path.dirname(input))}/index.js`,
        format: 'esm',
      },
    ],
    external: ['react', 'clsx'],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
      }),
      postcss({
        modules: true,
        minimize: true,
        use: ['sass'],
      }),
      terser(),
    ],
  })),

  {
    input: './dist/index.d.ts',
    output: [
      {
        file: './dist/index.d.ts',
        format: 'esm',
      },
    ],
    external: [/\.(css|scss)$/],
    plugins: [dts()],
  },
];

