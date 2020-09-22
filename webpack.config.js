
const path = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
	mode: 'development',
	watch: true,
	entry: ['./src/index.tsx'],
	devtool: 'inline-source-map',
	module: {
        
		rules: [
            {
				test: /\.tsx?$/,
                loader: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		path: `${__dirname}/public`,
		publicPath: '/',
		filename: 'app.js',
	},
	plugins: [
		new webpack.DefinePlugin({
			__DEV__: true,
        }),
        new CheckerPlugin(),
		new DashboardPlugin(),
	],
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		liveReload: true,
		port: 9000,
		historyApiFallback: true,
		writeToDisk: true,
	},
};