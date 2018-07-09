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
            /*async showData() {
                // 假装请求数据1
                var data1 = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve('data1');
                    }, 1000);
                });

                // 假装请求数据2且此请求依赖数据1
                var data2 = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve('data2');
                    }, 1000);
                });

                // 展示数据2
                console.log(data2);
            }*/
            data1(){
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve('data2');
                    }, 1000);
                })
            },
            data2(){
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve('data24');
                    }, 5000);
                })
            },

            //------------------
            getClassId(){
                return new Promise((resolve)=>{
                    setTimeout(()=>{
                        this.id=5;
                        resolve();
                    },3000)
                })
            },
            //等待函数  等待前一个异步函数执行完毕 等待的异步函数必须返回promise对象
            async getClassData(){
                await this.getClassId()
                alert(this.id)
                setTimeout(()=>{

                },2000)
            }
        },
        mounted(){
            //this.showData()
            var that=this;
            /*async function test(){
                const v1 = await that.data1();
                const v2 = await that.data2();
                console.log(v1, v2);
            }
            test()*/

            this.getClassId()
            this.getClassData()
        }
    }
</script>

<style>

</style>
