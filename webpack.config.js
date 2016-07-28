var path = require('path')
var webpack = require('webpack')

module.exports = {
  // entry point of our application
  entry: './vue-app/main.js',
  // where to place the compiled bundle
  output: {
    path: path.join(__dirname, 'static/dist'),
    publicPath: "/static/dist/",
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
        test: /.(woff|woff2)$/, 
        loader:"url?prefix=font/&limit=5000" 
      },  
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /\.vue$/, // a regex for matching all files that end in `.vue`
        loader: 'vue'   // loader to use for matched files
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader"
      }
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        $ : "jquery",
        jQuery : "jquery",
        "window.jQuery" : "jquery",
        "root.jQuery" : "jquery"
      })
    ],
    resolve: {
      alias: {
        jquery: "jquery/dist/jquery"
      }
    },
  }