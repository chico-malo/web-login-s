/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/7
 */
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    mode: 'none',
    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            {test: /\.tsx?$/, loader: "ts-loader"},
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"},
            {test: /\.css$/, loader: "style-loader!css-loader", include: /node_modules/},
            {test: /\.css$/, loader: "style-loader!css-loader?modules", exclude: /node_modules/},
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
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
    plugins: [],
};