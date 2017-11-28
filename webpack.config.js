var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: './module/rulatex.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'rulatex-compiled.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(woff|woff2|eot|svg|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('rulatex-compiled.css'),
    new WriteFilePlugin()
  ],
  stats: {
    colors: true
  },
  devtool: 'eval',
  devServer: {
    watchOptions: {
      poll: true
    }
  }
};
