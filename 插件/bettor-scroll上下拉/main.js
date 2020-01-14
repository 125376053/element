
import Vue from 'vue'
import App from './App'

// 引用API文件
import axios from 'axios'
// 将API方法绑定到全局
Vue.prototype.$http = axios

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})
