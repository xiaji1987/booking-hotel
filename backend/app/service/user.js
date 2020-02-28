const Service = require('egg').Service

class UserService extends Service {
  async loginIn(user) {
    // sql 及存储业务的组织
    const { ctx, app } = this
    const userInfo = await ctx.model.User.findOne({where: { username: user.username }})
    console.log(userInfo)
    let msg = ''
    let code = 0
    if (userInfo == null) {
      msg = '用户不存在，请注册'
      code = 378
    } else {
      if (user.password != userInfo.password) {
        msg = '密码错误，请重新输入'
        code = 399
      } else {
        msg = '登录成功'
        code = 200
      }
    }
    ctx.body = {
      msg: msg,
      code: code
    }
  }

  async register(user) {
    // sql 及存储业务的组织
    const { ctx, app } = this
    let msg = ''
    let code = 0
    const userInfo = await ctx.model.User.findOne({where: { username: user.username }})
    if (userInfo != null) {
      msg = '用户已存在，请重新注册'
      code = 356
    } else {
      await ctx.model.User.create(user)
      msg = '注册成功'
      code = 200
    }
    ctx.body = {
      msg: msg,
      code: code
    }
  }
}

module.exports = UserService