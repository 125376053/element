<template>
    <div id="app">
        <Children v-if="aaaa" :aaaa="aaaa"></Children>
    </div>
</template>

<script>

    export default {
        data(){
            return {
                aaaa:null
            }
        },
        components:{
            Children: resolve => require(['./Children.vue'], resolve)
        },
        methods: {
            ajax(){
                setTimeout(() => {
                    this.aaaa={
                        a:1,
                        b:2
                    }
                },3000)
            }
        },
        mounted(){
            this.ajax()
        }
    }
</script>

<style>

</style>
