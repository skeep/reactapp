const webpack = require('webpack');
const merge = require('webpack-merge');

const PATHS = require('./webpack-paths');
const loaders = require('./webpack-loaders');
const plugins = require('./webpack-plugins');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = {
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
    new HtmlWebpackPlugin({
      template: PATHS.template,
    }),
    plugins.extractText,
  ],
};

let config;
switch (process.env.NODE_ENV) {
	case 'production':
		config = merge(
		  baseConfig,
      {
        devtool: 'source-map',
        plugins: [
          plugins.loaderOptions,
          plugins.environmentVariables,
          plugins.uglifyJs,
          plugins.manifest,
          plugins.sw,
          plugins.copy
        ],
      }
	  );
		break;
	case 'dev':
		config = merge(
			baseConfig,
      {
        devtool: 'eval-source-map',
      },
			loaders.devServer()
		);
    break;
}

module.exports = config;
