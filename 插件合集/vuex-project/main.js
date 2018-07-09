import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store';//不是通过default导出的 要这样引入

import "bootstrap/dist/css/bootstrap.css";


new Vue({
    el: '#app',
    router,//router挂载到元素内，可以把router实例注入所有的子组件,且子组件能通过this.$router访问
    store,//store挂载到元素内，可以把store实例注入所有的子组件,且子组件能通过this.$store访问
    ...App
});
