import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Tndex from "../index.vue"
import Detail from "../components/Detail.vue"
const router = new Router({
    routes: [
        {
            path: '/',
            component:Tndex
        },
        {
            path: '/detail',
            component:Detail
        }
    ],
});
export default router;
