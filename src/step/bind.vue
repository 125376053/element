<template>
    <div class="a">
        <el-dialog
            custom-class="one1"
            title="提示"
            :visible.sync="dialogVisible1"
            width="300px"
            :show-close="false"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :lock-scroll="true"
        >
            <span>微信绑定</span>
        </el-dialog>

        <el-dialog
            custom-class="one1"
            title="提示"
            :visible.sync="dialogVisible2"
            width="300px"
            :show-close="false"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :lock-scroll="true"
        >
            <span>完善信息</span>
        </el-dialog>

        <el-dialog
            custom-class="one1"
            title="提示"
            :visible.sync="dialogVisible3"
            width="300px"
            :show-close="false"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :lock-scroll="true"
        >
            <span>马上体验</span>
        </el-dialog>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                dialogVisible1:true,
                dialogVisible2:false,
                dialogVisible3:false,
            }
        },
    }
</script>
<style>

</style>
