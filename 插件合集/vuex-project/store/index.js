import Vue from "vue";
import Vuex from "Vuex";
Vue.use(Vuex);

//状态
const state={
    name:'zhangsan',

    totalTime:0, //总时间
    lists:[]  //每个计划的数据
};

//改变状态
const mutations={
    //提交过来的改变名字的方法 mutation
    changename(state){
        return state.name="zhangxiayan";
    }
};

export const store=new Vuex.Store({
    state,
    mutations
});
