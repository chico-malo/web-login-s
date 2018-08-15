/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/14
 */
const dllPath = require('path');
const dllWebpack = require('webpack');

module.exports = {
    entry: {
        polyfill: ['babel-polyfill', 'whatwg-fetch', 'es6-promise']
    },
    output: {
        filename: '[name].dll.js',
        path: dllPath.join(__dirname, 'dll'),
        // libraryTarget: 'commonjs',
        library: '_dll_[name]_[hash]' // 全局变量名
    },
    plugins: [
        new dllWebpack.DllPlugin({
            name: '_dll_[name]_[hash]',
            path: dllPath.join(__dirname, 'dll', '[name].manifest.json') // manifest文件的输出路径
        })
    ]
};
