var app = (app) => {
  app.once('server', server => {
    console.log('server is running')
  })
  app.once('error', (error,ctx) => {
    console.log('error is:' + error)
  })
  app.once('request', ctx => {
    console.log('request is running')
  })
  app.on('response', ctx => {
    const used = Date.now() - ctx.starttime
    console.log('used time：' + used)
  })
}

module.exports = app