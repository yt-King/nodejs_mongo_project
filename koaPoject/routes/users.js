const router = require('koa-router')()
const { user } = require('../models/user')
const userContro = require('../controller/user')
router.prefix('/users')

//添加系统用户
router.post('/add',userContro.userAdd)

//修改系统用户
router.post('/update', userContro.userUpdate)

//删除系统用户
router.post('/del', userContro.userDel)

//查询所有系统用户
router.post('/findall', userContro.userFindAll)

//查询单个系统用户
router.post('/find', userContro.userFind)

module.exports = router
