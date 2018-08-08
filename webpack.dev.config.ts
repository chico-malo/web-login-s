/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/7
 */
const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.common.config.ts');

const api = 'http://192.168.88.15:9000';

config.devServer = {
    hot: true,
    publicPath: '/dist/',
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 9000,
    proxy: {
        '/api/*': {
            target: api,
            changeOrigin: true,
            pathRewrite: {'^/api': ''}
        }
    }
};
config.plugins.push(new webpack.HotModuleReplacementPlugin());
module.exports = config;