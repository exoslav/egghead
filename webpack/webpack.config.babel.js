var path = require('path')

module.exports = function(env) {
  return {
    entry: ['./app/main.js'],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      // path: './dist',
      pathinfo: !env.prod
    },
    // context: '../egghead',
    devtool: env.prod ? 'source-map' : 'eval',
    // bail: path.resolve(__dirname, 'dist'),
    // module: {
    //   // loaders: {
    //   //   {test: /\.js$/, loader: 'babel!esllint', exlude: /node_modules/},
    //   //   {test: /\.css$/, loader: 'style!css'}
    //   // }
    // }
  }
}
