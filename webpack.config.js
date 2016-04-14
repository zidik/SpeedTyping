module.exports = {
    entry: './es6/main.js',
    output: {
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devServer: {
        port: 3000
    },
    devtool: 'source-map'
};

