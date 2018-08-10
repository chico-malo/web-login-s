/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/10
 */
import * as ReactDOM from "react-dom";
import * as React from "react";
import ReactSVG from 'react-svg';
import '../styles/alert.scss';

export default function alert(message) {
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
        <section className="alert"
                 onClick={close}
        >
            <ReactSVG path="../assets/svg/success.svg"
                      className="svg-wrapper"
                      svgStyle={{
                          width: 20,
                          height: 20
                      }}
            />
            <span>{message || '忘记传递展示错误信息'}</span>
        </section>,
        showDom
    );
};