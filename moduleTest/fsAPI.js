var fs = require('fs')



//异步读取
fs.readFile('./abc.txt',(err,data)=>{
    if(err){
        return console.log(err)
    }
    console.log("异步读取",data.toString()) //异步读取 hello fs（后）
})

//同步读取文件
var data = fs.readFileSync("./abc.txt")
console.log("同步读取",data.toString())
//输出：同步读取 hello fs（先）


//异步写入
fs.writeFile('./new.txt','这是使用writeFile写入的',(err,data)=>{
    if(err){
        return console.log(err)
    }
    console.log("写入成功") 
})

//同步写入
fs.writeFileSync('./new.txt','这是使用writeFileSync写入的')
//如果文件不存在就会新建一个