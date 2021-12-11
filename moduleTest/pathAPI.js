var path = require("path")
//--------------------------路径相关api-------------------------
//规范化路径
var pathStr = path.normalize("a/b/c////d\\\\e")
console.log(pathStr)
//输出：a\b\c\d\e

//join方法会将给定的path片段连接在一起然后规范化生成的路径
pathStr = path.join('a','dsa','//asd','\d')
console.log(pathStr)
//输出：a\dsa\asd\d

//resolve返回绝对路径
pathStr = path.resolve('a')
console.log(pathStr)
//输出：E:\banyun\nodejs_mongo_project\a

//isabsolute 判断是否为绝对路径
var {isAbsolute} = require("path") //直接引入方法
pathStr = isAbsolute('./a') //false
pathStr = isAbsolute('/banyun/nodejs_mongo_project') //true

//--------------------------文件相关api-------------------------
//basename：返回路径中的文件名
var {basename} = require('path')
console.log(basename("a/b/c/test.txt")) //test.txt

//extname : 返回扩展名
var {extname} = require('path')
console.log(extname("a/b/c/test.txt")) //.txt
console.log(extname("a/b/c/test.txt.exe")) //.exe

//dirname : 返回目录名
var {dirname} = require('path')
console.log(dirname("a/b/c/test.txt")) //a/b/c

//parse : 返回对象
var {parse} = require('path')
console.log(parse("a/b/c/test.txt")) 
//输出：{ root: '', dir: 'a/b/c', base: 'test.txt', ext: '.txt', name: 'test' }


//format : 和parse相反
var {format} = require('path')
console.log(format({ root: '', dir: 'a/b/c', base: 'test.txt', ext: '.txt', name: 'test' })) 
//输出：a/b/c\test.txt
