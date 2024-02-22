const commonjs = require('@rollup/plugin-commonjs');
const image = require('@rollup/plugin-image');
const json = require('@rollup/plugin-json');
const postcss = require('rollup-plugin-postcss');
const resolve = require('@rollup/plugin-node-resolve');
const terser = require('@rollup/plugin-terser');
const typescript = require('@rollup/plugin-typescript');

// @home-book
const getFiles = require('home-book-scripts/scripts/buitldUitls');

// others
const sassVariables = require('./config/sassVariables');

// utils
const rollupPluginSvg = require('./scripts/rollup-plugin-svg.lib');

const excludeExtensions = ['.d.ts', '.stories.tsx', '.spec.ts', '.spec.tsx'];
const extensions = ['.js', '.ts', '.jsx', '.tsx', '.json'];

module.exports = {
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
    ...getFiles('./src/shared', extensions, excludeExtensions),
    ...getFiles('./src/tests', extensions, excludeExtensions),
    ...getFiles('./src/translations', extensions, excludeExtensions),
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
        return `import styleInject from 'style-inject';\nstyleInject(${cssVariableName}); `;
      },
      use: [
        [
          'sass',
          {
            data: sassVariables,
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
