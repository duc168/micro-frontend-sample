const WebpackHtmlPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: 'development',
    devServer: {
        port: 8080,
        open: true
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                myHeader: 'myHeader@http://localhost:8081/myHeaderPackage.js',
                myFooter: 'myFooter@http://localhost:8082/myFooterPackage.js',
                myMain: 'myMain@http://localhost:8083/myMainPackage.js'
            }
        }),
        new WebpackHtmlPlugin({
            template: './public/index.html'
        })
    ]
}