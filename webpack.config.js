const path = require('path');
const webpack = require("webpack");
const childprocess = require("child_process");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use:[
          process.env.NODE_ENV === 'production' 
          ? MiniCssExtractPlugin.loader
          : 'style-loader'
          ,
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.png$/, // .png 확장자로 마치는 모든 파일
        loader: "file-loader",
        options: {
          publicPath: "./dist/", // prefix를 아웃풋 경로로 지정
          name: "[name].[ext]?[hash]", // 파일명 형식
        },
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `
          Commit Version : ${childprocess.execSync("git rev-parse --short HEAD")}
          Author : ${childprocess.execSync("git config user.name")}
      `
    }),
    new webpack.DefinePlugin({
      'temp': "1+1",
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      templateParameters: {
        env: process.env.NODE_ENV === 'development' ? '개발용' : '',
      },
      minify: process.env.NODE_ENV === 'development' ? {
        collapseWhitespace: true,
        removeComments: true,
      } : false,
    }),
    new CleanWebpackPlugin({}),
    ...(process.env.NODE_ENV === 'production' 
      ? [new MiniCssExtractPlugin({filename: '[name].css'})]
      : []
    )


  ]
}