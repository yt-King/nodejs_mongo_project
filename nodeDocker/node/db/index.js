const mongoose = require('mongoose')
//抛出用于连接数据库的方法
module.exports = ()=>{
    mongoose.connect('mongodb://admin:zufe777@150.158.28.238:27017/190110910532?authSource=admin',{useNewUrlParser:true,useUnifiedTopology:true })
    .then(()=>{
        console.log('数据库连接成功')
    }).catch(err=>{
        console.log('数据库连接失败',err)
    })
}