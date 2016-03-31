var path = require('path');

module.exports = {
    entry: './es6/main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                loader: 'babel',
                exclude: /node_modules/,
                test: path.join(__dirname, 'es6'),
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    devServer: {
        port: 3000
    }
};