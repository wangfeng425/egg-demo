'use strict';

const Controller = require('egg').Controller;

class newsController extends Controller {
  async list() {
    const { ctx } = this;
    // ctx.body = 'hi, news';
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' },
      ],
    };
    await ctx.render('news/list.html', dataList);
  }
}

module.exports = newsController;
