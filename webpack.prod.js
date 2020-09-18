let path = require('path');


module.exports = {
    target: 'node',
    mode: 'development',
    entry: [
        './src/augmenture.js',
    ],
    output: {
        path: path.join(__dirname, 'dist/'),
    },
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                exclude: /node_modules|static/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
        ]
    },
}
