import webpack from 'webpack';
import path from 'path';

export default {
  entry: ['./app/main.js'],
  output: {
    filename: 'bundle.js',
    path: './dist',
    // path: path.join(__dirname, 'build'),
  }
}

// var path = require('path');
// var webpack = require('webpack');
//
// module.exports = (function (env) {
//   console.log('webpack started in ' + env + ' environment');
//
//   var config = {
//     entry: {
//       'global': './app/main.js'
//     },
//     output: {
//       path: path.join(__dirname, '/dist'),
//       filename: 'test'
//     },
//     module: {
//       loaders: [{
//         test: /\.js$/,
//         loader: 'babel',
//         include: path.join(__dirname, '/src/js'),
//         exclude: /node_modules/
//       }]
//     }
//   };
//
//   return config;
//
// })();
