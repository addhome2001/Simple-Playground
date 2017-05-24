const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'production';

module.exports = () =>
  ({
    entry: {
      bundle: path.join(__dirname, '../src'),
    },
    output: {
      path: path.join(__dirname, '../dist'),
      filename: '[chunkhash:8].bundle.js',
    },
    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
        __DEV__: false,
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
      new webpack.ProvidePlugin({
        Promise: 'es6-promise',
        fetch: 'isomorphic-fetch',
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          unused: true,
          dead_code: true,
        },
        output: {
          comments: false,
        },
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new HtmlWebpackPlugin({
        title: 'Example',
        filename: 'index.html',
        template: path.join(__dirname, '../templates', 'index.ejs'),
        minify: {
          removeComments: true,
          collapseWhitespace: true,
        },
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
      // 可以直接引入assets下的資源，但是需要加上assets前綴
      // assets: path.resolve(__dirname, './src/assets'),
      // 增加src可讓路徑根目錄為src
      modules: ['node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.js[x]$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },
      ],
    },
  });
