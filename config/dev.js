const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = () =>
  ({
    entry: {
      bundle: [
        'webpack/hot/dev-server',
        './src/index.js',
      ],
    },
    devtool: 'eval',
    devServer: {
      host: '0.0.0.0',
      port: 8000,
      contentBase: './dist',
    },
    output: {
      path: path.join(__dirname, '../dist'),
      filename: '[name].js',
      /* If you want to expose 'ClassName' to global namespace => window.ClassName
        library: 'ClassName',
      */
    },
    plugins: [
      new WebpackNotifierPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.LoaderOptionsPlugin({
        minimize: false,
        debug: true,
      }),
      new webpack.ProvidePlugin({
        Promise: 'es6-promise',
        fetch: 'isomorphic-fetch',
      }),
      new HtmlWebpackPlugin({
        title: 'Example',
        filename: 'index.html',
        template: 'templates/index.ejs',
      }),
    ],
    resolve: {
      extensions: ['.js'],
      modules: ['node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
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
