/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/10
 */
import '../styles/alert.scss';
import * as ReactDOM from "react-dom";
import * as React from "react";
import ReactSVG from 'react-svg';
import { statusCode } from '../constants/zh-cn';

export default function alert(message: string | object) {
    let body = document.body;
    let alert: any = document.getElementById('alert');
    let showDom: any = document.createElement("div");
    // 获取alert节点，如果存在就不再创建弹框了
    if (alert) {
        return;
    }
    // 设置基本属性
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
    // 自我删除的方法
    let close = () => {
        ReactDOM.unmountComponentAtNode(showDom);
        body.removeChild(showDom);
    };
    // 默认三秒之后关闭弹框
    setTimeout(() => {
        close();
    }, 2000);
    ReactDOM.render(
        renderMessage(close, message),
        showDom
    );
};

function renderMessage(close, message) {
    // 默认错误
    let svgPath = '../assets/svg/wran.svg';
    let messageString = message;
    let borderColor = '(255,229,143,1)';
    let backColor = 'rgba(255,251,230,1)';
    // 如果是对象
    if (message instanceof Object) {
        const {status, success} = message;
        messageString = statusCode[status];
        svgPath = success && '../assets/svg/success.svg' || '../assets/svg/error.svg';
        borderColor = success && 'rgba(183,235,143,1)' || 'rgba(255,163,158,1)';
        backColor = success && 'rgba(246,255,237,1)' || 'rgba(246,255,237,1)';
    }
    return (
        <section className="alert"
                 onClick={close}
                 style={{
                     border: `2px solid ${borderColor}`,
                     background: backColor
                 }}
        >
            <ReactSVG path={svgPath}
                      className="svg-wrapper"
                      svgStyle={{
                          width: 20,
                          height: 20
                      }}
            />
            <span>{messageString || '忘记传递展示错误信息'}</span>
        </section>
    );
}