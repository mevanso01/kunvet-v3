const Config = require('config');
const path = require('path');
// const fs = require('fs');
const webpack = require('webpack');
const eslintFormatter = require('eslint-friendly-formatter');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VirtualModulePlugin = require('virtual-module-webpack-plugin');
const utils = require('./utils');

function styleLoaders(options) {
  const output = [];
  const loaders = utils.cssLoaders(options);
  for (const extension of Object.keys(loaders)) {
    const loader = loaders[extension];
    output.push({
      test: new RegExp(`\\.${extension}$`),
      use: loader,
    });
  }
  return output;
}

// Build static config
delete Config.private;

const wpconf = {
  entry: {
    index: ['babel-polyfill', './client/index.js'],
  },
  output: {
    filename: '[name].[hash].js',
    path: utils.resolve('dist/client'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': utils.resolve('client'),
      config$: path.resolve(__dirname, '../common/StaticConfigProvider.js'),
      static_config$: path.resolve(__dirname, '../virtual/staticConfig.json'),
    },
    unsafeCache: /data/,
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
        options: {
          formatter: eslintFormatter,
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: utils.cssLoaders({
            extract: utils.isProduction,
          }),
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/img/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:7].[ext]',
        },
      },
      ...styleLoaders(),
    ],
  },
  plugins: [
    new VirtualModulePlugin({
      moduleName: 'virtual/staticConfig.json',
      contents: JSON.stringify(Config),
    }),
    new webpack.IgnorePlugin(/vertx/),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'client/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency',
    }),
  ],
};

if (process.env.NODE_ENV === 'development') {
  wpconf.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"development"',
  }));
}

module.exports = wpconf;
