//引入组件
import Vue from 'vue';
import router from './router';
import App from './App.vue'
/*安装2.0版本不报错  npm install element-ui@2.0.0 --save-dev  */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
Vue.use(ElementUI)
import axios from "axios";
Vue.prototype.$http=axios;

const Bus=new Vue()
Vue.prototype.Bus=Bus
Vue.prototype.Step=0
Vue.prototype.stepArr=['One1','One2','One3','One4','One5','One6']

Vue.prototype.baseUrl="http://admin.cpm66.com";
require('./lib/jquery-1.11.0'); //全局引入jquery
new Vue({
    el: '#app',
    render: h => h(App),
    router
});
