const WebpackHtmlPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: 'production',
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                myHeader: 'myHeader@https://myHeader.duc168.com/myHeaderPackage.js',
                myFooter: 'myFooter@http://myFooter.duc168.com/myFooterPackage.js',
                myMain: 'myMain@http://myMain.duc168.com/myMainPackage.js'
            }
        }),
        new WebpackHtmlPlugin({
            template: './public/index.html'
        })
    ]
}