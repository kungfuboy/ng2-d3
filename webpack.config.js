var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: './src/main.ts',

  output: {
    filename: 'dist/bundle.js'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
};
