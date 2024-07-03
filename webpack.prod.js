const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const clean = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: { user: "./src/js/user.js" },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
    },
    devtool: false,
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
                /* use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ] */
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'PixAvenue',
            filename: 'index.html',
            template: './src/html/index.html',
            chunks: ['user'],
        }),
        new clean.CleanWebpackPlugin(),
    ]
}