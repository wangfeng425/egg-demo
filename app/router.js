'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const getIp = middleware.getIp();
  router.get('/', getIp, controller.home.index);// 在指定的路由中添加中间件
  router.get('/news', controller.news.list);
  router.get('/users', controller.users.getUser);
};
