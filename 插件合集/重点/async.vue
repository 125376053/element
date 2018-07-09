<template>
    <div>
        {{user.name}}
    </div>
</template>

<script>
    import {mapState,mapGetters, mapActions} from 'vuex'
    export default{
        data(){
            return{
                user:''
            }
        },
        //props:['user'],
        methods:{
            ...mapActions(['changeCount'])
        },
        mounted(){
            //在子组件中可以利用promise调用 actions里面的方法 并且给出异步完成后的回调
//            this.$store.dispatch('changeCount').then(response => {
//                console.log(response);
//                this.user=response
//            }).catch(response => {
//
//            })

            this.$store.dispatch('changeCount').then(re=>{
                this.user=re;
            })
        }
    }
</script>

<style>

</style>
