import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
// import store from '@/store'
// import { getToken } from '@/utils/auth'

const Axios = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = baseURL + request url
  timeout: 5000 // request timeout
})

/** 请求拦截器 **/
Axios.interceptors.request.use(
  config => {
/*
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
*/
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

/** 响应拦截器 **/
Axios.interceptors.response.use(
  response => {
    const res = response.data
    return response
/*
    if (res.code !== 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token;
      // 50012: Other clients logged in;
      // 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('未登录信息', '弹层名称', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
*/
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    console.log(error)
    return Promise.reject(error)
  }
)

export default Axios
