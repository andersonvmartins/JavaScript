const modoDEV = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDEV ? 'development' : 'production' ,
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/, //regex
            use: [
                MiniCssExtractPlugin.loader,
                /* 'style-loader', // adiciona CSS a DOM injetando a tag <style> */
                'css-loader', // interpreta @import, url()..
                'sass-loader',
                

            ]
        },{
            test: /\.(png|svg|jpg|gif)$/,
            use: [ {
                loader: 'file-loader',
                options: {
                    name: "[contenthash].[ext]",
                    esModule: false
                }
                
            }]

        }]
    }
}

