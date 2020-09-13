const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode = 'development';

const client = {
    stats: 'errors-warnings',
    mode: mode,
    entry: {
        'index': './src/client/index.js'
    },
    target: 'web',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/public'),
        publicPath: "/"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: 'src/client/index.html'
        }),
        new MiniCssExtractPlugin(),
        new CleanTerminalPlugin({
            message: 'development server running on http://localhost:8080',
          })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.(s*)css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader},
                    { loader: 'css-loader'},
                    { loader: 'sass-loader'}
                ],
            },
        ]
    },
    devServer: {
        contentBase: '/dist/public',
        watchContentBase: true,
    },
};

const server = {
    stats: 'errors-warnings',
    mode: mode,
    entry: {
        'server': './src/server/index.js'
    },
    target: 'node',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    },
    externals: [nodeExternals()]
};

module.exports = [client, server];