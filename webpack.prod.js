const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	devtool: "source-map",
	optimization: {
		minimize: true,
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
		moduleIds: "deterministic",
		runtimeChunk: {
			name: "manifest",
		},
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: "node_vendors",
					test: /[\\/]node_modules[\\/]/,
					chunks: "all",
				},
				common: {
					test: /[\\/]src[\\/]components[\\/]/,
					chunks: "all",
					minSize: 0,
				},
			},
		},
	},
});
