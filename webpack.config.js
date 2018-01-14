const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const paths = {
  BUILD: path.resolve(__dirname, 'build'),
  SRC: path.resolve(__dirname, 'src'),
  PUBLIC: 'https://localhost:5000/'
}

module.exports = {
  entry: ['babel-polyfill', path.join(paths.SRC, 'app.js')],
  output: {
    path: paths.BUILD,
    filename: '[name]-[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html')
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        mangle: false,
        compress: false
      }
    }),
    new SWPrecacheWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'Components': path.resolve(__dirname, 'src/components/'),
      'Containers': path.resolve(__dirname, 'src/containers/'),
      'Selectors': path.resolve(__dirname, 'src/store/selectors'),
      'Actions': path.resolve(__dirname, 'src/store/actions')
    }
  },
  devServer: {
    contentBase: paths.SRC,
    historyApiFallback: true
  }
}
