const app = {
    state: {
        ok:false
    },
    mutations: {
        changeOk:(state)=>{
            console.log(state);
            return state.ok=!state.ok;
        }
    },
    actions: {
        changeOk:({commit})=>{
            commit('changeOk')
        }
    },
    getters:{
        ok(state){
            return state.ok;
        }
    }
}

export default app
