//引入组件
import Vue from 'vue';
import App from './index.vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
new Vue({
    el: '#app',
    render: h => h(App)
});
