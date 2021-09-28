'use strict';
module.exports = app => {
  // 在中间件最前面
  app.config.coreMiddleware.push('forbidIp'); // 全局添加中间件
  app.config.forbidIp = {
    forbidIps: [
      '192.168.1.12',
      '127.0.0.1',
      '172.16.3.168',
    ],
  };
};
