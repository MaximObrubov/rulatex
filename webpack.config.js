var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './module/rulatex',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'rulatex-compiled.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // TODO: add fonts to webpack somehow
      // url-loader work as good as shit
      // { test: /\.(woff|woff2|eot|ttf|svg)(\?|$)/, use: 'url-loader?limit=100000&name=[name].[ext]' }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'eval',
  watch: true
};
