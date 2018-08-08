/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/8
 */
import * as React from 'react';

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
     * logo标题
     */
    title?: string;
    /**
     * 提交事件
     * @param values
     */
    onSubmit: (values) => void;
}

export interface FormItem {
    label: string;
    type: string;
    name: string;
    placeholder?: string;
    after?: React.ReactNode;
}

type State = {
    values: object;
};

export default class Index extends React.Component<Form, State> {
    constructor(props, content) {
        super(props, content);
        this.state = {
            values: {}
        };
    }

    /**
     * 渲染item
     * @param {Array<FormItem>} config
     * @returns {any}
     */
    renderFormItem(config: Array<FormItem>) {
        return config.map((values, index) => {
            const {label, type, name, placeholder, after, ...other} = values;
            return (
                <section key={index}>
                    <label>{`${label}:`}</label>
                    <input type={type}
                           name={name}
                           placeholder={placeholder}
                           required
                           onChange={value => this.handleSave(value, name)}
                           {...other}
                    />
                    {after}
                </section>
            )
        });
    }

    /**
     *
     * 提交
     * @param e
     */
    handleSubmit(e) {
        e.preventDefault();
        const {onSubmit} = this.props;
        const {values} = this.state;
        onSubmit && onSubmit(values);
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
        const {buttonLabel, fields, title = ''} = this.props;
        return (
            <aside className="floatBox">
                <h1 className="logo">{`${title}上福数据`}</h1>
                <p className="descr">上福数据 是金融圈最具影响力的 技术服务供应商</p>
                <form onSubmit={this.handleSubmit.bind(this)}>
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
