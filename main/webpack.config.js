const HtmlPlugin = require('html-webpack-plugin');
const federationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: 'development',
    devServer: {
        port: 8083
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    },
    plugins: [
        new federationPlugin({
            name: 'myMain',
            filename: 'myMainPackage.js',
            exposes: {
                './myMainIndex': './src/index.js'
            }
        }),
        new HtmlPlugin({
            template: './public/index.html'
        })
    ]
}