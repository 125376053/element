<template>
    <ul>
        <li v-for="(item,index) in list " :key="index">
            <p :style="{
                color:item.flag?'red':'#666'
            }" @click="curShow(item)">
                {{item.name}}
            </p>
            <tree-menus :list="item.cList" v-if="item.flag"></tree-menus>
        </li>
    </ul>
</template>
<style>
    ul{
        padding-left: 20px!important;
    }
</style>
<script>
    export default{
        name:'treeMenus',
        props:{
            list: Array
        },
        methods:{
            curShow(cur){
                this.list.map(item=>{
                    if(item.name!=cur.name){
                        this.$set(item,'flag',false)
                    }
                })
                // 设置当前
                this.$set(cur,'flag',!cur.flag)
            }
        }
    }
</script>
