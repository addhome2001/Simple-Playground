const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = () =>
  ({
    entry: {
      bundle: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://0.0.0.0:8000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, '../src'),
      ],
    },
    devServer: {
      host: '0.0.0.0',
      port: 8000,
      contentBase: path.join(__dirname, '../dist'),
      historyApiFallback: true,
      hot: true,
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
        template: path.join(__dirname, '../templates', '/index.ejs'),
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
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
