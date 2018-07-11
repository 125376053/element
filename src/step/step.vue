<template>
    <div>
        <bind v-if="!start"></bind>
        <!--绑定微信 还没点击开始体验-->
        <components :data1="data1" v-if="start && step" :is="cur">

        </components>
    </div>
</template>
<script>
    import bind from "./bind.vue" //绑定
    //教学步骤
    import One1 from "./1.vue"
    import One2 from "./2.vue"
    import One3 from "./3.vue"
    import One4 from "./4.vue"
    import One5 from "./5.vue"
    import One6 from "./6.vue"
    export default{
        data(){
            return {
                cur: this.stepArr[this.Step],
                start: true, //已经绑定过微信
                step: false, //是否开始步骤   绑定过微信
                data1: ''
            }
        },
        components: {
            bind,
            One1,
            One2,
            One3,
            One4,
            One5,
            One6
        },
        mounted(){
            //检测元素位置数据
            this.Bus.$on('eleInfor', (data) => {
                this.data1 = data
            })

            //是否开始体验
            this.Bus.$on('start', (start, step) => {
                this.start = start
                this.step = step
            })

            //体验步骤
            this.Bus.$on('step', (step) => {
                this.Step = step;
                this.cur = this.stepArr[this.Step]
                alert(this.Step)
            })
        }
    }
</script>
<style>

</style>
