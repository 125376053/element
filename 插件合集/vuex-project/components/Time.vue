<template>
    <div>
        <router-link to="/Time/time-add">
            <button class="btn btn-primary">创建</button>
        </router-link>
        <hr>
        <router-view></router-view>
        <hr>
        <ul class="list-group" style="overflow: hidden;">
             <li class="list-group-item" v-for="list in lists" style="overflow: hidden;">
                 <div class="row">
                     <div class="col-md-2">
                         <img :src="list.avatar" alt="">
                         <p>{{list.name}}</p>
                     </div>
                     <div class="col-md-2">
                         <div>
                             <i class="glyphicon glyphicon-time">{{list.time}}</i>
                             <i class="glyphicon glyphicon-calendar">{{list.data}}</i>
                         </div>
                     </div>
                     <div class="col-md-7">
                         <div>{{list.comment}}</div>
                     </div>
                     <div class="col-md-1">
                         <button class="btn btn-danger">删除</button>
                     </div>
                 </div>
             </li>
        </ul>

    </div>
</template>
<script>
    export default{
        data(){
            return {
                lists:[
                    {
                        avatar:require("@/assets/images/guan11.png"),
                        name:"zhang",
                        data:"2017-01-05",
                        time:"08:00:00",
                        comment:"xxxxxxxxx"
                    }
                ]
            }
        }
    }
</script>
<style>

</style>
