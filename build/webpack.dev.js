const webpack = require('webpack')
const merge = require('webpack-merge')
const portFinder = require('portfinder')
const commonConfig = require('./webpack.common')
const config = merge(commonConfig, {
    mode: "development",
    devServer: {
        port: 3333,
        // host: "0.0.0.0",
        hot: true,
        open: true,
        historyApiFallback: true,
        contentBase: '../dist',
        compress: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),   // 热更新
        new webpack.NamedModulesPlugin(),
    ],
    devtool: '#eval-source-map' //参数值表示： 原始源代码   // 选择一种 source map 格式来增强调试过程。不同的值会明显影响到构建(build)和重新构建(rebuild)的速度
})
console.log(22, "NODE_ENV", process.env.NODE_ENV)
module.exports = new Promise((resolve, reject) => {
    portFinder.basePort = process.env.PORT || config.devServer.port
    portFinder.getPort((err, port) => {
        if (err) {
            reject(err)
        } else {
            process.env.PORT = port
            config.devServer.port = port
            resolve(config)
        }
    })
})


