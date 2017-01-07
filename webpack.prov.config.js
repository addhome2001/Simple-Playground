const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
      "bundle": './src/index.js'
  },
  output: {
      path: path.join(__dirname, 'dest'),
		  filename: '[name].js',
	},
  plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
  ],
  resolve: {
		extensions: ['', '.js', 'jsx'],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
	},
	module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: "babel",
          options: { presets: ["latest"] },
          query: { cacheDirectory: true }
        }],
      },
    ]
  }
};
