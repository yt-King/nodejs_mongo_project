const mongoose = require('mongoose')
//抛出用于连接数据库的方法
module.exports = ()=>{
    mongoose.connect('mongodb://localhost:27017/jianshu')
    .then(()=>{
        console.log('数据库连接成功')
    }).catch(err=>{
        console.log('数据库连接失败',err)
    })
}