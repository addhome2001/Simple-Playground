const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const HOST = process.env.HOST || 'localhost';
const PORT = +process.env.PORT || 8000;

module.exports = () => ({
  entry: {
    bundle: [
      `webpack-dev-server/client?http://${HOST}:${PORT}`,
      'webpack/hot/only-dev-server',
      path.join(__dirname, '../src'),
    ],
  },
  mode: 'development',
  devServer: {
    host: HOST,
    port: PORT,
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
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: true,
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
