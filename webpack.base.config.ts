/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/7
 */
const path = require('path');
const webpack = require('webpack');
// 获取项目配置文件
const pkg = require('./package.json');
// html配置文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清除打包目录
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 拷贝dll文件
const CopyWebpackPlugin = require('copy-webpack-plugin');

// 打包服务器请求地址
const serverURL = {
    development: 'http://192.168.88.15:9000',
    production: ''
};
// 获取启动时 的全局参数
const {PROFILE = 'development', NODE_ENV = 'development'} = process.env;

const DEBUG = NODE_ENV !== 'production';

/**
 * 封装模块绝对路径
 * @param dir
 * @returns {string}
 */
function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, `build/${pkg.name}-${pkg.version}`),
        filename: '[name].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                // use: 'babel-loader?cacheDirectory'
                use: 'awesome-typescript-loader',
                exclude: /node_modules/, // 排除不要加载的文件夹
                include: path.resolve(__dirname, 'src') // 指定需要加载的文件夹
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/image'
                        }
                    }
                ]
            }
        ]
    },
    devtool: "source-map",
    resolve: {
        modules: [ // 优化模块查找路径
            resolve('src'),
            resolve('node_modules') // 指定node_modules所在位置 当你import第三方模块式 直接从这个路径下搜寻
        ],
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: [
        new webpack.DefinePlugin({ // 定义环境变量
            "process.env": JSON.stringify(process.env.NODE_ENV)
        }),
        new HtmlWebpackPlugin({
            template: resolve('./src/index.html'),
            filename: 'index.html',
            title: '注册-上福数据',
            url: serverURL[PROFILE],
            debug: DEBUG,
        }),
        new CopyWebpackPlugin([{
            from: './dll/vendor.dll.js',
            to: resolve('build')
        }]),
        new CleanWebpackPlugin([resolve('build')]),
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
};
