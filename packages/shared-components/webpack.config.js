/* global __dirname */
var path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: './index',
    output: {
        filename: 'lib/index.js',
        library: ['shared-components'],
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use:  [
                   { loader: 'babel-loader' }
                ],
                exclude: /node_modules/
            }
        ]
    }
}
