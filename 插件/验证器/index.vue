<template>
    <div>
        username:<input type="text" v-zhang:username="{
            id:'userId',
            err:'请输入6-10位字符',
            ok:'用户名输入正确',
            test:/^.{6,10}$/
        }"
    >
        password:<input type="password" v-zhang:password="{
            id:'passId',
            err:'请输入6-10位密码',
            ok:'密码输入正确',
            test:/^.{6,10}$/
        }"
    ><br>
        emial:<input type="emial" v-zhang:emial="{
            id:'eId',
            err:'请输入合法邮箱',
            ok:'邮箱输入正确',
            test:/^\d{6,11}@qq\.com$/
        }"
    >
        <p id="userId"></p>
        <p id="passId"></p>
        <p id="eId"></p>
        <button v-zhang:check>提交3</button>
    </div>
</template>

<script>
    /*
     * vue2.0 自定义验证器插件
     *    基于局部指令封装
     *       模板验证与逻辑分离
     *           支持
     *               1顺序调用，
     *               2自定义模板验证规则与提示字符，
     *               3验证文本框对应验证提示框
     *               4验证错误集中处理 errors
     *               5所有验证成功才能提交
     *               6实时验证
     *           就是不知道怎么用vue主动触发事件 所以用jquery triggrt了一下
     * */
    var errors = [];
    export default{
        directives: {
            zhang: {
                bind(el, binding, vnode, oldVnode){

                    el.oninput = function () {
                        var value = el.value;
                        var test = binding.value.test;
                        if (test.test(value)) {
                            errors.shift(binding.arg)
                            document.getElementById(binding.value.id).innerHTML = binding.value.ok;
                            document.getElementById(binding.value.id).removeAttribute('err', binding.arg);
                        } else {
                            document.getElementById(binding.value.id).innerHTML = binding.value.err;
                            document.getElementById(binding.value.id).setAttribute('err', binding.arg);
                            errors.push(binding.arg);
                        }

                        //es6数组去重
                        errors = Array.from(new Set(errors));
                    };
                    if(binding.arg=="check"){

                        el.onclick=()=>{
                            if(errors.length>0){
                                return false;
                            }else{
                                alert("可以跳转了")
                            }
                        }
                    }
                },
            }
        }
    }
</script>

<style>

</style>
