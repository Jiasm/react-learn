'use strict'

var fs = require('fs')
var path = require('path')
var app = require('koa')()
var router = require('koa-router')()
var serve = require('koa-static')

app.use(router.routes())
  .use(router.allowedMethods())
  .use(serve(path.join(__dirname, '/public')))

router.get('/', function * () {
  this.body = fs.readFileSync(path.join(__dirname, '/views/index.html')).toString()
})
app.listen(12306)
