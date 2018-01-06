const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const paths = {
  BUILD: path.resolve(__dirname, 'build'),
  SRC: path.resolve(__dirname, 'src')
}

module.exports = {
  entry: path.join(paths.SRC, 'app.js'),
  output: {
    path: paths.BUILD,
    filename: 'app.bundle.js'
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
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
      'Components': path.resolve(__dirname, 'src/components/')
    }
  },
  devServer: {
    contentBase: paths.SRC
  }
}
