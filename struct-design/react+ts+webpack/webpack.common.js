const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const Dotenv = require('dotenv-webpack');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const entryPoints = ["inline", "polyfills", "sw-register", "styles", "vendor", "main"];

const WebpackPwaManifest = require('webpack-pwa-manifest'); // for read manifest file
const manifest = require('./public/manifest.json');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // rm -Rf 명령어 필요없이 빌드폴더를 관리해줌

module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname + 'dist'),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts)$/,
                exclude: "/node_modules",
                use: ['babel-loader'],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(ttf|eot|woff|svg|woff2|png|ico)$/,
                loader: 'file-loader'
            },
        ]
    },
    optimization: {
        minimizer: [
            new TerserWebpackPlugin({
                parallel: true // Enable/disable multi-process parallel running.
            })
        ],
        runtimeChunk: {
            name: "manifest"
        }
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        }),
        new HtmlWebPackPlugin({
            template: 'public/index.html',
            filename: 'index.html',
            "inject": true,
            "compile": true,
            "minify": false,
            "cache": true,
            "showErrors": true,
            "chunks": "all",
            "excludeChunks": [],
            "title": "Webpack App",
            "xhtml": true,
            "chunksSortMode": function sort(left, right) {
                let leftIndex = entryPoints.indexOf(left.names[0]);
                let rightindex = entryPoints.indexOf(right.names[0]);
                if (leftIndex > rightindex) {
                    return 1;
                } else if (leftIndex < rightindex) {
                    return -1;
                } else {
                    return 0;
                }
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new Dotenv(),
        new WebpackPwaManifest(manifest)
    ],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
};
