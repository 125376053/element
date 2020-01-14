<template>
    <div id="app">
        {{ok}}
        <button @click="changeOk">修改ok</button>
    </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex'
    export default {
        computed:{
            ...mapGetters(['ok'])
        },
        methods:{
            ...mapActions(['changeOk'])
        }
    }
</script>

<style>

</style>
