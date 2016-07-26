var path = require('path')
var webpack = require('webpack')

module.exports = {
  // entry point of our application
  entry: './vue-app/main.js',
  // where to place the compiled bundle
  output: {
    path: path.join(__dirname, 'static/dist'),
    filename: 'build.js'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    // `loaders` is an array of loaders to use.
    // here we are only configuring vue-loader
    loaders: [
      {
        test: /\.vue$/, // a regex for matching all files that end in `.vue`
        loader: 'vue'   // loader to use for matched files
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
}