<template>
    <div id="app">

        <!--子组件发送的数据 只能通过子组件标签接收到 其他父组件的标签接收不到-->
        <page @zhang="getdata"></page>
        <!--内容ajax-->
        <ul >
            <li v-for="(item,index) in currentPage">
                {{item}}
            </li>
        </ul>

    </div>
</template>


<script>
    import page from './components/bootPage.vue';
    export default{
        components:{
            page
        },
        computed:{
            currentPage(){
                var page=1;
                if(this.curPage==1){
                    page=this.list.page1
                }else{
                    page=this.list[this.curPage];
                }
                return page;
            }
        },
        methods:{
            getdata(curpage){
                this.curPage=curpage;
            }
        },
        data(){
            return{
                list:{
                    page1:[
                        {'name':'zhangsan1',age:'24',adress:'beijing1'},
                        {'name':'zhangsan2',age:'24',adress:'beijing2'},
                        {'name':'zhangsan3',age:'24',adress:'beijing3'}
                    ],
                    page2:[
                        {name:2}
                    ],
                    page3:[
                        {name:3}
                    ],
                    page4:[
                        {name:4}
                    ],
                    page5:[
                        {name:5}
                    ],
                    page6:[
                        {name:6}
                    ],
                    page7:[
                        {name:7}
                    ],
                    page8:[
                        {name:8}
                    ],
                    page9:[
                        {name:9}
                    ],
                    page10:[
                        {name:10}
                    ],
                    page11:[
                        {name:11}
                    ],
                    page12:[
                        {name:12}
                    ],
                    page13:[
                        {name:13}
                    ]
                },
                curPage:1
            }
        }
    }
</script>


