const path = require('path')
module.exports = (option, app) => {
  return async function (ctx, next) {
    let pathName = ctx.request.path
    let userinfo = ctx.session.userinfo
    console.log(userinfo)
    if (userinfo) {
      await next()
    } else {
      if (pathName == '/admin/login' || pathName == '/admin/verify' || pathName == '/admin/register' || pathName == '/admin/dologin') {
        await next()
      } else {
        ctx.redirect('/admin/login')
      }
    }
  }
}