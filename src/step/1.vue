<template>
    <div class="a">
        <el-dialog
            custom-class="one1"
            title="提示"
            :visible.sync="dialogVisible"
            width="300px"
            :show-close="false"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :lock-scroll="true"
        >
            <span>第一步</span>
            <button @click="next">下一步</button>
        </el-dialog>
    </div>
</template>
<script>
    export default{
        props:['data1'],
        data(){
            return {
                dialogVisible:true,
            }
        },
        methods:{
            next(){
                this.Step=1;
                this.Bus.$emit('step',this.Step)
            }
        },
        mounted(){
            let one1=document.querySelector('.one1')
            one1.style.marginLeft=`${this.data1.x}px`
            one1.style.marginTop=`${this.data1.y}px`
        },
        watch:{
            data1(a){
                let one1=document.querySelector('.one1')
                one1.style.marginLeft=`${a.x}px`
                one1.style.marginTop=`${a.y}px`
            }
        }
    }
</script>
<style scoped>
    /*
    在vue的开发中，我们需要引用子组件，包括ui组件（element、iview）。但是在父组件中添加scoped之后，在父组件中书写子组件的样式是无效果的。去掉scoped之后，样式可以覆盖。但这样会污染全局样式，为了解决这个问题，vue-loader新增书写方式。
    */
    .a >>> .one1{
        width: 300px!important;
        height: 300px!important;
        background: red!important;
    }
</style>
