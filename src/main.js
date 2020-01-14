//引入组件
import Vue from 'vue';
import router from './router';
import App from './App.vue'
/*安装2.0版本不报错  npm install element-ui@2.0.0 --save-dev  */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
Vue.use(ElementUI)

// 1 解决ie不支持es6语法问题 webpackbase.conf中配置
/*
entry: {
    app: ['babel-polyfill', './src/main.js'],
}
*/
require("babel-polyfill")

// 2 ie不认识promise
import promise from 'es6-promise'
promise.polyfill()

import axios from "axios";
Vue.prototype.$http=axios;

const Bus=new Vue()
Vue.prototype.Bus=Bus

new Vue({
    el: '#app',
    render: h => h(App),
    router
});
