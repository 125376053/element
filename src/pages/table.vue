<template>
    <div>
        <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort = "{prop: 'product_name', order: 'descending'}"
        >
            <el-table-column
                prop="product_name"
                label="日期"
                sortable
                width="180">
            </el-table-column>
            <el-table-column
                prop="id"
                label="姓名"
                sortable
                width="180">
            </el-table-column>
            <el-table-column
                prop="id"
                label="地址">
            </el-table-column>
        </el-table>
        <el-pagination layout="prev, pager, next" :total="500" @current-change="changePage">

        </el-pagination>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: []
            }
        },
        methods: {
            tableView(obj){
                this.$http.get(this.baseUrl + '/api/production/list', {
                    params: {
                        area_id:obj.area_id,
                        page:obj.page
                    }
                }).then((d) => {
                    console.log(d);
                    this.tableData=d.data.data.data;
                })
            },
            changePage(page){
                this.tableView({
                    area_id:1,
                    page:page
                })
            }
        },
        mounted(){
            this.tableView({
                area_id:1,
                page:1
            })
        }
    }
</script>
