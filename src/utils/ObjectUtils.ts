/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/14
 */
/**
 * 深拷贝
 * @param obj 需要拷贝的对象
 * @returns {any}
 */
export function deepClone(obj) {
    let oldObj = JSON.stringify(obj);
    return JSON.parse(oldObj);
}