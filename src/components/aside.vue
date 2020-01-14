<template>
    <el-container>
        <el-header height="50px" class="header">
            <el-row>
                <!--flex和响应式有冲突 flex表示不换行 但是小屏幕时要求换行 于是没换行-->
                <!--:span表示所有屏幕下12分-->
                <!--xs表示只有手机屏幕下沾满一行-->
                <el-col :span="8">
                    <p>用户管理系统</p>
                </el-col>
            </el-row>
        </el-header>

        <el-aside width="200px" style="position: absolute;top:50px;left:0;bottom:0; overflow: auto; background:#545c64;">
            <!--:default-openeds="['1', '3'] 表示 1 3 展开   default-active="2"-->
            <el-menu :default-openeds="arrOpen"
                     :default-active="active"
                     background-color="#545c64"
                     text-color="#fff"
                     active-text-color="#ffd04b"
            >

                <el-menu-item index="1">

                    <router-link :to="{path:'/form'}" tag="div">
                        <i class="el-icon-tickets"></i>
                        <span>表单</span>
                    </router-link>
                </el-menu-item>

                <el-menu-item index="2">
                    <router-link :to="{path:'/layout2'}" tag="div">
                        <i class="el-icon-tickets"></i>
                        <span>layout2</span>
                    </router-link>
                </el-menu-item>

                <el-menu-item index="3">
                    <router-link :to="{path:'/useJilu'}" tag="div">
                        <i class="el-icon-location"></i>
                        <span>图片上传</span>
                    </router-link>
                </el-menu-item>


                <el-menu-item index="4">
                    <router-link :to="{path:'/schoolUse'}" tag="div">
                        <i class="el-icon-tickets"></i>
                        <span>城市选择</span>
                    </router-link>
                </el-menu-item>

                <el-menu-item index="5">
                    <router-link :to="{path:'/excel'}" tag="div">
                        <i class="el-icon-tickets"></i>
                        <span>excel</span>
                    </router-link>
                </el-menu-item>


            </el-menu>

        </el-aside>

        <el-main class="123" style="position: absolute;left:200px;right:0;bottom:0;top:50px;">

            <!--需要切换的页面-->
            <router-view></router-view>

        </el-main>

    </el-container>
</template>
<script>

    export default{
        props: {
            arrOpen: {
                default: ['1']
            }
        },
        data(){
            return{
                active:'1'
            }
        },
        mounted(){
            document.title=this.$route.name;
            var title=document.getElementById('title');
            console.log(title)


            this.Bus.$on('active',(active)=>{
                this.active=active
            })
        },
        //时时改变标题
        watch:{
            '$route':function(){
                document.title=this.$route.name;
            },

            //改变选中的导航
            'active'(a){
                this.active=a
            }
        }
    }

</script>
<style>

</style>
