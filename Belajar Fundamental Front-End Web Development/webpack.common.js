const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./source/web.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: "style-loader",
                },
                {
                    loader: "css-loader",
                },
            ],
        }, ],
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./source/index.html",
            filename: "index.html",
        }),
    ],
};