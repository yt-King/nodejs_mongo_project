//为了支持所有可能的 HTTP 应用程序，Node.js HTTP API 是非常低层的。 它只进行流处理和消息解析。 它将消息解析为标头和正文，但不解析实际的标头或正文。
var http = require('http')
var fs = require('fs')

//req:请求   res:响应
var app = http.createServer(function(req,res){
    // res.write('<h1>hello write</h1>') //向页面输出
    //读取页面转换成字符串输出到页面
    var data = fs.readFileSync('./index.html')
    res.write(data.toString())
    res.end()
})

app.listen(3000,function(){//回调函数
    console.log('启动成功')
})

//使用nodemon httpAPI.js  启动进行热部署，修改无需重启