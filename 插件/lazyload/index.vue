<template>
    <div>
        <ul id="container">
            <li v-for="img in list">
                <img v-lazy="img">
            </li>
        </ul>
    </div>
</template>

<script>
    import Vue from "vue";
    import VueLazyload from "vue-lazyload"
    Vue.use(VueLazyload, {
        error: '',//这个是请求失败后显示的图片
        loading: '',//这个是加载的loading过渡效果
        try:4, // 这个是加载图片数量
        listenEvents:['scroll']
    });
    export default {
        data () {
            return {
                list: [
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497335819163&di=f191a05593a82a8054e1e5cc577d2b45&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D3684677104%2C2266818297%26fm%3D214%26gp%3D0.jpg',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497335864546&di=82776a248b4dc365250353a24d77e38f&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1886593544%2C1682095630%26fm%3D214%26gp%3D0.jpg',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497335876725&di=2702d7d7e17b49dfbef9c607914ed8f2&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D4096509826%2C2165599850%26fm%3D214%26gp%3D0.jpg',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497335818490&di=8b5e392ab6f33c2bd5fc787dfa574cb7&imgtype=0&src=http%3A%2F%2Fimg.pcgames.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fgamephotolib%2F1509%2F22%2Fc1%2F13035285_1442915115299.jpg'
                ]
            }
        }
    }
</script>

<style>
    img[lazy=loading] {
        /*width: 100px;*/
        background-position:center center!important;
        background: url("images/1.png");
        background-size:100px 100px;
        background-repeat:no-repeat;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
    img[lazy=error] {
        /*width: 100px;*/
        background-position:center center!important;
        background: url("images/1.png");
        background-size:100px 100px;
        background-repeat:no-repeat;

        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
    img[lazy=loaded] {
        /*width: 100px;*/
        background-position:center center!important;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-color: green;
    }
    /*
     or background-image
     */
    .yourclass[lazy=loading] {
        /*your style here*/
    }
    .yourclass[lazy=error] {
        /*your style here*/
    }
    .yourclass[lazy=loaded] {
        /*your style here*/
    }

    img{ width:100%; height:400px;}
</style>
