const { Service } = require('egg')
const svgCaptcha = require('svg-captcha')
const md5 = require('md5')

class ToolService extends Service {
  // 验证码生成
  async getCaptcha () {
    let captcha = svgCaptcha.create({
      size: 4,
      width: 120,
      height: 50,
      fontSize: 50,
    })
    return captcha
  }

  // md5加密
  md5 (content) {
    return md5(content + 'cjt')
  }
}

module.exports = ToolService