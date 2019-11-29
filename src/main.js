import Vue from 'vue'
import App from './App'
// import store from './store'
// import router from './router'
// import Cookies from 'js-cookie'

// import 'normalize.css/normalize.css' // a modern alternative to CSS resets
// import './styles/index.scss' // global css
// import './icons' // icon
// import './utils/error-log' // error log

// import * as filters from './filters' // global filters

import {mockXHR} from '../mock'

if (process.env.NODE_ENV === 'development') {
  // mockXHR()
}

// rali-oss 安装 egister global utility filters
/*
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
*/

Vue.config.productionTip = false

// 工具方法库
import './tools'

// 第三方插件库
import './plugins'

// 接口库
import './apis'

new Vue({
  el: '#app',
  // router,
  // store,
  render: h => h(App)
})
