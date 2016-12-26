/**
 * Created by Alexander on 26.12.2016.
 */

const webpack = require("webpack");

module.exports = {
    devtool: "source-map",
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx']
    },
    entry: {
        "app": "./client/app/index.tsx"
    },
    output: {
        filename: 'public/[name].js',
        devtoolModuleFilenameTemplate: "../[resource-path]"
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.ts(x)?$/, loader: 'awesome-typescript-loader'}
        ]
    },
    devServer: {
        proxy: {
            "*": {
                target: "http://localhost:4000",
                secure: false
            }
        }
    }
};