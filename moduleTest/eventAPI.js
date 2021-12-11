const EventEmitter = require('events')

class CustumEvent extends EventEmitter {}

const ce = new CustumEvent()
//使用on声明test事件
ce.on('test',()=>{
    console.log('this is a test!')
})
//定时器,每隔一秒触发一次test
setInterval(() => {
    ce.emit('test')
}, 1000)

//传入一个异常
ce.on('error',(err,date)=>{
    console.log(err)
    console.log(date)
})
//传入事件信息参数
ce.emit('error',new Error('this is a error!'),Date.now())

//使用once声明事件（只被执行一次）
ce.once('test1',()=>{
    console.log('this is a once!')
})
//定时器,每隔一秒触发一次test,但是只会执行一次
setInterval(() => {
    ce.emit('test1')
}, 1000)


//remove操作
function fn1(){
    console.log('this is a fn1!')
}
function fn2(){
    console.log('this is a fn2!')
}
ce.on('newtest',fn1)
ce.on('newtest',fn2)
setInterval(() => {
    ce.emit('newtest')
}, 1000)
setTimeout(() => {
    ce.removeListener('newtest',fn1)
    // ce.removeAllListeners("newtest")  //移除该名称绑定的事件
    // ce.removeAllListeners()  //移除所有事件
}, 3000); //过了三秒后只输出fn2,不会输出fn1
