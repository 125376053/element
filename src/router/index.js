
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import schoolUse from "../pages/schoolUse.vue";
import useJilu from "../pages/useJilu.vue";
import form from "../pages/form.vue"
import layout2 from "../pages/layout2.vue";
import excel from "../pages/excel.vue"
const router = new Router({
    mode: 'history',
    routes: [
        {
            path:'/',
            redirect: '/schoolUse'
        },
        {
            path:'/schoolUse',
            name:'学校使用管理',
            component:schoolUse
        },
        {
            path:'/useJilu',
            name:'使用记录',
            component:useJilu
        },
        {
            path:'/form',
            name:'表单',
            component:form
        },
        {
            path:'/layout2',
            name:'layout2',
            component:layout2
        },
        {
            path:'/excel',
            name:'excel',
            component:excel
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
});

export default router;
