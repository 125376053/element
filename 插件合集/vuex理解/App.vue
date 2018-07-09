<template>
    <div id="app">
        <h3>welcome vuex-demo</h3>
        <input type="button" value="增加" @click="increment">
        <input type="button" value="减少" @click="decrement">
        <input type="button" value="偶数才能点击+" @click="clickOdd">
        <input type="button" value="点击异步" @click="clickAsync">

        <div>
            现在数字为: {{count}}, 它现在是 {{getOdd}}
        </div>
        <!--v-if权限没有style行内样式大 v-if和style一起使用 v-if不起作用-->
        <div v-if="show" style="display: none">123</div>
    </div>
</template>

<script>
    //0 组件内通过mapState获取初始状态
    //1 组件内派发一个动作到actions mapActions
    //2 actions commit mutations
    //3 mutations change state
    //4 仓库内通过 Getters返回改变的状态
    //5 组件内通过 mapGetters 获取 改变的状态  这个状态权限大于mapState
    import {mapState,mapGetters, mapActions} from 'vuex'

    export default{
        computed:{
            ...mapState([
                'count',
                'getOdd',
                'show'
            ]),
            ...mapGetters([
                'count',
                'getOdd',
                'show'
            ])
        },
        //组件内提交 dispatch  一个动作 actions 挂载在方法下  转到store内
        //组件内 点击一个按钮 发起一个提交动作 到仓库中  提交动作就是事件方法 可以组合为mapActions
        methods: mapActions([
            'increment',
            'decrement',
            'clickOdd',
            'clickAsync'
        ])
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
