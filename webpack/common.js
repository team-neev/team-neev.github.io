const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'neev.js',
        path: path.resolve(__dirname,  '../dist'),
        publicPath: '/'
    },
    resolve: {
        alias: {
            'masonry': 'masonry-layout',
            'isotope': 'isotope-layout'
        }
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/CNAME' },
        ]),
        new CopyWebpackPlugin([
            { from: 'src/img', to: 'img' },
        ]),
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin('neev.css'),
        new FaviconsWebpackPlugin(path.resolve(__dirname,  '../src/img/logo/favicon.png')),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
            WOW: 'wow.js'
        }),
        new HtmlWebpackPlugin({
            favicon: 'src/img/favicon.ico',
            filename: 'index.html',
            inject: 'body',
            minify: {},
            template: 'src/index.hbs'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [{ loader: 'file-loader' }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{ loader: 'file-loader' }]
            }
        ]
    }
}
