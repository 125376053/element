<template>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :show-close="false"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        >
        <span>第5步</span>
        <button @click="next">下一步</button>
    </el-dialog>
</template>
<script>
    export default{
        data(){
            return {
                dialogVisible:true
            }
        },
        methods:{
            next(){
                this.Step=5;
                this.Bus.$emit('step',this.Step)
                this.Bus.$emit('active','3')
                this.$router.push({
                    path:'/tabsDialog',
                    query:{
                        step:this.Step
                    }
                })
            }
        }
    }
</script>
<style>

</style>
