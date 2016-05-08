var Webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'es6', 'main.js');

module.exports = {
    devtool: 'eval',
    entry: [
        // For hot style updates
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        mainPath
    ],
    output: {
        filename: 'bundle.js',
        path: buildPath,
        publicPath: '/build/'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    plugins: [new Webpack.HotModuleReplacementPlugin()]
};

