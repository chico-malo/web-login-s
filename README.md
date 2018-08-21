# web-login-s
web版笨拙的动画加不流畅的体验流程，从而诞生了单点登录 webpack版本。



## 细节

- 基于react前端ui框架、typeScript编写javaScript、fetch发送ajax请求。
- babel-polyfill 兼容浏览器不支持的原生方法。
- es6-promise 解决node异步请求的弊端。(有序的异步请求)
- 更小、更轻的配置，常用loader、最基础的webpack插件。
- 使用自己开发的脚手架工具创建



## 目录结构

```
├── /build/          # 项目输出目录
├── /src/            # 项目源码目录
│ ├── /assets/       # 静态资源
│ ├── /components/   # UI组件
│ ├── /contstants/   # 常量定义
│ ├── /container/    # 页面组件
│ ├── /cose/         # 路由、请求核心
│ ├── /styles/       # 样式
│ ├── /utils/        # 工具函数
│ └── index.html     # 页面入口
│ └── index.tsx      # 入口文件
├── package.json     # 项目信息
├── .gitignore     	 # git忽视文件
├── .tsconfig.json   # tslint配置
└── webpack.base.config.ts         # webpack开发环境配置
└── webpack.config.ts   		  # webpack公共配置
└── webpack.dev.config.ts   	  # webpack代理服务器配置
└── webpack.dll.config.ts   	  # webpack dll动态链接库配置
└── webpack.prod.config.ts   	  # webpack生产打包配置
└── yarn.lock		# 依赖版本
```



## 快速开始

```
克隆项目文件:
git clone https://github.com/chico-malo/web-login-s.git

进入目录安装依赖:
npm install  或者 yarn install

开发：
// 手动打开 http://localhost:9000，端口在代理服务器里面配置。首次打开的0.0.0.0:9000是为修复的bug
npm start  或者 yarn start

打包：
// build文件夹下就是打包后的文件，记得手动move dll文件到项目文件夹中，已经复制在build文件夹下。
npm run dll    或者  yarn run dll
npm run build  或者  yarn run build
```

