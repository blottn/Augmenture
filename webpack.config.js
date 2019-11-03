const path = require('path');

module.exports = {
    entry: './src/frontend/app.tsx',
    externals: {
        'react-dom': 'ReactDOM',
        'react' : 'React'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    optimization: {
        minimize: false
    },
    output:  { 
        filename: 'bundle.js',
        library: 'augmenture',
        path: path.resolve(__dirname, 'dist/static'),
    }
};

