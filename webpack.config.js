let webpack = require('webpack')
let path = require('path')
let fs = require('fs')

let vendors = ['react', 'react-dom', 'react-router']

const entryPath = path.resolve(__dirname, 'src')

function getEntries (globPath, otherOpt) {
  let files = fs.readdirSync(globPath)
  let entries = {}
  for (let fileName of files) {
    let realPath = path.resolve(globPath, fileName)
    let isFile = fs.lstatSync(realPath).isFile()
    if (isFile) {
      let isEntryFile = /\.js$/.test(fileName)
      if (isEntryFile) {
        entries[fileName.replace(/\.js$/, '')] = realPath
      }
    }
  }
  return Object.assign(otherOpt || {}, entries)
}

module.exports = {
  entry: getEntries(entryPath, {vendors}),
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
