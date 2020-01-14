<template>
    <div class="map">
        <div id="container" style="width:90%;margin:0 auto;height:3rem;"></div>
    </div>
</template>

<script>

    export default{
        name: '',
        props:{
            jingdu:{
                default:0,
            },
            weidu:{
                default:0
            }
        },
        data(){
            return {

            }
        },
        methods:{
            getMap(){
                let map = new AMap.Map("container", {
                    resizeEnable: true
                });
                let geocoder = new AMap.Geocoder({
                    city: "010", //城市，默认：“全国”
                    radius: 1000 //范围，默认：500
                });
                //地理编码,返回地理编码结果
                geocoder.getLocation("北京市海淀区苏州街", function(status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        //console.log(result);
                        //地理编码结果数组
                        let geocode = result.geocodes[0];
                        let marker = new AMap.Marker({
                            map: map,
                            position: [geocode.location.getLng(),geocode.location.getLat()]
                        });
                        let infoWindow = new AMap.InfoWindow({
                            content: geocode.formattedAddress,
                            offset: {x: 0, y: -30}
                        });
                        infoWindow.open(map, marker.getPosition());
                        map.setFitView();
                    }
                });
            }
        },
        mounted(){
            this.getMap()
        }
    }
</script>

<style>

</style>
