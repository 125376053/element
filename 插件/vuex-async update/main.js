import Vue from 'vue'
import App from './App'
import axios from "axios";
Vue.prototype.$http = axios;
Vue.prototype.baseUrl = "http://waterapi.qijiatech.com";
import store from "./store";
Vue.use(store);

let vm=new Vue({
    el: '#app',
    store,
    template: '<App/>',
    components: {App}
});

// 这里已经可以派发事件了 并且携带参数
// store.dispatch('initlist',{
//     name:'zhangsan'
// })
// store.dispatch('initlist2')


