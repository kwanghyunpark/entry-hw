const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.config');

const reactDirPath = path.resolve(__dirname, '..', 'app', 'src', 'renderer', 'react');
const mainPagePath = path.join(reactDirPath, 'main');
const aboutPagePath = path.join(reactDirPath, 'about');
const distTargetPath = path.resolve(reactDirPath, 'dist');

module.exports = merge({
    target: 'electron-renderer',
    entry: {
        main: path.join(mainPagePath, 'App.tsx'),
        about: path.join(aboutPagePath, 'App.tsx'),
    },
    output: {
        path: distTargetPath,
        filename: '[name].build.js',
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|woff)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'resources',
                    publicPath: `${distTargetPath}/resources`,
                },
            },
        ],
    },
}, base);