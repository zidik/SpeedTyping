var path = require('path');

var port = process.env.port || 3000;
var host = 'localhost';


module.exports = {
    entry: [
        `webpack-dev-server/client?http://${host}:${port}`,
        './es6/main.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/')
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};

