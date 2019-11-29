import Vue from 'vue'
import loadModules from './modules/loadModules'
const modulesFiles = require.context('./modules', false, /\.js$/)
const Toolmodules = loadModules(modulesFiles)

const Tools = {}
Tools.install = function(Vue, opts) {
  Vue.prototype.$tools = Toolmodules
}
Vue.use(Tools)

