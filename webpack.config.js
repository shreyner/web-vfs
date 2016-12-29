/**
 * Created by Alexander on 26.12.2016.
 */

const webpack = require("webpack"),
    CheckerPlugin = require("awesome-typescript-loader").CheckerPlugin,
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    path = require("path");

module.exports = {
    devtool: "source-map",
    resolve: {
        extensions: ["", ".ts", ".tsx", ".js", ".jsx"]
    },
    entry: {
        "app": "./client/app/index.tsx"
    },
    output: {
        filename: "public/[name].js",
        devtoolModuleFilenameTemplate: "../[resource-path]"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            inject: true,
            template: "./client/index.tpl.html"
        }),
        new webpack.NoErrorsPlugin(),
        new CheckerPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.ts(x)?$/,
                loader:"awesome-typescript-loader!tslint"
            },
            {
                test: /\.less$/,
                loader: "style!css-loader?modules&importLoaders=1&localIdentName=[path][local]___[hash:base64:5]!less-loader"
            }
        ]
    },
    devServer: {
        contentBase: "./",
    //     proxy: {
    //         "*": {
    //             target: "http://localhost:4000",
    //             secure: false
    //         }
    //     }
    }
};