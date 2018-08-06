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
                <el-col :span="8">
                    <el-button :span="8" @click="startTiyan">我要体验</el-button>
                </el-col>
                <el-col :span="8">
                    <p style="text-align: right;">用户所属的机构/学校名称</p>
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
                    <router-link :to="{path:'/areaSchool'}" tag="div">
                        <i class="el-icon-message"></i>
                        <span>区域学校管理</span>
                    </router-link>
                </el-menu-item>

                <el-submenu index="2">

                    <template slot="title">
                        <router-link :to="{path:'/schoolUse'}" tag="div">
                            <i class="el-icon-location"></i>
                            <span>学校使用管理</span>
                        </router-link>
                    </template>
                    <el-menu-item index="2-1" title="分组1">
                        <router-link :to="{path:'/useJilu'}" tag="div">
                            <i class="el-icon-location"></i>
                            <span>使用记录</span>
                        </router-link>
                    </el-menu-item>


                </el-submenu>

                <el-menu-item index="3">
                    <router-link :to="{path:'/tabsDailog'}" tag="div">
                        <i class="el-icon-message"></i>
                        <span>威脉测试</span>
                    </router-link>
                </el-menu-item>

                <el-menu-item index="4">
                    <router-link :to="{path:'/layout'}" tag="div">
                        <i class="el-icon-location"></i>
                        <span>使用记录</span>
                    </router-link>
                </el-menu-item>

                <el-menu-item index="5">

                    <router-link :to="{path:'/table'}" tag="div">
                        <i class="el-icon-tickets"></i>
                        <span>日志</span>
                    </router-link>
                </el-menu-item>

                <el-menu-item index="6">

                    <router-link :to="{path:'/form'}" tag="div">
                        <i class="el-icon-tickets"></i>
                        <span>表单</span>
                    </router-link>
                </el-menu-item>

                <el-menu-item index="7">
                    <router-link :to="{path:'/tree'}" tag="div">
                        <i class="el-icon-tickets"></i>
                        <span>树</span>
                    </router-link>
                </el-menu-item>

                <el-menu-item index="8">
                    <router-link :to="{path:'/excel'}" tag="div">
                        <i class="el-icon-tickets"></i>
                        <span>导入导出</span>
                    </router-link>
                </el-menu-item>

                <el-menu-item index="9">
                    <router-link :to="{path:'/buju'}" tag="div">
                        <i class="el-icon-tickets"></i>
                        <span>布局</span>
                    </router-link>
                </el-menu-item>

                <el-menu-item index="10">
                    <router-link :to="{path:'/layout2'}" tag="div">
                        <i class="el-icon-tickets"></i>
                        <span>layout2</span>
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
        },
        methods:{
            //点击开始体验
            startTiyan(){
                //如果已经绑定微信 直接体验
                let start=false //false 没有绑定微信
                let step=true //true 显示步骤
                this.Bus.$emit('start',start,step)
            }
        }
    }

</script>
<style>

</style>
