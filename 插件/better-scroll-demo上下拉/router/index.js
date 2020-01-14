import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
    //mode: 'history',//神奇的作用 可以把url中文字符自动编译 如果是hash模式 就显示乱码
    routes: [
        {
            path: '/',
            name: '主页'
        },

        {
            path: '*',
            redirect: '/'
        }
    ],
});
export default router;
