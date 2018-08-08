/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/8
 */

import { Login } from '../container/Login';
import { Register } from '../container/Register';
import { ResetPassword } from '../container/ResetPassword';

export interface RouterConfig {
    path: string;
    component: any
}

// 路由path
export const routerPath = {
    login: '/',
    register: '/register',
    resetPassword: '/resetPassword'
};

// 路由基本配置
export const routerConfig: Array<RouterConfig> = [{
    path: routerPath.login,
    component: Login
}, {
    path: routerPath.register,
    component: Register
}, {
    path: routerPath.resetPassword,
    component: ResetPassword
}];