const CircularDependencyPlugin = require('circular-dependency-plugin');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');
const getClientEnvironment = require('./env');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const paths = require('./paths');
const webpack = require('webpack');

const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));

module.exports = {
  entry: paths.appIndexTs,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
      {
        test: /\.(eot|woff|woff2|ttf|otf|svg|png|jpg|gif|ico|sh)$/,
        generator: {
          filename: '[name]-[contenthash].[ext]',
        },
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
  output: {
    filename: 'index.js',
    path: paths.appBuild,
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin(env.stringified),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      include: /src/,
      failOnError: true,
      allowAsyncCycles: false,
      cwd: process.cwd(),
    }),
    new CleanTerminalPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
};
