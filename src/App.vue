<template>
    <div style="min-width:1366px!important;">
        <AsideBar :arrOpen="['2']"></AsideBar>
    </div>
</template>
<script>
    import AsideBar from "./components/aside"
    export default{
        components:{
            AsideBar
        }
    }
</script>
<style>
    * {
        margin: 0;
        padding: 0;
    }

    .header {
        background: #00a2d4;
        color: #fff;
        line-height: 50px;
        min-width: 320px; /*已经是最小手机屏幕了 不让缩了 让出现水平滚动条*/
    }
</style>
