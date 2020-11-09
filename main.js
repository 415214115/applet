import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// 全局请求or api
import request from './static/js/request.js'
// import api from './utils/api'
Vue.prototype.$request = request
// Vue.prototype.$api = api
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
