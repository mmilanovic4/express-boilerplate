const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = env => {
	const isProd = (env && env.prod) === true;

	return {
		mode: isProd ? 'production' : 'development',
		watch: !isProd,
		target: 'node',
		externals: [nodeExternals()],
		entry: {
			server: [
				'core-js/stable',
				'regenerator-runtime/runtime',
				'./src/server/app.js'
			]
		},
		resolve: {
			extensions: ['.js']
		},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, 'dist')
		},
		module: {
			rules: [
				// Babel
				{
					test: /\.js$/,
					use: 'babel-loader',
					exclude: /node_modules/
				}
			]
		},
		plugins: [
			new CopyPlugin([
				{
					from: path.resolve(__dirname, 'static'),
					to: path.resolve(__dirname, 'dist', 'static')
				},
				{
					from: path.resolve(__dirname, 'html'),
					to: path.resolve(__dirname, 'dist', 'html')
				},
				{
					from: path.resolve(__dirname, '.env'),
					to: path.resolve(__dirname, 'dist')
				}
			])
		]
	};
};
