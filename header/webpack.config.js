const WebpackHtmlPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
module.exports = {
    mode: 'development',
    devServer: {
        port: 8081
    },
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