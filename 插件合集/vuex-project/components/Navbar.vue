<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">任务计划</a>
                <ul class="nav navbar-nav">
                    <li>
                        <router-link to="/Home">首页</router-link>
                    </li>
                    <li>
                        <router-link to="/Time">计划列表</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>

</script>
<style>
    .router-link-active{ background: #e0e0e0;}
    .nav > li > a:hover, .nav > li > a:focus{ background: none;}
</style>
