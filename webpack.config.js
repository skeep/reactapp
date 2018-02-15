const webpack = require('webpack');

const PATHS = require('./webpack-paths');
const loaders = require('./webpack-loaders');
const plugins = require('./webpack-plugins');

const config = {
	entry: ['babel-polyfill', PATHS.app],
	output: {
		path: PATHS.build,
		filename: 'bundle.js',
	},
	module: {
    rules: [
      loaders.babel,
      loaders.extractCss
    ],
  },
	resolve: {
    alias: {
      'Components': PATHS.components,
      'Containers': PATHS.containers,
      'Selectors': PATHS.selectors,
      'Actions': PATHS.actions,
    },
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    plugins.htmlWebpackPlugin,
    plugins.extractText,
    plugins.loaderOptions,
    plugins.environmentVariables,
    plugins.manifest,
    plugins.sw,
    plugins.copy,
    plugins.hotModuleReplacement
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    contentBase: PATHS.src,
  },
};

module.exports = config;
