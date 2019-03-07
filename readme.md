# 前言

为什么选择react？

首先React严格来说并不是框架，仅仅是Facebook 2013年开源的前端组件化view视图框架。如果拿mvc来比喻，React 只是其中的v。
React在概念和性能上突破了真实dom的束缚，这有赖于它的虚拟dom和diff算法。它除了能够组件化开发ui，还完完全全实现了前后端的隔离，所以你用React写前端视图，基本不必考虑后端事宜，同理，后端设计api也无需参与前端的渲染。

# 特性
1.声明式设计：采用声明范式轻松描述应用。
2.高效：虚拟dom，单项数据流。
3.灵活：React可以与其他库或框架很好地配合


## 技术栈

react + redux + react-router + webpack + fetch + less


## 项目运行

#### 注意：由于涉及大量的 ES6/7 等新属性，nodejs 必须是 6.0 以上版本 ，node 7 是先行版，有可能会出问题，建议使用 node 6 稳定版

```

cd vpReact（进入当前的项目）

npm install  (安装依赖包)

npm start (运行本地开发环境)

npm run build (打包)

```

## 说明

>  开发环境 win7  Chrome 58.0.3029.110  nodejs 6.10.2

>  如果npm install太慢导致有些npm依赖包下载失败 你可以看控制台的报错信息，再手动npm install 具体的开发包，推荐使用淘宝的注册源，直接运行，
```
npm install -g cnpm --registry=https://yfnexus.vpsoft.cn/repository/npm-public/ 

```
各项目需要压缩自己的源代码执行以下命令

gulp pages --path demo  (demo是文件夹名)

## 项目结构
注：项目结构待完善，以下为大概说明.

特别注意：如果需要用纯净版（提供给第三方使用）的话需要把webpack.pure.config.js和webpack.base.config.js名称互换(互换后的入口文件是 pure.js )！！

```
.
├─.babelrc                            // babel的配置
├─.npmrc                              // 配置默认npm私有仓库安装依赖
├─gulpfile.js                         // 对指定的文件或目录进行压缩
├─package.json                        // npm命令包 安装依赖
├─readme.md                           // 工程简介及目录结构说明
├─webpack.base.config.js              // webpack基础配置信息(带模版)
├─webpack.pure.config.js              // webpack基础配置信息(纯净版)
├─webpack.dev.config.js               // webpack开发环境配置信息
├─webpack.pro.config.js               // webpack生产环境配置信息
├─static                              // 静态资源文件
|  ├─vpcommon                         
|  └─vpstatic                         
|     └─favicon.ico                   // 网站图标
├─src                                 // 页面主文件
|  ├─global.js                        // web项目全局配置文件
|  ├─index.html                       // 入口html文件
|  ├─index.js                         // 入口js文件(带模版)
|  ├─index.less                       // 全局样式文件，主要写的是对ant自带样式的替换
|  ├─pure.js                          // 入口js文件(纯净版)
|  ├─routes.js                        // 路由配置
|  ├─script                           
|  |  └─utils.js                      // 常用公共方法
|  ├─assets                           // 全局的静态文件
|  |  ├─localemsg                     // 全局的国际化语言(一般用不到)
|  |  └─redux                         // 全局的状态管理
|  ├─pages                            // 所有开发过程中的页面文件存放(需要纯净版的话可清空此目录)
|  |  ├─routerpath.js                 // 整合各个路由文件
|  |  ├─frame                         // 
|  |  |  ├─error                      // 统一的几个错误提示页面 
|  |  |  ├─Login                      // 统一的登录页面
|  |  |  ├─components                 // 公共动态组件
|  |  |  └─containers                 // 模版的框架文件
|  |  ├─vfm                           //  
|  |  |  ├─dynamic                    // vfm动态模版
|  |  |  ├─vstatic                    // vfm静态资源
|  |  |  └─vfmroutes.js               // vfm用到的路由
|  |  ├─vpm                           // 项目团队的页面文件存放(里面的目录入命名规则自定，建议统一后端)
|  |  |  ├─dynamic                    // vpm动态模版
|  |  |  ├─vstatic                    // vpm静态资源
|  |  |  └─vpmroutes.js               // 项目团队的路由
|  |  ├─vrm                           // 需求团队的页面文件存放(里面的目录入命名规则自定，建议统一后端)
|  |  |  ├─dynamic                    // vrm动态模版
|  |  |  ├─vstatic                    // vrm静态资源
|  |  |  └─vrmroutes.js               // 需求团队的路由 
|  |  └─vtm                           // 测试团队的页面文件存放(里面的目录入命名规则自定，建议统一后端)
|  |  |  ├─dynamic                    // vtm动态模版
|  |  |  ├─vstatic                    // vtm静态资源
|  |     └─vtmroutes.js               // 测试团队的路由

```
