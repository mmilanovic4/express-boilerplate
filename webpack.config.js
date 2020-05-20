const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const server = {
	target: 'node',
	externals: [nodeExternals()],
	entry: {
		server: [
			'core-js/stable',
			'regenerator-runtime/runtime',
			'./src/server/app.js'
		]
	}
};

const client = {
	target: 'web',
	entry: {
		'assets/client': [
			'./src/client/index.js'
		]
	}
};

module.exports = (env) => {
	const isProd = (env && env.prod) === true;

	const config = (env && env.server) === true ? server : client;
	const plugins =
		(env && env.server) === true
			? []
			: [
					new MiniCssExtractPlugin({
						filename: 'assets/style.css',
						chunkFilename: '[id].css'
					}),
					new CopyPlugin({
						patterns: [
							{
								from: path.resolve(__dirname, 'static'),
								to: path.resolve(__dirname, 'dist', 'static')
							},
							{
								from: path.resolve(__dirname, 'views'),
								to: path.resolve(__dirname, 'dist', 'views')
							},
							{
								from: path.resolve(__dirname, '.env'),
								to: path.resolve(__dirname, 'dist')
							}
						]
					})
			  ];

	return {
		mode: isProd ? 'production' : 'development',
		watch: !isProd,
		...config,
		resolve: {
			extensions: ['.js', '.jsx'],
			alias: {
				Client: path.resolve(__dirname, 'src', 'client'),
				Server: path.resolve(__dirname, 'src', 'server')
			}
		},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, 'dist')
		},
		module: {
			rules: [
				// Babel
				{
					test: /\.jsx?$/,
					use: 'babel-loader',
					exclude: /node_modules/
				},
				// CSS
				{
					test: /\.css$/,
					use: [
						isProd ? MiniCssExtractPlugin.loader : 'style-loader',
						'css-loader'
					]
				}
			]
		},
		plugins: [...plugins],
		optimization: {
			minimize: isProd,
			minimizer: isProd
				? [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
				: []
		}
	};
};
