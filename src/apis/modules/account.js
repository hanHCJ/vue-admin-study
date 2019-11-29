import Vue from 'vue'
const vue = new Vue()
const axios=vue.$plugins.Axios
export default {
  demo(data) {
    return axios({
      url: '/user/login',
      method: 'post',
      data
    })
  }
}
