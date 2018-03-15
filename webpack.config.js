const webpack = require('webpack');
const RaxWebpackPlugin = require('rax-webpack-plugin');

module.exports = {
  plugins: [
    new webpack.ProgressPlugin(),
    new RaxWebpackPlugin({
      frameworkComment: true,
      platforms: []
    }),
  ],
  entry: {
    'pages/index/index': './src/pages/index/index.js'
  },
  output: {
    path: __dirname + '/build/',
    filename: '[name].bundle.js',
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