import Vue from 'vue'
import App from './App'
import "src/config"
import plugin from "src/plugin";
Vue.use(plugin)
new Vue({
    el: '#app',
    components: {App},
    template: '<App/>'
})
