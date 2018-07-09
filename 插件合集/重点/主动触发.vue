<template>
  <div id="app">
    <p ref="a1" @click="clickMe(1)">1</p>
    <p ref="a2" @click="clickMe(2)">2</p>
    <p ref="a3" @click="clickMe(3)">3</p>
    <p ref="a4" @click="clickMe(4)">4</p>
  </div>
</template>

<script>
  export default {
      methods:{
          clickMe(n){
              alert(n)
          }
      },
      mounted(){
          //主动触发
          this.$refs.a1.click();
      }
  }
</script>

<style>

</style>
