/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/8
 */
import { FormItem } from '../components/Form';

// 注册、修改密码、登录表单
export const fields: Array<FormItem> = [{
    label: '用户名',
    type: 'text',
    name: 'identity',
    placeholder: '邮箱/手机号'
}, {
    label: '密码',
    type: 'password',
    name: 'password',
    placeholder: '密码'
}];

