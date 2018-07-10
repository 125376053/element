<template>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :show-close="false"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        >
        <span>第6步</span>

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

        }
    }
</script>
<style>

</style>
