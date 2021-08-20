const { Service } = require('egg')

class StaffService extends Service {

  async find (login_name, login_pwd, code) {
    let { ctx } = this
    try {
      if (ctx.session.captchaText.toLowerCase() != code.toLowerCase()) return { flag: false, msg: '验证码错误' }
      let result = await ctx.model.Staff.findOne({ login_name, login_pwd })
      if (result) {
        return {flag:true,data:result}
      } else {
        return {flag:false,msg:'用户名或密码错误'}
      }
    } catch (error) {
        return {flag:false,msg:error}
    }
  }



}

module.exports = StaffService