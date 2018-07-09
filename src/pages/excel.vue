<template>
    <div>
        <pre>
            1、安装三个依赖包
        　　 npm install -S file-saver
         　　npm install -S xlsx
        　　 npm install -D script-loader
            2、在项目中创建一个文件夹（比如vendor，一般是在src目录下创建）
             把Blob.js和 Export2Excel.js这两个文件夹放到新建的文件夹内
            3、方法
            handleDownload() {
                this.downloadLoading = true
                require.ensure([], () => {
                    const { export_json_to_excel } = require('@/vendor/Export2Excel')
                    const tHeader = ['日期', '姓名', '地址']
                    const filterVal = ['date', 'name', 'address']
                    const list = this.tableData
                    const data = this.formatJson(filterVal, list)
                    export_json_to_excel(tHeader, data, '列表excel')
                    this.downloadLoading = false
                })
            },
            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]))
            }
            4、注意问题：
            const { export_json_to_excel } = require('@/vendor/Export2Excel')
            这里的@/vendor/Export2Excel路径问题
            关键是看build目录下的webpack.base.conf.js配置文件的alias
            '@': resolve('src'),
        </pre>
        <el-button style='margin-bottom:20px;' type="primary" icon="document" @click="handleDownload"
                   :loading="downloadLoading">导出excel</el-button>


        <el-upload
            class="avatar-uploader"
            action="http://admin.cpm66.com/api/uploadFileId"
            :show-file-list="false"
            :http-request="uploadExcel">
            <el-button>导入其实就是上传excel文件 利用文件上传功能实现</el-button>
        </el-upload>


        <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column :show-overflow-tooltip="true"
                    prop="date"
                    label="日期"
                    width="180">
                </el-table-column>
                <el-table-column :show-overflow-tooltip="true"
                    prop="name"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column :show-overflow-tooltip="true"
                    prop="address"
                    label="地址">
                </el-table-column>
            </el-table>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                downloadLoading: false,
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods: {
            handleDownload() {
                this.downloadLoading = true
                require.ensure([], () => {
                    const {export_json_to_excel} = require('@/vendor/Export2Excel')
                    const tHeader = ['日期', '姓名', '地址']
                    const filterVal = ['date', 'name', 'address']
                    const list = this.tableData
                    const data = this.formatJson(filterVal, list)
                    export_json_to_excel(tHeader, data, '列表excel')
                    this.downloadLoading = false
                })
            },
            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]))
            },

            uploadExcel($event){
                let formData = new FormData();
                formData.append('file', $event.file);//第一张图片
                this.$http({
                    method: 'post',
                    url: 'http://waterapi.qijiatech.com/api/Common/UploadFile?ticket=BF96EE57B93DE820E69F18217919EB8914128F7B38E82C12DB0FF84BA598E9237011785C5A768CA59D8E918580E5EBADB7C2466578C25A5F37C7FA0500151132163C8CE61E849B6725CCA15184499B4486FE8509C0AECC111F038FD6450471E2F78E4442B41EB31DB71CC3AFA141D7D74F0546014D9766CD8FDAA48DB32047464146A7DD4C03029014FE7E3610B2534C7D8226AA54CA722C94468FC7A5D3616BDC359D756A99D69CE63F358B5895E26F',
                    data: formData,
                    headers: {'Content-Type': 'multipart/form-data'},
                    onUploadProgress(progressEvent){
                        if (progressEvent.lengthComputable) {
                            let val = (progressEvent.loaded / progressEvent.total * 100).toFixed(0);
                            console.log(val);
                        }
                    }
                }).then(function (response) {
                    console.log(response);
                }).catch(function (error) {

                })
            }

        }
    }
</script>
<style>

</style>
