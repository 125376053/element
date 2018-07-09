
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import areaSchool from "../pages/areaSchool.vue";
import schoolUse from "../pages/schoolUse.vue";
import useJilu from "../pages/useJilu.vue";
import table from "../pages/table.vue";
import layout from "../pages/layout.vue";
import TabsDialog from "../pages/tabsDialog.vue"
import form from "../pages/form.vue"
import tree from "../pages/tree.vue"
import excel from "../pages/excel.vue"
import buju from "../pages/buju.vue";
import layout2 from "../pages/layout2.vue";
const router = new Router({
    mode: 'history',
    routes: [
        {
            path:'/',
            redirect: '/areaSchool'
        },
        {
            path:'/areaSchool',
            name:'区域学校管理',
            component:areaSchool
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
            path:'/table',
            name:'表格 ',
            component:table
        },
        {
            path:'/layout',
            name:'表格 ',
            component:layout
        },
        {
            path:'/tabsDailog',
            name:'弹出层加选项卡',
            component:TabsDialog
        },
        {
            path:'/form',
            name:'表单',
            component:form
        },
        {
            path:'/tree',
            name:'表单',
            component:tree
        },
        {
            path:'/excel',
            name:'导入导出',
            component:excel
        },
        {
            path:'/buju',
            name:'布局',
            component:buju
        },
        {
            path:'/layout2',
            name:'layout2',
            component:layout2
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
});

export default router;
