import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Home from "@/components/Home";
import Time from "@/components/Time";
import Add from "@/components/Add";

export default new Router({
    mode:'history',
    routes: [
        {
            path:'/Home',
            component:Home
        },
        {
            path:'/Time',
            component:Time,
            children:[
                {
                    path:'time-add',
                    component:Add
                }
            ]
        },
        {
            path:'*',
            redirect:"/Home"
        }
    ]
})
