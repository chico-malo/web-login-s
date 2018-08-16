/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/8
 */
import * as React from 'react';
import { routerPath } from '../cose/router.config';
import Form from '../components/Form';
import { fields } from './fields';
import { deepClone } from '../utils/ObjectUtils';

export class Login extends React.Component<any> {
    /**
     * 跳转注册
     */
    goToRegister() {
        const {history} = this.props;
        history.push(routerPath.register);
    }

    /**
     * 跳转修改密码
     */
    goToResetPassword() {
        const {history} = this.props;
        history.push(routerPath.resetPassword);
    }

    /**
     * 提交
     * @param e
     * @param values
     */
    handleSubmit(e, values) {
        console.log(values);
        return true;
    }

    render() {
        // 拦截，修改name
        let newFields = deepClone(fields);
        newFields.forEach(values => {
            if (values.name === 'identity') {
                values.name = 'username';
            }
        });

        return (
            <Form fields={newFields}
                  buttonLabel="登录"
                  onSubmit={this.handleSubmit.bind(this)}
                  action="/login"
                  method="POST"
            >
                <a href="javascript:void(0);"
                   onClick={this.goToRegister.bind(this)}
                >注册账户</a>
                <a href="javascript:void(0);"
                   onClick={this.goToResetPassword.bind(this)}
                >忘记密码</a>
            </Form>
        )
    }
}