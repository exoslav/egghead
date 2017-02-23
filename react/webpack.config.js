var path = require('path');
var webpack = require('webpack');
var ExtractText = require('extract-text-webpack-plugin');

module.exports = function (env) {

  var project = {
    NAME: 'REACT',
    env: env.prod ? 'prod' : 'dev',
    jsBase: './app/js/',
    cssBase: './src/css/'
  }

  var suffix = project.env === 'prod' ? '----------------------->' : '------------------------------>'
  console.log('<---------------------------------------------------------------------->')
  console.log('<------------------------------ ' + project.NAME + ' --------------------------------->')
  console.log('<----------------------- ' + project.env + ' environment ' + suffix)
  console.log('<------------------- the ultimate webpack experience ------------------>')
  console.log('<---------------------------------------------------------------------->')

  var config = {
    entry: {
      'global': project.jsBase + 'app.js'
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'app.js'
    },
    devtool: project.env === 'prod' ? 'source-map' : 'eval-source-map', // viz.: https://webpack.js.org/configuration/devtool/
    plugins: [
      new ExtractText({
        filename: 'styles.min.css',
        disable: false,
        allChunks: true
      })
    ],
    resolve: {
      extensions: ['.js', '.es6', '.jsx', '.json']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          include: path.join(__dirname, '/app/js'),
          exclude: /node_modules/,
          query: {
            cacheDirectory: true,
            presets: ['es2015', 'react'],
            plugins: ["react-html-attrs", "transform-runtime"]
          }
        },
        {
          test: /\.(scss|sass)$/,
          use: ExtractText.extract({
            "fallback": "style-loader",
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: project.env === 'prod' ? true : false
                }
              },
              'sass-loader'
            ]
          })
        },
        {
          test: /\.(png|jpg|svg)$/,
          use: 'url-loader?limit=100000'
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: 'url-loader?limit=10000&minetype=application/font-woff'
        },
        {
          test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: 'file-loader'
        }
      ]
    }
  };

  if(project.env === 'prod') {
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        // source-map musi byt definovano i zde, jinak sse source mapy nebudou generovat (nebo jen pro css)
        // viz.: http://stackoverflow.com/questions/30870830/how-do-i-generate-sourcemaps-when-using-babel-and-webpack
        sourceMap: true
      })
    )
  }

  return config;
}