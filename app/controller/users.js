'use strict';

const Controller = require('egg').Controller;

class usersController extends Controller {
  async getUser() {
    const { ctx } = this;
    const info = await ctx.service.users.userList(); // 拿到service中请求到的数据
    console.log(info);
    ctx.body = { code: 10000, data: info, msg: 'success' };
  }
}

module.exports = usersController;
