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

var obj={
    login1:{isShow:0},
    resetPass1:{isShow:1},
    renwuManage1:{isShow:0},
    messageDetail2:{isShow:1},
    message1:{isShow:0},
    index1:{isShow:1},
    xunchaManage1:{isShow:0},
    xunchaXq1:{isShow:1},
    my1:{isShow:0},
}

router.beforeEach((to, from, next) => {
    for(var x in obj){
        for(var i=0;i<router.options.routes.length;i++){
            //console.log(x.includes(router.options.routes[i].path.substring(1)));
            if(x.includes(router.options.routes[i].path.substring(1))){
                router.options.routes[i].isShow = obj[x].isShow
            }
        }
    }
    console.log(router.options.routes)
    router.options.routes.forEach(function(item){
        if(to.path == item.path){
            console.log(item)
            if(item.isShow == 0){
                console.log(item.isShow)
                next('/index')
            }else{
                console.log(item.isShow)
                next()
            }
        }
        // next()
    })
})

let vm=new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
});


