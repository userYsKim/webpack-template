const path = require('path')
const HtmlPlugin = require('./node_modules/html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')


module.exports = {
    entry : './js/main.js',

    output : {
        // path : path.resolve(__dirname, 'dist'),
        // filename : 'main.js',
        clean : true
    },

    module : {
        rules : [
            {
                test : /\.s?css$/,
                use : [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },

    plugins : [
        new HtmlPlugin({
            template : './index.html'
        }),
        new CopyPlugin({
            patterns : [
                { from : 'static'} // static 폴더를 가르킴
            ]
        })
    ],

    devServer : {
        host : 'localhost'
    }
}