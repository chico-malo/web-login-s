/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/7
 */
const devPath = require('path');
const devWebpack = require('webpack');

const api = 'http://192.168.88.15:9000';

module.exports = {
    devServer: {
        hot: true,
        contentBase: devPath.join(__dirname, 'dist'),
        compress: true,
        open: true,
        port: 9000,
        proxy: {
            '/api/*': {
                target: api,
                changeOrigin: true,
                pathRewrite: {'^/api': ''}
            }
        }
    },
    plugins: [
        new devWebpack.NamedModulesPlugin(),
        new devWebpack.HotModuleReplacementPlugin()
    ]
};
