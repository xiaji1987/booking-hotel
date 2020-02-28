'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    const { username, password } = ctx.request.body
    await ctx.service.user.loginIn({ username, password })
  }

  async register() {
    const { ctx } = this;
    const { username, password } = ctx.request.body
    await ctx.service.user.register({ username, password })
  }
}

module.exports = UserController;
