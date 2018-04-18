const Config = require('config');
const path = require('path');
// const fs = require('fs');
const webpack = require('webpack');
const eslintFormatter = require('eslint-friendly-formatter');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VirtualModulePlugin = require('virtual-module-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VisualizerPlugin = require('webpack-visualizer-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const utils = require('./utils');

// Build static config
const staticConfig = Object.assign({}, Config);
delete staticConfig.private;

const wpconf = {
  entry: {
    index: ['whatwg-fetch', '@babel/polyfill', './client/index.js'],
  },
  output: {
    filename: '[name].[hash].js',
    path: utils.resolve('dist/client'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.mjs', '.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js',
      '@': utils.resolve('client'),
      config$: path.resolve(__dirname, '../common/StaticConfigProvider.js'),
      static_config$: path.resolve(__dirname, '../virtual/staticConfig.client.json'),
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
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax',
        ],
      },
      {
        test: /\.styl$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader',
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader',
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax',
            ],
          },
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory',
        exclude: /node_modules/,
        options: {
          plugins: ['@babel/plugin-transform-async-to-generator'],
        },
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
    ],
  },
  plugins: [
    new VirtualModulePlugin({
      moduleName: 'virtual/staticConfig.client.json',
      contents: JSON.stringify(staticConfig),
    }),
    new webpack.IgnorePlugin(/vertx/),
    new FaviconsWebpackPlugin('./client/assets/favicon.png'),
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
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            // drop_console: true,
          },
        },
      }),
    ],
  },
};

if (process.env.NODE_ENV === 'development') {
  wpconf.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"development"',
  }));
}

if (process.env.ENABLE_WEBPACK_VISUALIZER) {
  wpconf.plugins.push(new VisualizerPlugin());
}

module.exports = wpconf;
