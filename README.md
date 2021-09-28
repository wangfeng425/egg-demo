# edd-demo
├── package.json
├── app.js (可选)
├── agent.js (可选)
├── app
|   ├── router.js  （请求 URL 和具体承担执行动作的 Controller 的对应关系）
│   ├── controller （解析用户的输入，处理后返回相应的结果）
│   ├── service (业务逻辑封装)
│   ├── middleware (中间件)
│   ├── model (领域模版)
│   ├── public
│   ├── view
│   └── extend (扩展)
│       ├── helper.js (可选)
│       ├── request.js (可选)
│       ├── response.js (可选)
│       ├── context.js (可选)
│       ├── application.js (可选)
│       └── agent.js (可选)
├── config
|   ├── plugin.js
|   ├── config.default.js
└── test
    ├── middleware
    |   └── response_time.test.js
    └── controller
        └── home.test.js


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