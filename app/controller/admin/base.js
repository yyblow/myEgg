const { Controller } = require('egg')

class BaseController extends Controller {
  // 进入首页
  async index () {
    await this.ctx.render('admin/offer.html')
  }
}

module.exports = BaseController