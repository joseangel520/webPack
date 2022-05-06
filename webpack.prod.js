   //  https://webpack.js.org/configuration/    modulo  para el desarrolo

const CopyPlugin       = require('copy-webpack-plugin');
const HtmlWebPack      = require('html-webpack-plugin');
const MiniCssExtract   = require("mini-css-extract-plugin");
const { IgnorePlugin } = require('webpack');

const CssMinizer = require('css-minimizer-webpack-plugin');
const Terser     = require('terser-webpack-plugin');

module.exports = {
 
    mode: 'production',

    output:{
        clean: true,
        filename: 'main.[contenhash].js'

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
        },

        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }    
        }

        

    ]
 },

    optimization:{

        minimize: true,

        minimizer: [
            new CssMinizer(),
            new Terser(),
        ]

    },

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