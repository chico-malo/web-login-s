/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/8
 */
import * as React from 'react';
import { routerPath } from '../cose/router.config';
import Form, { FormItem } from '../components/Form';
import { checkFields, fields } from './fields';
import { lang } from '../constants/zh-cn';
import { Request } from '../cose/Request';
import alert from '../components/Alert';
import URL from '../constants/URL';

export class ResetPassword extends React.Component<any> {
    /**
     * 跳转登录
     */
    goToLogin() {
        const {history} = this.props;
        history.push(routerPath.login);
    }

    /**
     * 提交
     * @param e
     * @param values
     */
    handleSubmit(e, values) {
        e.preventDefault();
        Request({
            url: `${URL.user}/password`,
            method: 'PUT',
            body: JSON.stringify(values)
        }).then(res => {
            console.log(res);
            const {history} = this.props;
            // 后台信息弹框
            alert(res);
            // 成功回调
            if (res.success) {
                setTimeout(() => {
                    history.push(routerPath.login);
                }, 1000);
            }
        });
    }

    render() {
        // 重置密码config
        const registerConfig: Array<FormItem> = fields.concat(checkFields);
        return (
            <Form fields={registerConfig}
                  buttonLabel={lang.resetPassword}
                  type="resetPassword"
                  onSubmit={this.handleSubmit.bind(this)}
            >
                <a href="javascript:void(0);"
                   onClick={this.goToLogin.bind(this)}
                >已经有帐号？登录</a>
            </Form>
        )
    }
}
