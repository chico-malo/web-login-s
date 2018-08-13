/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/8
 */
import { FormItem } from '../components/Form';
import { lang } from '../constants/zh-cn';

// 注册、修改密码、登录表单
export const fields: Array<FormItem> = [{
    label: lang.name,
    type: 'text',
    name: 'identity',
    placeholder: '邮箱/手机号'
}, {
    label: lang.password,
    type: 'password',
    name: 'password',
    placeholder: '密码'
}];

// 验证码表单
export const checkFields: FormItem = {
    label: lang.checkValue,
    type: 'text',
    name: 'checkValue',
    placeholder: '4位验证码',
    maxLength: 4
};
