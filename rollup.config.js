import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

// utils
import { getFiles } from './scripts/buildUtils';
import { rollupPluginSvg } from './scripts/rollup-plugin-svg.lib';

const extensions = ['.js', '.ts', '.jsx', '.tsx', '.json'];
const excludeExtensions = ['.d.ts', '.stories.tsx', '.spec.ts', '.spec.tsx'];

export default {
  external: [
    /node_modules/,
    'classnames',
    'lodash',
    'lodash/fp',
    'react',
    'react-dom',
    'style-inject',
    'tslib',
  ],
  input: [
    './src/index.ts',
    ...getFiles('./src/assets', extensions, excludeExtensions),
    ...getFiles('./src/components', extensions, excludeExtensions),
    ...getFiles('./src/core', extensions, excludeExtensions),
    ...getFiles('./src/hooks', extensions, excludeExtensions),
    ...getFiles('./src/types', extensions, excludeExtensions),
    ...getFiles('./src/utils', extensions, excludeExtensions),
  ],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  plugins: [
    json(),
    image(),
    rollupPluginSvg(),
    typescript({
      declaration: true,
      declarationDir: 'dist',
      exclude: ['src/**/*.stories.tsx'],
      tsconfig: './tsconfig.json',
    }),
    postcss({
      extract: false,
      inject(cssVariableName) {
        return `import styleInject from 'style-inject';\nstyleInject(${cssVariableName});`;
      },
      use: [
        [
          'sass',
          {
            includePaths: ['./src/styles', './node_modules'],
          },
        ],
      ],
    }),
    terser(),
    resolve(),
    commonjs(),
  ],
};
