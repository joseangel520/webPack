   //  https://webpack.js.org/configuration/    modulo  para el desarrolo

const CopyPlugin       = require('copy-webpack-plugin');
const HtmlWebPack      = require('html-webpack-plugin');
const MiniCssExtract   = require("mini-css-extract-plugin");
const { IgnorePlugin } = require('webpack');


module.exports = {
 
    mode: 'development',

    output:{
        clean: true
    },

    module: {
        rules:[{

            test: /\.html$/,
            loader: "html-loader",
            options:{
                sources: false
            }
        },
        {
            test: /\.css$/,
            exclude: /style.css$/,
            use: [ 'style-loader', 'css-loader']
        },

        {
            test: /style.css$/,
            use: [MiniCssExtract.loader, "css-loader"],
        },

        {
            test: /\.(png|jpe?g|gif)$/,
            loader: 'file-loader'
        }
    ]
 },

    optimization:{},

    plugins: [
        new HtmlWebPack({
            template: './src/index.html'
        }),

        new MiniCssExtract({
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        }),
            
        new CopyPlugin({

            patterns:[{ from: 'src/assets/', to: 'assets/' }]
            
        })
    ]


}