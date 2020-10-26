const path = require('path');

let mode = 'development';

module.exports = [
    {
        target: 'node',
        mode: mode,
        entry: {
            main: './src/augmenture.js',
        },
        output: {
            path: path.resolve(__dirname, 'dist/'),
            filename: 'augmenture.js',
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
            ],
        },
        node: {
            __dirname: false,
        }
    },
    {
        mode,
        entry: {
            home: './src/frontend/home.jsx',
            index: './src/frontend/index.jsx',
        },
        output: {
            path: path.resolve(__dirname, 'dist/frontend'),
            filename: '[name].js',
        },
        module: {
            rules: [
                {
                    test: /\.m?jsx?$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    }
                },
                {
                    test: /\.scss$/i,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ]
                }
            ],
        },
    },
];
