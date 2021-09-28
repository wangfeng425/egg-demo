'use strict';

module.exports = options => {
  return async function forbidIp(ctx, next) {
    const forbidIps = options.forbidIps;
    const currentIp = ctx.request.ip;
    console.log(currentIp, forbidIps.indexOf(currentIp) !== -1);
    if (forbidIps.indexOf(currentIp) !== -1) {
      ctx.status = 403;
      ctx.body = '您的ip已被禁用';
    } else {
      await next();
    }

  };
};

