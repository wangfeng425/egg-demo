'use strict';

const Service = require('egg').Service;

class userService extends Service {
  async userList() {
    const data = await this.ctx.model.User.find(); // 请求mongodb数据库中user表的数据
    return data;
  }
}

module.exports = userService;
