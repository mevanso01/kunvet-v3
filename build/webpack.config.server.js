const path = require('path');
const webpack = require('webpack');
const eslintFormatter = require('eslint-friendly-formatter');
const Config = require('config');
const GeneratePackageJsonPlugin = require('generate-package-json-webpack-plugin');
const VirtualModulePlugin = require('virtual-module-webpack-plugin');
const utils = require('./utils');

const staticConfig = Object.assign({}, Config);

const basePackageValues = {
  dependencies: {
    handlebars: '',
  },
};

const wpconf = {
  // Server
  target: 'node',
  entry: './server/index.js',
  externals: {
    // The root of all evils :(
    'email-templates': 'commonjs email-templates',
  },
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'index.js',
    // index.js will expose a middleware for Google Cloud Functions/AWS Lambda
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: ['.mjs', '.js', '.json'],
    unsafeCache: /data/,
    alias: {
      '@': utils.resolve('server'),
      config$: path.resolve(__dirname, '../common/StaticConfigProvider.js'),
      static_config$: path.resolve(__dirname, '../virtual/staticConfig.server.json'),
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
      moduleName: 'virtual/staticConfig.server.json',
      contents: JSON.stringify(staticConfig),
    }),
    new webpack.IgnorePlugin(/vertx/),
    new webpack.IgnorePlugin(/^\.\/data\/parser$/), // for mimer
    new GeneratePackageJsonPlugin(basePackageValues, `${__dirname}/../package.json`),
  ],
  optimization: {
    minimizer: [
    ],
  },
};

if (process.env.NODE_ENV !== 'production') {
  wpconf.devtool = 'inline-cheap-source-map';
}

switch (process.env.TARGET) {
  case 'lambda':
    // AWS Lambda
    wpconf.plugins.push(new webpack.DefinePlugin({
      'process.env.TARGET': '"lambda"',
      'process.env.DISABLE_SERVER': 'true',
    }));
    break;
  case 'gcf':
    // Google Cloud Functions
    wpconf.plugins.push(new webpack.DefinePlugin({
      'process.env.TARGET': '"gcf"',
      'process.env.DISABLE_SERVER': 'true',
    }));
    break;
  case 'normal':
  default:
    // Normal long-running server
    wpconf.plugins.push(new webpack.DefinePlugin({
      'process.env.TARGET': '"normal"',
      'process.env.DISABLE_SERVER': 'false',
    }));
    break;
}

module.exports = wpconf;
