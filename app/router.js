var router = (app) => {
  const {router,controller} = app
  router.get('/admin', controller.admin.staff.index)
  router.get('/admin/login', controller.admin.staff.login)
  router.get('/admin/logout', controller.admin.staff.logout)
  router.post('/admin/dologin', controller.admin.staff.dologin)
  router.post('/admin/register',controller.admin.staff.register)
  router.get('/admin/verify',controller.admin.staff.verify)
  
}

module.exports = router