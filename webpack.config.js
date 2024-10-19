// webpack.config.js
const path = require('path');

module.exports = {
    mode: 'development', // or 'production'
    entry: {
        main: ['./src/index.js', './src/content.js'], // Entry points to your JS files
    },
    output: {
        filename: 'main.js', // Output bundle file name
        path: path.resolve(__dirname, 'dist'), // Output directory for the bundle
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Apply the rule to JavaScript files
                exclude: /node_modules/, // Exclude node_modules folder
                use: {
                    loader: 'babel-loader', // Optional: if you want to use modern JavaScript features
                },
            },
        ],
    },
    devtool: 'source-map', // Optional: helps with debugging
};
