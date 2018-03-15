const webpack = require('webpack');
const RaxWebpackPlugin = require('rax-webpack-plugin');

var config = {
  entry: {
    'build/pages/index/index.bundle':'./src/pages/index/index.js'
  },
  output: {
    path: __dirname,
    filename: '[name].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProgressPlugin(),
    new RaxWebpackPlugin({
      frameworkComment: true,
      platforms: []
    }),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      //exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['es2015', 'rax']
      }
    }]
  }
};

module.exports = config;