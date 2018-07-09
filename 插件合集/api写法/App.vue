
<template lang="pug">
    <div id="app">
        ul
            li 1
            li 2
            div#app1(style='color:red') hellovue {{name}}
        p(:class="flag?'red':'green'") hehe
        p(:style="{'color':flag?'red':'green'}") hehe
        a(:href="name") {{name}}
        //用jade语法判断
        div
            case friends
                when 0: p 您没有朋友
                when 1: p 您有一个朋友
                default: p 您有 #{friends} 个朋友
        //用vue去判断
        div
            p {{number>0?1:0}}

        div
            | p 1111
            |
            |
            | p 2222
        HH
    </div>

</template>

<script>
    var friends=12;
    import HH from "src/hehe/HHa.vue"
    export default {
        data(){
            return{
                name:'zhangchaojie',
                flag:true,
                number:0
            }
        },
        components:{
            HH
        },
        mounted(){
            
        }
    }
</script>

<style scoped>
    .red{ color:red}
    .green{ color:green;}
</style>
