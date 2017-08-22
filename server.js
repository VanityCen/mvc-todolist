const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const config = require('./webpack.config.js')
const app = express()
const compiler = webpack(config)
const port = 3000

app.use(webpackDevMiddleware(compiler, {
  publickPath: config.output.publicPath,
  quiet: true
}))

let hotMiddleware = webpackHotMiddleware(compiler, {
  log: console.log
})
app.use(hotMiddleware)

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

app.listen(port, function () {
  console.log('listening at localhost:' + port)
})
