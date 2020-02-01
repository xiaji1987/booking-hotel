const Service = require('egg').Service

class BookingService extends Service {
  async getCurrency() {
    // sql 及存储业务的组织
    const { ctx, app } = this
    // console.log(user, '----*******')
    console.log('service层')
    const mess = await ctx.model.Booking.findAll()
    console.log(mess, '-----')
    ctx.body = {
      msg: '成功',
      data: mess,
      flag: true
    }
    return mess.dataValues
  }
}

module.exports = BookingService;