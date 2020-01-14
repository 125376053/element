import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
Vue.use(Vuex);
import { zhang } from "@/api"
// 1 定义状态
var state = {
    user:null,
    routes:[],

    adress:'',
    haha:'',
};

// 4 更改状态 要想该状态 只有这个方法能改
const mutations = {
    user:(state,content)=>{
        state.user=content;
    },
    removeLocal:(state)=>{
        state.user=null;
    },
    zhang(state,data){
        state.routes=data
    },
    wang(state,data){
        state.routes=data
    },
    adress(state,data){
        state.adress=data
    }
};

// 动作
const actions = {
    user:({commit},content)=>{
        commit("user",content)
    },
    removeLocal:({commit})=>{
        let toast=Vue.$toast({
            message: '退出成功',
            duration: 2000
        })
        setTimeout(() => {
            toast.close();
            router.push({
                path:'/login'
            })
        }, 2000);
        window.localStorage.removeItem("user");
        commit("removeLocal")
    },
    zhang({commit},data){
        commit('zhang',data)
    },
    adress({commit},data){
        commit('adress',data)
    }
};

const getters = {
    user(state){
        //刷新vuex数据丢失
        var that=this;
        //本地缓存通过storage事件做监控
        window.addEventListener("storage", function (e) {
            if(e.key=='user'){
                //发生改变修改user 实施监听user
                if(e.newValue==null){
                    router.push({
                        path:'/login'
                    })
                }
                return state.user=JSON.parse(e.newValue);
            }
        });
        return state.user||JSON.parse(window.localStorage.getItem('user'))
    },
    routes(state){
        return state.routes
    },

    adress(state){
        let zhang=()=>{
            return new Vue().$http.post(new Vue().baseUrl+'/api/Sheshi/JianSheQingkuang').then((d)=>{
                console.log(d)
                return d
            })
        }
        return zhang
    },

    async haha(state){
        let data = await zhang()
        return data.data.Model.datalist
    }
};


//需要导出Store对象
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});
