const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
var ModuleConcatPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');
var PurifyPlugin = require('@angular-devkit/build-optimizer').PurifyPlugin;
var ionicWebpackFactory = require(process.env.IONIC_WEBPACK_FACTORY);
const devConfig = require('./webpack.config.dev.js');


const externals = [
  (function () {
    var IGNORES = [
      "fs","child_process","electron","path","assert","cluster","crypto","dns",
      "domain","events","http","https","net","os","process","punycode",
      "querystring","readline","repl","stream","string_decoder","tls","tty",
      "dgram","url","util","v8","vm","zlib"
    ];
    return function (context, request, callback) {
      if (IGNORES.indexOf(request) >= 0) {
        return callback(null, "require('" + request + "')");
      }
      return callback();
    };
  })()
];

var optimizedLoaders = [
  {
    test: /\.json$/,
    loader: 'json-loader'
  },
  {
    test: /\.js$/,
    loader: [
      {
        loader: process.env.IONIC_CACHE_LOADER
      },
      {
        loader: '@angular-devkit/build-optimizer/webpack-loader',
        options: {
          sourceMap: true
        }
      },
    ]
  },
  {
    test: /\.ts$/,
    loader: [
      {
        loader: process.env.IONIC_CACHE_LOADER
      },
      {
        loader: '@angular-devkit/build-optimizer/webpack-loader',
        options: {
          sourceMap: true
        }
      },
      {
        loader: process.env.IONIC_WEBPACK_LOADER
      }
    ]
  }
];

var prodConfig = {
  entry: process.env.IONIC_APP_ENTRY_POINT,
  output: {
    path: '{{BUILD}}',
    publicPath: 'build/',
    filename: '[name].js',
    devtoolModuleFilenameTemplate: ionicWebpackFactory.getSourceMapperFunction(),
  },
  externals: externals,
  devtool: process.env.IONIC_SOURCE_MAP_TYPE,

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [path.resolve('node_modules')]
  },

  module: {
    loaders: (process.env.IONIC_OPTIMIZE_JS === 'true')?
      optimizedLoaders
      : devConfig.module.loaders
  },

  plugins: [
    new Dotenv({
      path: '.env.prod', // load this now instead of the ones in '.env'
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true // hide any errors
    }),
    ionicWebpackFactory.getIonicEnvironmentPlugin(),
    ionicWebpackFactory.getCommonChunksPlugin(),
    new ModuleConcatPlugin(),
    new PurifyPlugin()
  ],

  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};


module.exports = prodConfig;
