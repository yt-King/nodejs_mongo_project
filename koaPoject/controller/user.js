const { user } = require('../models/user')

//添加系统用户
const userAdd = async (ctx) => {
    // let { body } = ctx.request
    let { username, pwd } = ctx.request.body
    await user.create({ username, pwd }).then(rel => {
        if (rel) {
            ctx.body = {
                code: 200,
                msg: '添加成功',
                data: rel
            }
        } else {
            ctx.body = {
                code: 300,
                msg: '添加失败',
            }
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '添加异常',
        }
        console.error(err)
    })
}

//修改系统用户
const userUpdate = async (ctx) => {
    let params = ctx.request.body
    await user.updateOne(
        { _id: params._id },
        {
            username: params.username,
            pwd: params.pwd
        }
    ).then(rel => {
        ctx.body = {
            data: rel
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '修改异常',
        }
        console.error(err)
    })
}

//删除系统用户
const userDel = async (ctx) => {
    let { _id } = ctx.request.body
    await user.findOneAndDelete({ _id }).then(rel => {
        ctx.body = {
            data: rel
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '删除异常',
        }
        console.error(err)
    })
}

//查询所有系统用户
const userFindAll = async (ctx) => {
    await user.find().then(rel => {
        ctx.body = {
            data: rel
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '查询异常',
        }
        console.error(err)
    })
}

//查询系统用户byId
const userFind = async (ctx) => {
    let { _id } = ctx.request.body
    await user.findOne({ _id }).then(rel => {
        ctx.body = {
            data: rel
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '查询异常',
        }
        console.error(err)
    })
}
module.exports = {
    userAdd,
    userUpdate,
    userDel,
    userFind,
    userFindAll
}