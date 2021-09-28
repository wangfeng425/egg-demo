# edd-demo
## 目录结构介绍 ##
  |-- src                              // 源码目录
	|   |-- components                   // 组件
	|       |-- common                   // 公共组件
	|		|-- page                   	 // 主要路由页面
	|   |-- App.vue                      // 页面入口文件
    |   |-- directives                   // 全局指令
    |   |-- filters                      // 过滤器
    |   |-- services                     // 接口全局化
    |   |-- utils                        // 公用函数
    |   |-- router                       // 路由配置
	|   |-- main.js                      // 程序入口文件，加载各种公共组件
	|-- .babel.config.js                         // ES6语法编译配置
	|-- .gitignore                       // 忽略的文件
	|-- public
	|   |-- index.html
	|-- package.json                     // 项目及工具的依赖配置文件
	|-- README.md                        // 说明
	|-- publish.sh                        // publish
	|-- .env.*                       // 环境变量文件


## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org