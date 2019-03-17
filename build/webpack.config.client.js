const Config = require('config');
const path = require('path');
// const fs = require('fs');
const webpack = require('webpack');
const eslintFormatter = require('eslint-friendly-formatter');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const VirtualModulePlugin = require('virtual-module-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VisualizerPlugin = require('webpack-visualizer-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const TargetsPlugin = require("targets-webpack-plugin");
const HappyPack = require('happypack');
const utils = require('./utils');

const ErrorCodeInternal = require('../common/ErrorCodeInternal');

// Build static config
const staticConfig = Object.assign({}, Config);
delete staticConfig.private;

const gitRev = new GitRevisionPlugin();

const wpconf = {
  entry: {
    index: ['whatwg-fetch', '@babel/polyfill', './client/index.js'],
  },
  output: {
    filename: '[name].[hash].js',
    path: utils.resolve('dist/client'),
    publicPath: '/',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.mjs', '.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js',
      '@': utils.resolve('client'),
      '#': utils.resolve('common'),
      config$: path.resolve(__dirname, '../common/StaticConfigProvider.js'),
      static_config$: path.resolve(__dirname, '../virtual/staticConfig.client.json'),
      static_error_code_internal$: path.resolve(__dirname, '../virtual/errorCodeInternal.json'),
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
        loader: 'happypack/loader',
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
    ],
  },
  plugins: [
    new HappyPack({
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            babelrc: true,
          },
        },
      ],
    }),
    new webpack.DefinePlugin({
      'process.env.COMMIT': JSON.stringify(gitRev.commithash()),
    }),
    new VirtualModulePlugin({
      moduleName: 'virtual/staticConfig.client.json',
      contents: JSON.stringify(staticConfig),
    }),
    new VirtualModulePlugin({
      moduleName: 'virtual/errorCodeInternal.json',
      contents: JSON.stringify(ErrorCodeInternal),
    }),
    new webpack.IgnorePlugin(/vertx/),
    new webpack.HotModuleReplacementPlugin(),
    new FaviconsWebpackPlugin('./client/assets/favicon.png'),
    new CopyWebpackPlugin([
      {
        from: './client/assets/favicon.png',
      },
      {
        from: './client/googleecb5d76c39b57652.html',
      },
    ]),
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
      meta: {
        description: 'Find the latest local jobs for students like you on Kunvet!',
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency',
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      include: ['employee', 'auth', 'account'],
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          compress: {
            pure_funcs: ['Logger.debug', 'this.$debug'],
            warnings: false,
            // drop_console: true,
          },
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    open: true,
    hot: true,
    historyApiFallback: true,
    overlay: true,
  },
};

if (process.env.NODE_ENV === 'development') {
  wpconf.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"development"',
  }));
  wpconf.devtool = 'cheap-module-eval-source-map';
}

if (process.env.NODE_ENV === 'production') {
  wpconf.devtool = 'hidden-source-map';
  wpconf.plugins.push(new TargetsPlugin({
    browsers: ['last 2 versions', 'chrome >= 41'],
  }));
}

if (process.env.ENABLE_WEBPACK_VISUALIZER) {
  wpconf.plugins.push(new VisualizerPlugin());
}

module.exports = wpconf;
