'use strict';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const webpackConfig = require('./webpack.config');

module.exports = {
  ...webpackConfig,
};
