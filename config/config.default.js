var config = {}

config.keys = '123456'
// 模板引擎配置
config.view = {
  defaultViewEngin: 'nunjucks',
  mapping: {
    '.html': 'nunjucks'
  }
}
// csrf安全配置
config.security = {
  csrf: {
    queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
    bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
  },
  // csrf: false,
  // domainWhiteList: ['http://localhost:8080']
},
// 数据库连接配置
config.mongoose = {
  client: {
    url: 'mongodb://127.0.0.1:27017/itElite',
    options: {},
  }
},
// session参数配置
config.session = {
  key: 'EGG_SESS',
  maxAge: 10 * 1000, // 10秒
  httpOnly: true,
  encrypt: true,
}  

// 中间件配置
config.middleware = ['adminAuth']
config.adminAuth = {
  enable: true,
  match: '/admin'
}


module.exports = config
 