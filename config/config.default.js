/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {

  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1629944406826_8158';

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  config.mongoose = { // 连接mongodb
    client: {
      url: 'mongodb://localhost:27017/shop', // shop是collection(数据库)名称
      options: {}, // 其他配置项
    },
  };

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
