const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
    entry: './src/js/index.js',
    entry: {
        main: [
            path.resolve(__dirname, 'src/scss/main.scss'),
            path.resolve(__dirname, 'src/js/main.js')
        ]
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'build/assets/js/'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        watchContentBase: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/[name].min.css',
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};