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
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'eval',
  watch: true
};
