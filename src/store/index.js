import Vue from 'vue'
import Vuex from 'vuex'
// import getters from './getters'
console.log('Store')
Vue.use(Vuex)


// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)
modulesFiles.keys().reduce(function (modules, modulePath){
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
/*
  modules[moduleName] = value.default
*/
})
/*
// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
*/

const store = new Vuex.Store({
  // modules,
  // getters
})

export default store
