const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
console.log(4, CleanWebpackPlugin)
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')
const mergeConfig = require('./webpack.common')

let config = merge(mergeConfig, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash:8].css",
            chunkFilename: "chunk/[id].[contenthash:8].css"
        }),
        new webpack.HashedModuleIdsPlugin()
    ],
    performance: {  // 配置如何展示性能提示。
        maxEntrypointSize: 4000000,
        maxAssetSize: 800000
    },
    optimization: {
        runtimeChunk: {
            name: 'manifest'
        },
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                dll: {
                    test: /[\\/]node_modules[\\/](react|react-dom|react-dom-router|babel-polyfill|mobx|mobx-react|mobx-react-dom|antd|@ant-design)/,
                    minChunks: 1,
                    priority: 2,
                    name: 'dll'
                },
                codeMirror: {
                    test: /[\\/]node_modules[\\/](react-codemirror|codemirror)/,
                    minChunks: 1,
                    priority: 2,
                    name: 'codeMirror'
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    minChunks: 1,
                    priority: 1,
                    name: 'vendors'
                }
            }
        }
    }
})
const NpmLifeCycleEvent = process.env.npm_lifecycle_event
if (NpmLifeCycleEvent === "build:watch") {
    config = mergeConfig(config, {
        devtool: "cheap-source-map"       ////参数值表示： 转换过的代码（仅限行）   // 选择一种 source map 格式来增强调试过程。不同的值会明显影响到构建(build)和重新构建(rebuild)的速度
    });
}

if (NpmLifeCycleEvent === "build:report") {
    const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
    config.plugins.push(new BundleAnalyzerPlugin())
}


module.exports = config