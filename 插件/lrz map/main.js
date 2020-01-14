import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios";
Vue.prototype.$http = axios;

Vue.prototype.baseUrl = "http://waterapi.qijiatech.com";
/*import qs from 'qs';
 Vue.prototype.qs = qs;*/
import Mint from 'mint-ui'; //mint ui 组件
import 'mint-ui/lib/style.css'; // mint ui css
Vue.use(Mint);
Vue.prototype.busEvent = new Vue();
import * as utils from "./utils";
Vue.use(utils);

import store from "./store";
Vue.use(store);
/*
 * beforeEach这个全局钩子要放到全局组件的前面，放到全局组件的后面，
 * Vue实例已经加载完成。这时候直接在浏览器的地址栏输入要去的路由，则不会定向到登录路由
 * */

router.beforeEach((to, from, next) => {

    //to即将进入的目标路由对象，from当前导航正要离开的路由， next  :  下一步执行的函数钩子
    // 如果即将进入登录路由，则直接放行
    if (to.path === '/login') {
        next()
    } else {
        //进入的不是登录路由
        if (!to.meta.requiresAuth && !localStorage.getItem('user')) {
            next({
                path: '/login'
            })
        } else {
            next() //如果不需要登录验证，或者已经登录成功，则直接放行
        }
    }
    next()
})

//刷新页面回到首页 解决从别的外网跳转进来时 外网跳转的页面本身就刷新了
/*router.afterEach((to,from)=>{
    //如何检测当前组件是刷新还是别的页面跳转过来的 跳转的时候 from的name非空 刷新from。name为空
    /!*if(from.name!=null){
        window.sessionStorage.setItem('prevPath',from.path)
    }else{
        //alert('当前页面刷新')
        window.sessionStorage.setItem('prevPath','/')
    }*!/
})*/

//返回状态判断(添加响应拦截器)
//拦截当前组件的所有请求
axios.interceptors.response.use(res => {

    //对响应数据做些事
    if(res.status==200){
        //服务器请求成功
        if (res.data && res.data.IsError==0) {
            //后台没问题

        }else{
            //后端有问题

            if($(".mint-toast").length>0){
                $(".mint-toast").remove()
            }
        }
    }
    return res;
}, (error) => {

    //alert(error);
    //接口错误等全都到这里
    //返回 response 里的错误信息

    /*noApp1.style.display='block';
    app.style.display='none';*/

    return error;
});


let vm=new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
});
