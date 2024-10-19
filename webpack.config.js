const path = require('path');

module.exports = {
    mode: 'development', // Set to 'production' for optimized builds
    entry: {
        main: ['./src/index.js', './src/content.js'], // Entry points to your JS files
    },
    output: {
        filename: 'main.js', // Output bundle file name
        path: path.resolve(__dirname, 'dist'), // Output directory for the bundle
    },
    // No need for module rules since we're not using Babel
    devtool: 'source-map', // Optional: helps with debugging
};