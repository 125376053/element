<template>
    <div class="wrapper" ref="foodsWrapper">
        <ul class="content">
            <li v-for="item in items">{{item}}</li>
        </ul>
    </div>
</template>
<script>
    import BScroll from 'better-scroll';
    export default{
        data(){
            return {
                items: [
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
                ],
                foodScroll: '',
                scrollY: 0, //滚动条位置
            }
        },
        mounted(){
            this.$nextTick(() => {
                this.foodScroll = new BScroll(this.$refs.foodsWrapper, {
                    probeType: 3, //实时监测
                    click: true
                });

                //通过事件监测到位置
                this.foodScroll.on('scroll', (pos) => {
                    console.log(pos)
                    this.scrollY = Math.abs(Math.round(pos.y));
                })

                this.foodScroll.scrollTo(0, -500)
            })
        }
    }
</script>
<style>
    /*关键是 这个外层元素一定要设置高度 才能使内部内容大于这个外层的高度 才能滚动*/
    ul, li {
        margin: 0;
        padding: 0;
    }

    .wrapper {
        position: absolute;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    li {
        height: 120px;
    }
</style>
