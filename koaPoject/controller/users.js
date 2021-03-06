let jwt = require('jsonwebtoken')
let Users = require('../model/users')

/**
 * 用户登录
 */
const login = async ctx => {
    let {username,pwd} = ctx.request.body
    
    await Users.findOne({username,pwd}).then(rel=>{
        if(rel){
            let token = jwt.sign({
                username: rel.username,
                _id: rel._id
            },'ytking-server-jwt',{
                expiresIn: 3600 * 24 * 7
            })
        
            ctx.body = {
                code: 200,
                msg: '登录成功',
                token
            }
        }else{
            ctx.body = {
                code: 300,
                msg: '用户名或密码错误'
            }
        }
    }).catch(err=>{
        ctx.body = {
            code: 500,
            msg: '登录时出现异常',
            err
        }
    })
}

/**
 * 用户注册
 */
const reg = async ctx => {
    let {username,pwd} = ctx.request.body

    let isDouble = false

    await Users.findOne({username}).then(rel=>{
        if(rel) isDouble = true
    })

    if(isDouble){
        ctx.body = {
            code: 300,
            msg: '用户名已经存在'
        }
        return
    }

    await Users.create({username,pwd}).then(rel=>{
        if(rel){
            ctx.body = {
                code: 200,
                msg: '注册成功'
            }
        }else{
            ctx.body = {
                code: 300,
                msg: '注册失败'
            }
        }
    }).catch(err=>{
        ctx.body = {
            code: 500,
            msg: '注册时出现异常',
            err
        }
    })
}

/**
 * 验证用户登录
 */
const verify = async ctx => {
    let token = ctx.header.authorization
    token = token.replace('Bearer ','')

    try{
        let result = jwt.verify(token, 'ytking-server-jwt')
        await Users.findOne({_id:result._id}).then(rel=>{
            if(rel){
                ctx.body = {
                    code: 200,
                    msg: '用户认证成功',
                    user: rel
                }
            }else{
                ctx.body = {
                    code: 500,
                    msg: '用户认证失败'
                }
            }
        }).catch(err=>{
            ctx.body = {
                code: 500,
                msg: '用户认证失败'
            }
        })
    }catch(err) {
        ctx.body = {
            code: 500,
            msg: '用户认证失败'
        }
    }
}

/**
 * 修改用户密码
 */
const updatePwd = async ctx => {
    let {username,pwd} = ctx.request.body

    await Users.updateOne(
        {username},
        {pwd}
    ).then(rel=>{
        if(rel.n > 0){
            ctx.body = {
                code: 200,
                msg: '密码修改成功'
            }
        }else{
            ctx.body = {
                code: 300,
                msg: '密码修改失败'
            }
        }
    }).catch(err=>{
        ctx.body = {
            code: 500,
            msg: '修改密码时出现异常',
            err
        }
    })
}

/**
 * 修改用户个人资料
 */
const updatePersonal = async ctx => {
    let {_id, avatar='', sex='', desc='', phone='', email=''} = ctx.request.body

    await Users.updateOne(
        {_id},
        {
            avatar,
            sex,
            desc,
            phone,
            email
        }
    ).then(rel=>{
        if(rel.n > 0){
            ctx.body = {
                code: 200,
                msg: '资料已更新'
            }
        }else{
            ctx.body = {
                code: 300,
                msg: '资料更新失败'
            }
        }
    }).catch(err=>{
        ctx.body = {
            code: 500,
            msg: '资料更新异常'
        }
    })
}

module.exports = {
    login,
    reg,
    verify,
    updatePwd,
    updatePersonal
}