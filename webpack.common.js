const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const EslintWebpackPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: "./src/index.tsx",
	plugins: [
		new MiniCssExtractPlugin({
			filename: "static/css/[name].[contenthash].css",
			chunkFilename: "static/css/[name].[contenthash].chunk.css",
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "public", "index.html"),
		}),
		new EslintWebpackPlugin({
			extensions: ["js", "mjs", "jsx", "ts", "tsx"],
		}),
		new Dotenv(),
	],
	module: {
		rules: [
			{
				test: /\.ts(x)?$/,
				use: {
					loader: "ts-loader",
					options: {
						transpileOnly: true,
					},
				},
				exclude: /node_modules/,
			},
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/],
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.svg$/,
				issuer: /\.[jt]sx?$/,
				use: ["@svgr/webpack"],
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.(scss|sass)$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|jpg|jpeg)$/i,
				type: "asset/resource",
				generator: {
					filename: "static/images/[hash][ext][query]",
				},
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "[name].[contenthash].js",
		chunkFilename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "build"),
		publicPath: "/",
	},
	performance: {
		hints: false,
		maxEntrypointSize: 100 * 1024,
		maxAssetSize: 100 * 1024,
	},
	target: ["web", "es5"],
};
