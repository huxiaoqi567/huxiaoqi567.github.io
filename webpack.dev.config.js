"use strict";
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const RaxWebpackPlugin = require('rax-webpack-plugin');
const fs = require('fs');
const config = require('./webpack.config');
const colors = require('chalk');

function getEntries() {
  let result = {};
  let dirs = fs.readdirSync(`${__dirname}/src/pages/`);
  dirs.forEach((dirName) => {
    let matched = dirName.match(/(.+)\.js/);
    if (matched && matched[1]) {
      result['build/pages/'+ matched[1] + '.bundle'] = `./src/pages/${matched[1]}.js`
    }
  });


  return result;
}



var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  public: '0.0.0.0',
  disableHostCheck: true,
  // https:{
  //   key: fs.readFileSync(__dirname+"/server.key"),
  //   cert: fs.readFileSync(__dirname+"/server.crt"),
  //   ca:fs.readFileSync(__dirname+"/ca.crt")
  // },
  stats: {
    colors: true,
    chunks: false,
    errorDetails: true,
  },
});


server.listen(9999, function() {
  console.log(colors.green('\n  Open http://localhost:9999/demo/ \n'));
});