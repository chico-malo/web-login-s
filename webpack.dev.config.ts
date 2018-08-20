/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/7
 */
const devPath = require('path');
const devWebpack = require('webpack');

const api = 'http://192.168.88.7:7000';

module.exports = {
    devServer: {
        hot: true,
        contentBase: devPath.join(__dirname, 'dist'),
        compress: true,
        disableHostCheck: true,
        historyApiFallback: true,
        open: true,
        host: "0.0.0.0",
        port: 9000,
        proxy: {
            '/api/*': {
                target: api,
                pathRewrite: {'^/api': ''},
                changeOrigin: true
            }
        },
        quiet: false,
        watchOptions: {
            poll: 1000
        }
    },
    plugins: [
        new devWebpack.NamedModulesPlugin(),
        new devWebpack.HotModuleReplacementPlugin()
    ]
};
