const webpack = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                miniCssExtractPlugin.loader,
                /* 'style-loader', // adiciona CSS a DOM injetando a tag <style> */
                'css-loader' // interpreta @import, url()..
            ]
        }]
    }
}

