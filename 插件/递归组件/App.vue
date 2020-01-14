<template>
    <div>
        <my-trees :list="list"></my-trees>
    </div>
</template>
<script>
    import myTrees from './treeMenus'
    export default {
        components: {
            myTrees
        },
        data () {
            return {
                list: [
                    {
                        name: '新闻',
                        cList: [
                            {
                                name: '新闻1',
                                cList:[
                                    {
                                        name:'新闻1-1'
                                    },
                                    {
                                        name:'新闻1-2'
                                    }
                                ]
                            },
                            {
                                name:'新闻2'
                            }
                        ]
                    },
                    {
                        name: '娱乐'
                    },
                    {
                        name: '旅游',
                        cList: [
                            {
                                name: '旅游1'
                            },
                            {
                                name: '旅游2'
                            }
                        ]
                    }
                ]
            }
        },
        methods: {}

    }
</script>
