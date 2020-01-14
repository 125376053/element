import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import { zhang } from "@/api"
var state = {
    initlist:[],
    initlist2:[]
};
const mutations = {
    initlist(state,data){
        state.initlist=data
        console.log(state.initlist)
    },
    initlist2(state,data){
        state.initlist2=data
        console.log(state.initlist)
    }
};
const actions = {
    initlist({commit},data){
        console.log(data)
        zhang().then((res)=>{
            commit('initlist',res.data)
        })
    },
    // async initlist2({commit}){
    //     let data = await zhang()
    //     console.log(data)
    //     commit('initlist2',data.data)
    // }
    async initlist2({commit}){
        let data = await zhang()
        console.log(data)
        commit('initlist2',data.data)
    }
};
const getters = {
    initlist(state){
        console.log(state)
        return state.initlist
    },
    initlist2(state){
        console.log(state)
        return state.initlist2
    }
};
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});
