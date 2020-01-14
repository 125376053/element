<template>
    <ul class="tp">
        <li>
            <input type="file" class="file" accept="image/*">
            <img src="static/images/gd2_06.jpg">
        </li>
        <!--上传图片列表 最多四张-->
        <li v-for="(item,index) in uploadImgs">
            <img :src="item.src" alt="">
        </li>
    </ul>
</template>
<script>
    import lrz from "lrz";
    export default{
        data(){
            return{
                uploadImgs: [] //上传图片的列表
            }
        },
        methods: {
            uploadImg(){
                var that = this;
                var file = document.querySelector('.file');
                if (!file) {
                    return;
                };
                file.onchange = function () {
                    lrz(this.files[0]).then(function (rst) {

                        //如果图片已经选择过就不允许在选择
                        that.uploadImgs.forEach((item, index) => {
                            if (item.name === rst.origin.name) {
                                return;
                            }
                        })

                        //只允许上传四张
                        if (that.uploadImgs.length >= 4) {
                            that.$toast("最多只能上传四张")
                            return;
                        }

                        //保存图片到图片列表中遍历
                        that.uploadImgs.push({
                            name: rst.origin.name,
                            src: rst.base64
                        })

                        rst.formData.append('fileLen', rst.fileLen);
                        $.ajax({
                            url: that.baseUrl + '/api/Common/UploadFile',
                            data: rst.formData,
                            processData: false,
                            contentType: false,
                            type: 'POST',
                            success: function (d) {
                                if (d.IsError > 0) {
                                    that.$toast(d.StatusMsg)
                                    return false;
                                }
                            },
                            error: function (e) {

                            }
                        });
                    })
                }
            }
        },
        mounted(){
            this.uploadImg()
        }
    }
</script>
<style>

</style>
