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
    extensions: ['', '.js', '.jsx'],
    alias: {
      primer: __dirname + '/node_modules/primer-css/scss/primer.scss',
      octicons: __dirname + '/node_modules/octicons/octicons/octicons.scss'
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.(css|scss)$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
        loader: 'url'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },
  devtool: '#source-map',
  devServer: {
    contentBase: './src',
    hot: true
  }
};
