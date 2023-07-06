const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	optimization: {
		minimize: false,
		usedExports: true,
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserPlugin({
				minify: TerserPlugin.esbuildMinify,
				parallel: true,
				terserOptions: {
					sourcemap: true,
				},
			}),
		],
		splitChunks: {
			chunks: "all",
		},
	},
	devServer: {
		host: "localhost",
		port: 3000,
		compress: true,
		historyApiFallback: true,
		hot: true,
		open: true,
	},
});
