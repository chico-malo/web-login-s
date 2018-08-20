/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/10
 */
// 这里的serverUrl为html中的window serverUrl
export const base = (global as any).serverUrl;

export default {
    login: `${base}/system/session`,
    user: `${base}/users`,
    register: `${base}/register-check-value`,
    password: `${base}/password-check-value`
}