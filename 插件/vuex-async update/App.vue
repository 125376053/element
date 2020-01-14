<template>
    <div id="app" v-cloak>
        {{shuju}}
        {{initlist}}
        {{initlist2}}
        <p id="haha">123</p>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
export default{
    computed:{
        ...mapGetters(['initlist','initlist2'])
    },
    data(){
        return {
            shuju : 333
        }
    },
    mounted(){
        this.$store.dispatch('initlist')
        this.$store.dispatch('initlist2')
        console.log(this.shuju,this.initlist, this.initlist)
    },
    watch:{
//        initlist(a){
//            console.log(a)
//        }
    },
    // 可以访问和修改数据 不会触发死循环
    beforeUpdate(){
        this.shuju ='22222222'+this.initlist
        console.log('333333333333333333');
        console.log(this.shuju)
        console.log(this.initlist)
        console.log(this.initlist2)
        console.log('444444444444444444');
    },
    // 只有数据进行渲染后才会触发 不能修改数据(死循环) 可以操作dom
    updated(){
        // this.shuju ='1111111111'+this.initlist
        console.log('))))))))))');
        console.log(this.shuju)
        console.log(this.initlist)
        console.log(this.initlist2)
        console.log('))))))))))');
    }
}
</script>

<style>

</style>
