const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const clean = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        authentication: "./src/js/authentication.js",
        user: "./src/js/user.js",
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        liveReload: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {   
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                type: 'asset/resource',
            },
        ]
    },
    /* plugins: [].concat(
        ['authentication', 'user'].map(
        (page) =>
            new HtmlWebpackPlugin({
                inject: true,
                template: `./src/html/${page}.html`,
                filename: `${page}.html`,
                chunks: [page],
            })
        )
    ), */
    plugins: [
        new HtmlWebpackPlugin({
            title: 'PixAvenue',
            filename: 'index.html',
            template: './src/html/index.html',
            chunks: ['authentication'],
        }),
        new HtmlWebpackPlugin({
            title: 'PixAvenue',
            filename: 'user.html',
            template: './src/html/user.html',
            chunks: ['user'],
        }),
        new clean.CleanWebpackPlugin(), 
    ]
}