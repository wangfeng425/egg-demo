'use strict';

module.exports = () => {
  return async function getIp(ctx, next) {
    const url = ctx.request.url;
    console.log('url:', url);
    await next();
    ctx.body = `ip地址${url}`;
  };
};
