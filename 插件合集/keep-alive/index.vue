<template>
    <div id="hehe">
        <ul id="sox">
            <li v-for="(item,index) in list" @click.stop="selectMovie(item)">
                {{index}}
            </li>
        </ul>
        <button @click="add">加载更多</button>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                list:[],
                height:0,
                scroll:0
            }
        },
        methods:{
            selectMovie(item){

                //为什么自己记录滚动位置 主要是因为 路由提供的keep-alive只能保存窗口滚动条 不能保存div内部滚动条
                //keep-alive能保存加载更多的数据
                //
                var sc=document.getElementById("hehe").scrollTop;
                window.sessionStorage.setItem("listScrollTop",sc);
                this.$router.push({
                    path:'/detail',
                    query:{
                        id:item
                    }
                })
            },
            add(){
                var newArr=[21,22,34,4343,5545,546,465,765,6757];
                //console.log(this.list.concat(newArr))
                this.list=this.list.concat(newArr)
            },
        },
        //页面刷新删除本地存储 加了keep-alive后 这个函数不是每次都会执行 只有刷新页面的时候才会执行
        created(){
            window.sessionStorage.removeItem("listScrollTop");
        },
        mounted(){
            //this.getData1()
            /*this.$http.jsonp("https://api.douban.com/v2/movie/in_theaters",{

             }).then(res=>{
             this.list=res.body.subjects;
             console.log(res.body)
             })*/
            this.list=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
        },
        //组件激活的时候触发时机
        activated: function () {
            this.$nextTick(()=>{
                console.log(document.getElementById("hehe"))
                console.log(window.sessionStorage.getItem("listScrollTop"))
                document.getElementById("hehe").scrollTop=window.sessionStorage.getItem("listScrollTop");
            })
        },
    }
</script>
<style scoped>
    *{margin:0;padding:0;}
    #hehe{ height:500px; background: red; overflow: auto;  width:100%;}
    ul{}
    li{border:1px solid #ccc; overflow: hidden;text-align: center; height:120px;}
    li p{line-height:40px;}
    li img{}
    li a{color:#000; display: block;margin:10px;}
</style>

