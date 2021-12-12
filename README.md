# nodejs_mongo_project

## 1.初始化项目

```
npm init
```

使用nodemon进行热部署

```
npm install nodemon -g
```

![image-20211211153000826](README.images/image-20211211153000826.png)

再使用npm start 就是nodemon启动

## 2.node中的模块化

简单的例子：

定义一个字符串处理的模块demo1.js

```javascript
function strPares(str){
    console.log(str)
}
module.exports = strPares
```

在index.js中引用该模块

```javascript
var strParse = require("./demo1")
strPares("hello")
```

运行index文件可以看到输出![image-20211211154742898](README.images/image-20211211154742898.png)

模块具有缓存的特性,使用require引用时第一次加载会缓存在内存中，以后使用就不会去加载而是直接在内存中拿到对象

### 2.1node中的三大模块

>全局模块
>
>核心模块
>
>自定义模块

```
全局模块：随时随地访问，不需要引用。（注意事项：ES6语法下使用let和const声明的变量不能在声明前直接复制）
```

```
核心模块：不需要单独下载，可以直接使用require（）引入的模块，常见的由path，fs，http模块
```

```
自定义模块：自己封装的模块，可以直接使用require（）引入
```

#### 核心模块——path（路径）

文档：http://nodejs.cn/api/path.html

示例：moduleTest/pathAPI.js

#### 核心模块——fs(文件系统)

文档：http://nodejs.cn/api/fs.html

示例：moduleTest/fsAPI.js

#### 核心模块——events(事件触发器)

文档：http://nodejs.cn/api/events.html

示例：moduleTest/eventAPI.js

#### 核心模块——http(超文本传输协议)

文档：http://nodejs.cn/api/http.html

示例：moduleTest/httpAPI.js

## 3.Koa2框架——Node.js web server框架

### 3.1koa2安装

```
npm install koa --save
```

### 3.2使用脚手架创建koa2项目

```
koa2 <项目名>
```

### 3.3koa中间件

<img src="README.images/image-20211211232013138.png" alt="image-20211211232013138" style="zoom:80%;" />

输出顺序：1 -> 2 -> 3 -> 2-1 -> 1-1   (洋葱圈模型)

koa-router实现路由：

安装——cnpm i koa-router --save

![image-20211211232938186](README.images/image-20211211232938186.png)

### 3.4参数获取

获取params里的参数：let {属性名} = ctx.request.query

获取body里（json格式）的参数（需要安装koa-bodyparser才可以获取正确的body）：let {username,pwd} = ctx.request.body

## 4.项目初始化

```
koa2 koaPoject
cd koaPoject
npm install
```

项目目录如下：![image-20211212144900158](README.images/image-20211212144900158.png)
