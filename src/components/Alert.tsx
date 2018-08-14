/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/10
 */
import '../styles/alert.scss';
import * as ReactDOM from "react-dom";
import * as React from "react";
import { statusCode } from '../constants/zh-cn';

// 定时器变量
let timer;

/**
 * 弹框组件
 * @param {string | object} message
 */
export default function alert(message: string | object) {
    let body = document.body;
    let alert: any = document.getElementById('alert');
    let showDom: any = document.createElement("div");
    // 获取alert节点，如果存在就不再创建弹框了
    if (alert) {
        return;
    }
    // 设置基本样式
    showDom.id = 'alert';
    showDom.style.position = 'absolute';
    showDom.style.top = '-130px';
    showDom.style.left = '0px';
    showDom.style.right = '0px';
    showDom.style.bottom = '0px';
    showDom.style.margin = 'auto';
    showDom.style.width = '18%';
    showDom.style.height = '100px';
    showDom.style.zIndex = 1;
    body.appendChild(showDom);
    // 默认两秒之后关闭弹框
    // timer = setTimeout(() => {
    //     removeMessage()
    // }, 2000);
    ReactDOM.render(
        renderMessage(removeMessage, message),
        showDom
    );
};

/**
 * 删除方法,只要删除就清楚掉定时器，防止下次激活马上关闭弹框
 */
function removeMessage() {
    let body = document.body;
    let alert: any = document.getElementById('alert');
    // 判断有弹框再清除
    if (alert) {
        ReactDOM.unmountComponentAtNode(alert);
        body.removeChild(alert);
        clearTimeout(timer);
    }
}

/**
 * 渲染 弹框
 * @param close 关闭弹框函数
 * @param message 弹框消息
 * @returns {any}
 */
function renderMessage(close, message) {
    // 默认错误
    let svgPath = require('../assets/svg/wran.svg');
    let messageString = message;
    let borderColor = 'rgba(255,229,143,1)';
    let backColor = 'rgba(255,251,230,1)';
    // 如果是对象
    if (message instanceof Object) {
        const {status, success} = message;
        messageString = statusCode[status];
        // 失败
        svgPath = require('../assets/svg/error.svg');
        borderColor = 'rgba(255,163,158,1)';
        backColor = 'rgba(246,255,237,1)';
        // 成功
        if (success) {
            svgPath = require('../assets/svg/success.svg');
            borderColor = 'rgba(183,235,143,1)';
            backColor = 'rgba(246,255,237,1)';
        }
    }
    return (
        <section className="alert"
                 onClick={close}
                 style={{
                     border: `2px solid ${borderColor}`,
                     background: backColor
                 }}
        >
            <img className="svg"
                 src={svgPath}
            />
            <span>{messageString || '忘记传递展示错误信息'}</span>
        </section>
    );
}