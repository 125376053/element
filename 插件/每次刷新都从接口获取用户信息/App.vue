<template>
    <div id="app">

    </div>
</template>

<script>
    import {mapGetters,mapActions} from "vuex"
    export default{
        //将用户信息保存到App里面
        mounted(){
            //每次刷新页面都获取一次用户信息
            this.$store.dispatch('login')
            if(this.user){
                alert(1)
            }else{
                alert(2)
            }
        },
        computed:{
            ...mapGetters(['user'])
        }
    }
</script>

<style scoped>

</style>
