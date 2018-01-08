const webpack = require('webpack');
const eslintFormatter = require('eslint-friendly-formatter');
const utils = require('./utils');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Server
  target: 'node',
  entry: './server/index.js',
  externals: [nodeExternals()],
  output: {
    filename: 'server-dist.js',
  },
  resolve: {
    extensions: ['.js', '.json'],
    unsafeCache: /data/,
    alias: {
      '@': utils.resolve('server'),
      config: utils.resolve('config/server'),
    },
  },
  node: {
    __filename: true,
    __dirname: true,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
        options: {
          formatter: eslintFormatter,
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.IgnorePlugin(/vertx/),
    new webpack.DefinePlugin({
      'process.env.CLIENT_PATH': "require('path').join(require('path').dirname(require.main.filename), '..', 'client')",
    }),
  ],
  devtool: 'cheap-module-eval-source-map',
};
