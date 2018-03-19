const path = require('path');
const webpack = require('webpack');
const eslintFormatter = require('eslint-friendly-formatter');
const Config = require('config');
const GeneratePackageJsonPlugin = require('generate-package-json-webpack-plugin');
const VirtualModulePlugin = require('virtual-module-webpack-plugin');
const utils = require('./utils');

const wpconf = {
  // Server
  target: 'node',
  entry: './server/index.js',
  externals: {
    // The root of all evils :(
    'email-templates': 'commonjs email-templates',
  },
  output: {
    path: path.resolve(__dirname, './../server-dist/'),
    filename: 'index.js',
    // index.js will expose a middleware for Google Cloud Functions/AWS Lambda
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: ['.js', '.json'],
    unsafeCache: /data/,
    alias: {
      '@': utils.resolve('server'),
      config$: path.resolve(__dirname, '../common/StaticConfigProvider.js'),
      static_config$: path.resolve(__dirname, '../virtual/staticConfig.json'),
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
    new VirtualModulePlugin({
      moduleName: 'virtual/staticConfig.json',
      contents: JSON.stringify(Config),
    }),
    new webpack.IgnorePlugin(/vertx/),
    new webpack.IgnorePlugin(/^\.\/data\/parser$/), // for mimer
    new GeneratePackageJsonPlugin({}, `${__dirname}/../package.json`),
  ],
};

if (process.env.NODE_ENV === 'production') {
  wpconf.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"',
  }));
} else {
  wpconf.devtool = 'inline-cheap-source-map';
}

module.exports = wpconf;
