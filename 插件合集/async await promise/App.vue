<template>
    <div id="app">

    </div>
</template>

<script>
    //使用 async / await, 搭配 promise, 可以通过编写形似同步的代码来处理异步流程, 提高代码的简洁性和可读性.
    //await 操作符用于等待一个 Promise 对象, 它只能在异步函数 async function 内部使用.
    //另外需要注意的是, await 在等待 Promise 对象时会导致 async function 暂停执行, 一直到 Promise 对象决议之后才会 async function 继续执行

    export default{
        data(){
            return{
                id:0
            }
        },
        methods:{
            data1(){
                return new Promise((resolve) => {
                    setTimeout(() => {
                        alert(1)
                        resolve('data2');
                    }, 5000);
                })
            },
            data2(){
                return new Promise((resolve) => {
                    setTimeout(() => {
                        alert(24)
                        resolve('data24');
                    }, 2000);
                })
            },
        },
        mounted(){
            alert(3)
            this.data1().then(this.data2().then(function(){
                alert('all')
            }))
        }
    }
</script>

<style>

</style>
