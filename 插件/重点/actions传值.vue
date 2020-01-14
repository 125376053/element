<template>
    <div id="app">
        <p>{{count}}</p>
        <p>
            {{JSON.stringify(user)}}
        </p>
        <div @click="changeCount2">修改count</div>
        <div @click="changeCount3">修改count33333</div>
        <Async :user="user"></Async>
    </div>
</template>

<script>
    import {mapState,mapGetters, mapActions} from 'vuex'
    import Async from "./async.vue"
    export default{
        data(){
            return{
                hehe:'123'
            }
        },
        components:{
            Async
        },
        computed:{
            ...mapState(['count']),
            ...mapGetters(['user'])
        },
        methods:{
            changeCount2(){
                this.$store.dispatch('changeCount',this.hehe)
            },
            //mapActions传递参数 通过间接函数 dispatch转发 changeCount 并携带参数 实现changeCount代餐传递
            ...mapActions(['changeCount','changeCount3'])
        },
        mounted(){

        }
    }
</script>

<style scoped>

</style>
