const Service = require('egg').Service

class BookingService extends Service {
  async getCurrency() {
    // sql 及存储业务的组织
    const { ctx, app } = this
    // console.log(user, '----*******')
    // console.log('service层')
    const mess = await ctx.model.Booking.findAll()
    // console.log(mess, '-----')
    if(mess.length === 0) {
      ctx.body = {
        code: 404,
        msg:'失败',
        data: '未找到相关资源'
      }
    } else {
      ctx.body = {
        code: 200,
        msg:'成功',
        data: mess
      }
    }
  }
}

module.exports = BookingService;