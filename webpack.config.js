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
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },
  plugins: [
  ],
  watch: false,
  devtool: '#source-map',
  devServer: {
    contentBase: './src',
    hot: true
  }
};
