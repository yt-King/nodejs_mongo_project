const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const MongoConnect = require('./db')
const koajwt = require('koa-jwt')
const cors = require('koa2-cors')

const index = require('./routes/index')
const users = require('./routes/users')
const upload = require('./routes/upload')
const article = require('./routes/article')
const comment = require('./routes/comment')
const fans = require('./routes/fans')

// error handler
onerror(app)
MongoConnect()

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(cors())
app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

//如果要用jwt认证就开启这个，但是有可能会报错
// app.use(koajwt({
//   secret: 'ytking-server-jwt'
// }).unless({
//   path: [/^\/users\/login/,/^\/users\/reg/]
// }))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(upload.routes(), upload.allowedMethods())
app.use(article.routes(), article.allowedMethods())
app.use(comment.routes(), comment.allowedMethods())
app.use(fans.routes(), fans.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
