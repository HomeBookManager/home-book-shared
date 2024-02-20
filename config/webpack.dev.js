'use strict';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const ignoredFiles = require('react-dev-utils/ignoredFiles');
const paths = require('./paths');
const webpackConfig = require('./webpack.config');

module.exports = {
  ...webpackConfig,
  devServer: {
    historyApiFallback: true,
    open: true,
    port: 3000,
    static: {
      directory: paths.appPublic,
      publicPath: [paths.publicUrlOrPath],
      watch: {
        ignored: ignoredFiles(paths.appSrc),
      },
    },
  },
};
