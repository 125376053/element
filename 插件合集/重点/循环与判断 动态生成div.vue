<template>
    <div id="app">
        <div ref="haha">
            <div v-for="(item,index) in divs">
                <p>{{item}}</p>
            </div>
        </div>
        <button @click="createDiv">11111</button>
    </div>
</template>

<script>
  export default {
      data(){
        return{
            divs:[]
        }
      },
      methods:{
          createDiv(){
            this.divs=[1,2,3,4,5];
          }
      },
      mounted(){

      }
  }
</script>

<style>

</style>
