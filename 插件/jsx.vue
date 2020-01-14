<script type="text/jsx">
    export default {
        data () {
            return {
                msg: 'hello',
                infor:[
                    {name:1,age:2,status:0},{name:1111,age:12,status:1},{name:123,age:22,status:1}
                ]
            }
        },
        methods: {
            print (e) {
                console.log(e)
                console.log(this)
                console.log('点击了我')
            }
        },
        // 用渲染函数就不能使用template了
        render () {
            return (
                <div>
                    <h1 class="h1" onClick={(e) => this.print(e)}>{this.msg}</h1>
                    <ul>
                        {
                            this.infor.map((item)=>{
                                return
                                item.status?
                                    <li style={{background:'red'}}>{item.name}</li>:
                                    <li style={{background:'green'}}>{item.name}</li>
                            })
                        }
                    </ul>
                </div>
            )
        }
    }
</script>
<!--

安装依赖
npm install babel-plugin-syntax-jsx babel-plugin-transform-vue-jsx babel-helper-vue-jsx-merge-props babel-preset-env --save-dev
修改配置
["transform-vue-jsx"] .babelrc

-->
<style scoped>
    .h1 {
        color: #f00;
    }
</style>
