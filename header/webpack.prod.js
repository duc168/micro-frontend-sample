const WebpackHtmlPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
module.exports = {
    mode: 'production',
    plugins: [
        new ModuleFederationPlugin({
            name: 'myHeader',
            filename: 'myHeaderPackage.js',
            exposes: {
                './myHeaderIndex': './src/index.js'
            }
        }),
        new WebpackHtmlPlugin({
            template: './public/index.html'
        })
    ]
}