/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/8
 */
import * as React from 'react';
import { routerPath } from '../cose/router.config';
import Form, { FormItem } from '../components/Form';
import { fields } from './fields';

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
     * @param values
     */
    handleSubmit(values) {
        console.log(values);
        fetch('/api/agencies', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => {
            console.log(r);
        })
    }

    handleSand(e) {
        e.preventDefault();
        console.log('发送验证码');
    }

    render() {
        // 重置密码config
        const registerConfig: Array<FormItem> = fields.concat({
            label: '验证码',
            type: 'verification',
            name: 'verification',
            after: (
                <button className="verificationButton"
                        onClick={this.handleSand}
                        style={{
                            pointerEvents: 'none'
                        }}
                >发送验证码</button>
            )
        });
        return (
            <Form fields={registerConfig}
                  buttonLabel="注册"
                  title="重置密码-"
                  onSubmit={this.handleSubmit.bind(this)}
            >
                <a href="javascript:void(0);"
                   onClick={this.goToLogin.bind(this)}
                >已经有帐号？登录</a>
            </Form>
        )
    }
}
