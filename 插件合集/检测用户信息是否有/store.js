import Vue from 'vue'
import Vuex from "vuex";
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        user:''
    },
    mutations:{
        login(state,user){
            alert(user)
            state.user=user;
        }
    },
    actions:{
        login({commit}){
            let user='zhangchaojie';
            commit('login',user)
        }
    },
    getters: {
        user(state){
            return state.user
        }
    }
});
