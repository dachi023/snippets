var path = require('path');

module.exports = {
  context: path.join(__dirname, './src'),
  entry: {
    javascript: './index.js',
    html: './index.html'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],

      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      }
    ]
  }
};
