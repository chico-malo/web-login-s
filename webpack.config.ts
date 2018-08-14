/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/14
 */
const base = require('./webpack.base.config.ts');
const merge = require('webpack-merge');

let config;
if (process.env.NODE_ENV === 'production') {
    config = require('./webpack.prod.config.ts');
} else {
    config = require('./webpack.dev.config.ts');
}

module.exports = merge(base, config);