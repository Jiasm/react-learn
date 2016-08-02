const webpack = require('webpack')
var path = require('path')

const vendors = [
  'react',
  'react-dom',
  'react-router'
    // ...其它库
]

module.exports = {
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    library: '[name]'
  },
  entry: {
    'lib': vendors
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: '[name]',
      context: __dirname
    })
  ]
}
