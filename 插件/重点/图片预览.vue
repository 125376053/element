<template>
    <div id="app">
        <lg-preview></lg-preview>
        <img class="ims" v-for="(item,index) in imgs" v-preview="item.url" :src="item.url">
    </div>
</template>

<script>
    import Vue from "vue"
    import vuePicturePreview from 'vue-picture-preview'
    Vue.use(vuePicturePreview)
    export default {
        data () {
            return {
                imgs: [
                    {
                        url: 'http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png',
                        title: 'pic1'
                    },
                    {
                        url: 'http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png',
                        title: 'pic2'
                    },
                    {
                        url: 'http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png',
                        title: 'pic1'
                    },
                    {
                        url: 'http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png',
                        title: 'pic2'
                    }
                ]
            }
        }

    }
</script>

<style>
    .lg-preview-img{
        max-width: 90%!important;
    }
    .lg-preview-nav-right{
        top:48%!important;
        width:30px!important;
        height:50px!important;
        margin-top: -25px;
        right:0!important;
    }
    .lg-preview-nav-right .lg-preview-nav-arrow{
        margin-right:20px!important;
    }
    .lg-preview-nav-left{
        top:48%!important;
        width:30px!important;
        height:50px!important;
        margin-top: -25px;
        position: relative;
        left:0!important;
    }
    .lg-preview-nav-left .lg-preview-nav-arrow{
        margin-left:20px!important;
    }
    .ims{
        width: 100px;
        height: 100px;
    }
</style>
