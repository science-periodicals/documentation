const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const { babel } = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  target: 'web',

  mode: isProd ? 'production' : 'development',

  entry: {
    main: isProd
      ? ['./src/app.js']
      : [
          'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
          './src/app.js'
        ]
  },

  output: {
    filename: `documentation-bundle.[name]${isProd ? '.[chunkhash]' : ''}.js`,
    path: path.resolve(__dirname, 'public/assets/'),
    publicPath: '/assets/',
    hotUpdateChunkFilename: 'hot/[id].[hash].hot-update.js',
    hotUpdateMainFilename: 'hot/[hash].hot-update.json'
  },

  devtool: isProd ? undefined : 'cheap-module-eval-source-map',

  resolve: {
    mainFields: ['module', 'browser', 'main'],
    alias: isProd
      ? undefined
      : {
          // prevent multiple instances of react with npm link workflow
          react: path.resolve(__dirname, 'node_modules/react'),
          'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
          'react-router': path.resolve(__dirname, 'node_modules/react-router'),
          'react-router-dom': path.resolve(
            __dirname,
            'node_modules/react-router-dom'
          ),
          '@babel/preset-react': path.resolve(
            __dirname,
            'node_modules/@babel/preset-react'
          ),
          // fake global linking of sa deps
          '@scipe/ui$': path.resolve(
            __dirname,
            'node_modules/@scipe/ui/src/index.js'
          )
        }
  },

  module: {
    rules: [
      {
        test: /unicode\/category\/So/,
        use: [
          {
            loader: 'null-loader'
          }
        ],
        include: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: babel.presets,
              plugins: babel.plugins
            }
          }
        ],
        exclude: isProd ? /node_modules/ : undefined,
        include: [path.resolve(__dirname, 'src')].concat(
          isProd
            ? []
            : [
                fs.realpathSync(
                  path.resolve(__dirname, 'node_modules/@scipe/ui/src')
                )
              ]
        )
      },

      // CSS
      {
        test: /\.css$/,
        sideEffects: true,

        use: [
          {
            loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            options: isProd
              ? { publicPath: path.resolve(__dirname, 'public/assets/') }
              : {}
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: function(loader) {
                return [
                  require('postcss-import')(),
                  require('postcss-url')(),
                  require('postcss-preset-env')({
                    /* see: https://github.com/csstools/postcss-preset-env/issues/32 */
                    browsers: 'last 2 versions',
                    stage: 3,
                    features: {
                      'nesting-rules': false /* disable css nesting which does not allow nesting of selectors without white spaces between them */,
                      'custom-media-queries': true
                    }
                  }),
                  require('postcss-nested') /*replace cssnext nesting with this one which allows for sass style nesting*/,
                  require('postcss-reporter')({
                    clearAllMessages: false
                  })
                ];
              }
            }
          }
        ],
        include: [path.resolve(__dirname, 'src')] // does this work with imports?
      }
    ]
  },

  //  optimization: {
  //    minimize: false
  //  },

  optimization: isProd
    ? {
        minimizer: [
          new TerserPlugin({
            // sourceMap: true,
            terserOptions: {
              keep_classnames: true,
              keep_fnames: true
            }
          }),
          new OptimizeCSSAssetsPlugin({})
        ]
      }
    : undefined,

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      )
    }),
    // See https://webpack.js.org/plugins/ignore-plugin/#example-of-ignoring-moment-locales
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/
    }),
    isProd
      ? new MiniCssExtractPlugin({
          filename: 'documentation-bundle.[name].[hash].css',
          chunkFilename: 'documentation-bundle.[id].[hash].css'
        })
      : null,
    isProd ? null : new webpack.HotModuleReplacementPlugin(),
    new AssetsPlugin({
      filename: 'documentation-bundle-manifest.json',
      fullPath: false,
      path: path.resolve(__dirname, 'public/assets/'),
      prettyPrint: true
    }),
    isProd
      ? null
      : new DuplicatePackageCheckerPlugin({
          verbose: true
        })
  ].filter(Boolean)
};
