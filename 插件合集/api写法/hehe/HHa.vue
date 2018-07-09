<template>
    <div>{{status}}</div>
</template>

<script>
    import {getdata} from "src/api"
    export default {
        data(){
            return{
                id:1,
                page:1,
                status:0
            }
        },
        mounted(){
            // let data=getdata({
            //     area_id:1,
            //     page:1
            // }).then((d)=>{
            //     console.log(d);
            // })
        },
        async created(){
            let data=await getdata({area_id:1,page:1})
            console.log(data);
            this.status=data.status

            console.log(this.$tid);
        }

    }
</script>
<!--cnpm i sass-loader node-sass &#45;&#45;save-dev-->
<style lang="scss">
    body{
        background:pink;
        div{
            color:orange;
        }
    }
</style>
