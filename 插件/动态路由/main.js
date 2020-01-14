import Vue from 'vue'
import App from './App'
import axios from "axios";
Vue.prototype.$http = axios;
Vue.prototype.baseUrl = "http://waterapi.qijiatech.com";
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);
import store from "./store";
Vue.use(store);

import router from "./router/index" //默认导出的 路由组件
import {wang} from "./router/index" // 动态路由wang
// console.log(router, wang)
// 配置动态路由
addRouter()
function addRouter(){
    const serverData=[1,5,4,3,2] // 售卖
    let admin=[7,9,10,1,3]// 管理员
    let ad=[]
    serverData.forEach((index)=>{
        ad.push(wang[index])
    })
    admin.forEach((index)=>{
        ad.push(wang[index])
    })
    // console.log(ad); //从wang路由中 拿出 15432 791013 这1个路由

    // 数组去重 排除重复路由 1 3 这2个路由重复添加了
    let obj={}
    let ad2=[]
    ad.forEach((item)=>{
        if(!obj[item.path]){
            ad2.push(item)
            console.log(obj);
            obj[item.path]=1
        }
    })
    // console.log(ad);
    // console.log(ad2);
    console.log(router.options.routes);
    // 把筛选出来的路由放到路由实例中
    router.options.routes=router.options.routes.concat(ad2)
    console.log(router.options.routes);
    console.log(router);
    router.addRoutes(ad)
    console.log(router);
}

let vm=new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
});


