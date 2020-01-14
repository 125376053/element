<template>
    <div class="con">
        <div>
            <p @click="clickCity(1)">南京-1</p>
            <p @click="clickCity(5)">石家庄-5</p>
            <p @click="clickCity(47)">天津-47</p>
        </div>

        <BetterScroll class="wrapper" ref="scroll" :data="listdata" :pullUpLoad="pullUpLoad" @pullingUp="onPullingUp">
            <ul class="content box-flex">
                <li v-for="(item,index) in listdata">
                    {{item.product_name}}
                </li>
            </ul>
        </BetterScroll>
    </div>
</template>

<script>
    import BetterScroll from './BetterScrollSlot'

    export default{
        components: {
            BetterScroll
        },
        data () {
            return {
                listdata: [],
                pullUpLoad:true,
                page:1, //this.$route.query.page||1, //刷新缓存页码 不需要可不设置缓存
                id:1,   //this.$route.query.id||1, //刷新缓存城市id 不需要可不设置缓存
                next:true
            }
        },
        //初始化加载数据
        mounted() {
            console.log('页面加载事件，路由改变不触发，刷新触发')
            this.loadData(this.id,this.page) //路由改变这里不会触发更新
        },
        //改变路由加载数据 时时改变 没必要处理这个
        watch: {
            /*'$route'(to, from){
                this.listdata=[];
                this.id=to.query.id;
                this.page=to.query.page;
                this.loadData(this.id,this.page)
            }*/
        },
        methods: {
            loadData (id,page) {
                console.log(id, page);
                this.$http.get('http://admin.cpm66.com/api/production/list?area_id='+id+'&page='+page,{}).then((res) => {
                    if(res.data.code===0){
                        this.next=res.data.data.next_page_url;
                        this.listdata = this.listdata.concat(res.data.data.data)
                        console.log(this.listdata);
                    }else{
                        console.log('请求失败')
                    }
                }, (res) => {
                    console.log(res)
                })

                //插入分页 打开页面不存在查询参数就替换一条 存在就push一条
                if(!this.$route.query.id){
                    this.$router.replace({
                        path: '/',
                        query: {
                            id:this.id,
                            page:this.page
                        }
                    });
                }else{
                    this.$router.push({
                        path: '/',
                        query: {
                            id:this.id,
                            page:this.page
                        }
                    });
                }
            },
            //下拉加载数据
            onPullingUp () {
                //如果还有下一页
                if(this.next && this.page<4){
                    setTimeout(()=>{
                        this.page++;
                        this.loadData(this.id,this.page)
                    },1000)
                }else{
                    // 如果没有新数据
                    this.$refs.scroll.forceUpdate()
                }
            },
            //点击加载数据
            clickCity(id){
                this.listdata=[];
                this.id=id;
                this.page=1;
                this.loadData(this.id,this.page)
            }
        }
    }
</script>

<style scoped>
    *{margin:0;padding:0;}
    .con {
        position: fixed;
        width:100%;
        top:0px;
        bottom:0;
        height:100%;
        background:#e5e5e5;
    }
    .wrapper{
        top:70px;
        bottom:0px;
    }

    li {
        height:100px;
        border-bottom: 1px solid red;
        line-height: 100px;
    }

</style>
