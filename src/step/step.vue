<template>
    <components :is="cur"></components>
</template>
<script>
    import One1 from "./1.vue"
    import One2 from "./2.vue"
    import One3 from "./3.vue"
    import One4 from "./4.vue"
    import One5 from "./5.vue"
    import One6 from "./6.vue"
    export default{
        data(){
            return{
                cur:this.stepArr[this.Step]
            }
        },
        components:{
            One1,
            One2,
            One3,
            One4,
            One5,
            One6
        },
        mounted(){
            alert(this.Step)
            console.log(this.cur);
            this.Bus.$on('step',(step)=>{
                this.Step=step;
                this.cur=this.stepArr[this.Step]
            })
        }
    }
</script>
<style>

</style>
