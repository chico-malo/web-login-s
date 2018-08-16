/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/8
 */
import * as React from 'react';
import { Request } from '../../cose/Request';
import URL from '../../constants/URL';
import alert from '../Alert';
import { lang } from '../../constants/zh-cn';

export interface Form {
    /**
     * 按钮名称
     */
    buttonLabel: string;
    /**
     * 表单文件
     */
    fields: Array<FormItem>;
    /**
     * 表单类型
     */
    type?: 'register' | 'resetPassword';
    /**
     * 提交事件
     * @param values
     */
    onSubmit: (e, values) => void;
    /**
     * 请求事件类型
     */
    method?: 'GET' | 'POST',
    /**
     * form提交地址
     */
    action?: string;
}

export interface FormItem {
    label: string;
    type: string;
    name: string;
    placeholder?: string;
    pattern?: string;
    maxLength?: number;
}

type State = {
    values: object;
    countDown: number;
    passwordType: string;
};

export default class Index extends React.Component<Form, State> {
    constructor(props, content) {
        super(props, content);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSand = this.handleSand.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.state = {
            /**
             * 存放input所有的值
             */
            values: {},
            /**
             * 验证码倒计时
             */
            countDown: 0,
            /**
             * 存放input Name props(默认为text，当input聚集时改为password)
             */
            passwordType: 'text'
        };
    }

    /**
     * 渲染item
     * @param {Array<FormItem>} config
     * @returns {any}
     */
    renderFormItem(config: Array<FormItem>) {
        return config.map((values, index) => {
            const {label, type, name, placeholder, ...other} = values;
            // 倒计时
            const {countDown} = this.state;
            let after: any = null;
            // 拦截 验证码表单
            if (name === 'checkValue') {
                after = (
                    <button className="verificationButton"
                            onClick={this.handleSand}
                            style={{
                                pointerEvents: countDown === 0 ? 'auto' : 'none',
                            }}
                    >{countDown === 0 ? '发送验证码' : countDown}</button>
                );
            }
            // autoComplete阻止填充只有type为text时生效，password input默认为text 聚焦时再改回来
            return (
                <section key={index}>
                    <label>{`${label}:`}</label>
                    <input type={name === 'password' ? this.state.passwordType : type}
                           name={name}
                           autoComplete="off"
                           placeholder={placeholder}
                           required
                           onChange={value => this.handleSave(value, name)}
                           onFocus={() => this.handleFocus(name)}
                           {...other}
                    />
                    {after}
                </section>
            )
        });
    }

    /**
     * input聚焦时，判断name更改input type
     * @param name
     */
    handleFocus(name) {
        if (name === 'password') {
            this.setState({
                passwordType: 'password'
            });
        }
    }

    /**
     * 发送手机号
     * @param e
     */
    handleSand(e) {
        e.preventDefault();
        const {type} = this.props;
        const value: any = this.state.values;
        if (!value || !value.identity) {
            alert('请填写正确的手机号或邮箱');
            console.log('empty value=>', value);
            return;
        }
        Request({
            url: `${type === 'register' ? URL.register : URL.password}?identity=${value.identity}`
        }).then(res => {
            console.log(res);
            alert(res);
            // 成功开始验证码倒数定时器
            if (res.success) {
                this.setState({
                    countDown: 60
                });
                let timer = setInterval(() => {
                    this.setState(preFix => ({
                        countDown: preFix.countDown - 1
                    }));
                    if (this.state.countDown === 0) {
                        clearInterval(timer);
                    }
                    console.log(this.state.countDown);
                }, 1000);
            }
        });
    }

    /**
     *
     * 提交
     * @param e
     */
    handleSubmit(e) {
        const {onSubmit} = this.props;
        const {values} = this.state;
        onSubmit && onSubmit(e, values);
    }

    /**
     * 保存value
     * @param e 当前e对象，获取value
     * @param name input name
     */
    handleSave(e, name) {
        const value = e.target.value;
        this.setState((prefix: any) => ({
            values: {
                ...prefix.values,
                [name]: value
            }
        }));
    }

    render() {
        const {buttonLabel, fields, type, method, action} = this.props;
        // 标题
        const title = type && `${lang[type]} - ` || '';
        return (
            <aside className="floatBox">
                <h1 className="logo">{`${title}上福数据`}</h1>
                <p className="descr">上福数据 是金融圈最具影响力的 技术服务供应商</p>
                <form onSubmit={this.handleSubmit}
                      method={method}
                      action={action}
                >

                    {this.renderFormItem(fields)}
                    <p className="service">
                        {this.props.children}
                    </p>
                    <button className="submitBtn">{buttonLabel}</button>
                </form>
            </aside>
        );
    }
}
