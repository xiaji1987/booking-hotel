'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    const { username, password } = ctx.request.body
  }
}

module.exports = UserController;
