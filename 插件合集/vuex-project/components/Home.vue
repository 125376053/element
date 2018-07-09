<template>
    <div class="jumbotron">
        <h4>创建你的计划</h4>
        <p>
            {{age}}
            <!--没必要加this-->
            {{this.age}}
        </p>
        <button @click="changeName">改变名字</button>
        <p>
            <!--测试组件中访问state  状态提供给组件 流程图第一步-->
            <!--加不加this都能访问到 不要加this理解 state就相当于是data中的数据一样 不加this也能访问-->
            {{this.$store.state.name}}
            {{$store.state.name}}
            <!--通过计算属性获取state-->
            {{getName}}
        </p>
        <router-link to="/Time" class="btn btn-primary">
            定制计划
        </router-link>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                age:18
            }
        },
        //在计算属性中获取state的原因是每次数据改变都会重新计算
        computed: {
            getName () {
                return this.$store.state.name
            }
        },
        methods:{
            //流程图2 组件派发动作
            changeName(){
                //3 将动作提交到mutations   changename就是mutations的一个方法名字
                this.$store.commit('changename')
            }
        }
    }
</script>
<style>

</style>
