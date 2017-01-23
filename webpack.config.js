const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: [
      'webpack-dev-server/client?http://0.0.0.0:8000',
      'webpack/hot/dev-server',
      './src/index.js',
    ],
  },
  devServer: {
    host: '0.0.0.0',
    port: 8000,
    contentBase: './dist',
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    /* If you want to expose 'ClassName' to global namespace => window.ClassName
      library: 'ClassName',
    */
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
    }),
  ],
  resolve: {
    extensions: ['.js', 'jsx'],
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
};
