const mongoose = require('mongoose')
//创建模板
const userSchema = new mongoose.Schema({
    username: String,
    pwd: String
})

const user = mongoose.model('users', userSchema)

module.exports = {
    user
}