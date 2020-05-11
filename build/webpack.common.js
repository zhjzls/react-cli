const path = require('path')
const os = require('os')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 03 利用happypack 多线程打包
const HappyPack = require('happypack')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

console.info(55555, path.resolve(__dirname))
const srcDir = path.resolve(__dirname, '../src')
const devMode = process.env.NODE_ENV === "development"
module.exports = {
    entry: {
        app: path.resolve(__dirname, '../index.js'), // success
        // bodyContent: `${srcDir}/index.js`,      // 
        // test: `${srcDir}/test.js`
        // app: path.join(__dirname, '../index.js')
    },
    output: {
        // filename: '[name].bundle.js',
        filename: '[name].[chunk:8].js',
        path: path.resolve(__dirname, '../dist'),
        // chunkFilename: "chunk/[name]"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, '../src/'),
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
    optimization: {
        runtimeChunk: {
            name: 'manifest'
        },
        splitChunks: { 
            chunks: "all",  // 表示选择哪些块进行优化,接收函数 或 字符串， 字符串可选项 'all', 'async', 'initial' //  默认只作用于异步模块，为`all`时对所有模块生效,`initial`对同步模块有效
            cacheGroups: {
                dll: {
                    test: /[\\/]node_modules[\\/](react|react-dom|react-dom-router|babel-polyfill|mobx|mobx-react|mobx-react-dom|antd|@ant-design)/,
                    minChunks: 1, 
                    priority: 2, 
                    name: "dll"
                },
                codeMirror: {
                    test: /[\\/]node_modules[\\/](react-codemirror|codemirror)/,
                    minChunks: 1, 
                    priority: 2,
                    name: "codemirror"
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    minChunks: 1, 
                    priority: 1, 
                    name: "vendors"
                }
            }
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            // inject: false,
            // filename: path.join(__dirname, 'index.html'),
            template: path.resolve(__dirname, '../index.html'),
            title: '5块钱',
        }), 
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NamedModulesPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: "[name].[contenthash:8].css",
        //     chunkFilename: "chunk/[id].[contenthash:8].css"
        // }),

        // 03 开启 happypack的线程池
        // new HappyPack({
        //     id: "happybabel",
        //     loaders: ["babel-loader?cacheDirectory=true"],
        //     threadPool: happyThreadPool,
        //     // cache: true,
        //     verbose: true
        // })
    ],
    resolve: {
        alias: {
            "@": srcDir,
        }
    }
}