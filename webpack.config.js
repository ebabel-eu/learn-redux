const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'bundle': './src/index.js',
        'bundle.min': './src/index.js'
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel'
            },
            {
                test: /\.css$/, 
                loader: 'style!css'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true,
            compress: {
                warnings: false
            }
        })
    ]
};