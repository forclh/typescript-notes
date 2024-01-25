// 引入模块
const path = require('path');
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


// webpack的所有配置信息都要写在module.exports中
module.exports = {
  // 指定入口文件
  entry: './src/index.ts',

  // 指定打包后文件的输出目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    // 打包后的文件名
    filename: 'bundle.js',
    // 打包前清空输出目录（替代插件 clean-webpack-plugin）
    clean: true
  },

  // 指定webpack打包时要使用的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的loader
        use: [
          'ts-loader'
        ],
        // 要排除的文件
        exclude: /node-modules/
      }
    ]
  },

  // 配置webpack的插件
  plugins: [
    // new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ],

  // 用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  } 
};