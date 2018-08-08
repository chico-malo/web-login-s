/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/7
 */
import 'unfetch/polyfill';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Promise } from 'es6-promise';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './styles/index.scss';

import { routerConfig } from './cose/router.config';

function run() {
    ReactDOM.render(
        <main>
            <section className="background"/>
            <HashRouter>
                <Switch>
                    {
                        routerConfig.map((values, index) => (
                            <Route exact
                                   key={index}
                                   path={values.path}
                                   component={values.component}
                            />
                        ))
                    }
                </Switch>
            </HashRouter>
        </main>,
        document.getElementById('application') as HTMLElement
    );
}

// 异步回调加载
new Promise((resolve: any) => {
    if (window.addEventListener) {
        window.addEventListener('DOMContentLoaded', resolve);
    } else {
        (window as any).attachEvent('onload', resolve);
    }
}).then(run);