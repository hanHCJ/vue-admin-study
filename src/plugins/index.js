import Vue from 'vue'
const vue = new Vue()
const modulesFiles = require.context('./modules', false, /\.js$/)
const modules = vue.$tools.loadModules(modulesFiles)

const Plugins = {}
Plugins.install = function(Vue, opts) {
  Vue.prototype.$plugins = modules
}

Vue.use(Plugins)

