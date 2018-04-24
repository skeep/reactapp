"use strict";

const PATHS = require('./webpack-paths');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.css = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
  include: PATHS.css,
}

exports.extractCss = {
  test: /\.css$/,
  loader: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        query: {
          modules: true,
        },
      },
    ],
  }),
};

exports.babel = {
  test: /\.jsx?$/,
  use: ['babel-loader'],
  include: PATHS.src,
  exclude: /node_modules/,
};

