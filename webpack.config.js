const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: [
      'webpack-dev-server/client?http://localhost:8000',
      'webpack/hot/dev-server',
      './src/index.js',
    ],
  },
  devServer: {
    host: 'localhost',
    port: 8000,
    contentBase: './dest',
  },
  output: {
    path: path.join(__dirname, '/dest'),
    filename: 'bundle.js',
    /* If you want to expose 'ClassName' to global namespace => window.ClassName
      library: 'ClassName',
    */
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(
      {
        'process.env.NODE_ENV': JSON.stringify('development'),
      },
    ),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
  ],
  resolveLoader: {
    modulesDirectories: ['node_modules'],
  },
  resolve: {
    extensions: ['', '.js', 'jsx'],
    modules: [
      path.resolve('./src'),
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel',
          options: { presets: ['latest'] },
          query: { cacheDirectory: true },
        }],
      },
    ],
  },
};
