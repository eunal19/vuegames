const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:"http://localhost:8080/",
  transpileDependencies: true,
  outputDir: '../static/dist',
  indexPath: '../../templates/_base_vue.html',

  configureWebpack: {
    devServer: {
      devMiddleware: {
        writeToDisk: true
      }
    }
  },
})

