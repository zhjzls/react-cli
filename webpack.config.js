const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
console.info(55555, path.resolve(__dirname))
const srcDir = path.resolve(__dirname, 'src')
const distDir = path.resolve(__dirname, 'dist')
console.info(6666, srcDir)
const devMode = process.env.mode === "development"
module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devServer: {    // 本地服务配置\
        contentBase: distDir,
        port: 3333,     // 端口号
        hot: true,      // 是否开启热更新； 必须结合 webpack.HotModuleReplacementPlugin 一起使用，才能开启 HMR 
        open: true,    // 启动后，自动打开浏览器
        historyApiFallback: true, // 任意的 404 响应都可能需要被替代为index.html. 默认false            
        compress: true, // 一切服务都启用gzip压缩
    },
    module: {
        unknownContextCritical: false,
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                use: ["babel-loader?cacheDirectory=true"]
            },
            {
                test: /\.less$/,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|)(\?.*)?$/,
                use: ["url-loader"],
                include: [srcDir]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: ["url-loader"],
                include: [srcDir]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: ["url-loader"],
                include: [srcDir]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // inject: false,
            // filename: path.resolve(__dirname, '../index.html'),
            template: path.resolve(__dirname, 'index.html'),
            title: '5块钱',

        }), 
        // new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash:8].css",
            chunkFilename: "chunk/[id].[contenthash:8].css"
        }),
    ]
}