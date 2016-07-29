var webpack = require('webpack')
var path = require('path')

var vendors = ['react', 'react-dom', 'react-router']

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
    vendors
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      }, {
        test: /\.css$/,
        loader: 'style!css?module&localIdentName=[hash:base64:5]&-url'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendors.js'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
