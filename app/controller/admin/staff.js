const BaseController = require('./base')

class StaffController extends BaseController{
  // 进入后台
  async index () {
    let { userinfo } = this.ctx.session
    await this.ctx.render('admin/index.html', { userinfo })
  }
  // 进入登录界面
  async login() {
    await this.ctx.render('admin/login.html')
  }
  // 提交登录
  async dologin () {
    let { ctx } = this
    let body = ctx.request.body
    let {login_name,login_pwd,code} = body
    login_pwd = ctx.service.tool.md5(login_pwd)

    let result = await ctx.service.staff.find(login_name,login_pwd,code)

    if (result.flag) {
      ctx.session.userinfo = result.data.login_name
      ctx.redirect('/admin')
    } else {
      ctx.body = result.msg
    }
  }
  // 提交退出登录
  async logout () {
    this.ctx.session.userinfo = null
    this.ctx.redirect('admin/login.html')
  }
  // 提交注册
  async register () {
    let { ctx } = this
    let body = ctx.request.body
    let {login_name,login_pwd,staff_name,staff_phone} = body
    login_pwd = ctx.service.tool.md5(login_pwd)
    let result = await new ctx.model.Staff({login_name,login_pwd,staff_name,staff_phone,time_create:Date.now()}).save()

    try {
      console.log(result)
      ctx.body = '注册成功！'
    } catch (error) {
      console.log(error)
    }

  }
  // 获取验证码
  async verify () {
    let { ctx } = this
    let captcha = await ctx.service.tool.getCaptcha()
    ctx.response.type = 'image/svg+xml'
    ctx.session.captchaText = captcha.text
    ctx.body = captcha.data
  }
}

module.exports = StaffController
