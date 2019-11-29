import Vue from 'vue'
const vue = new Vue()
const modulesFiles = require.context('./modules', false, /\.js$/)
const modules = vue.$tools.loadModules(modulesFiles)

const Api = {}
Api.install = function(Vue, opts) {
  Vue.prototype.$apis = modules
}

Vue.use(Api)

