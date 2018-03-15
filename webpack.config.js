const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.ProgressPlugin(),
  ],
  entry: {
    index: './src/pages/index/index.js'
  },
  output: {
    path: __dirname + '/build/',
    filename: '[name].js',
    libraryTarget:'umd'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        // exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0', 'rax']
        }
      }
    ]
  }
};