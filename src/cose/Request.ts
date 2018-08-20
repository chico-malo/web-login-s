/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/10
 */

/**
 * ajax请求
 * @param {any} url 请求地址
 * @param {any} method 请求方式
 * @param {any} headers 自定义header
 * @param {any} other 
 * @returns {any}
 * @constructor
 */
export function Request({url, method = 'GET', headers = {}, ...other}) {
    return fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        ...other
    }).then(res => res.json());
}