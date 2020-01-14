import Vue from 'vue'
import Vuex from "vuex";
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        count:0,
        user:{}
    },
    mutations:{
        changeCount(state,user){
            state.user=user;
        }
    },
    actions:{
        changeCount({commit},n){
            var p=new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    let user={
                        name:'zhangsan',
                        age:24,
                        adress:'bj'
                    }
                    resolve(user)
                    commit('changeCount',user);
                },1000);
            })
            return p;
        }
    },
    getters: {
        count(state) {
            return state.count;
        },
        user(state) {
            return state.user;
        }
    }
});
