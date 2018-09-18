<template>
  <div class='report'>
     <div class='report-date'>
         <el-date-picker 
            v-model="start_time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
         </el-date-picker>
         <el-button type="primary" class='report-search'>搜索</el-button>
     </div>
     <div class='report-table'>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address"  label="地址">
            </el-table-column>
        </el-table>
     </div>
     <div class='report-pagination'>
       <el-pagination background layout="prev, pager, next" :total="1000">

       </el-pagination>
     </div>
  </div>  
</template>

<script>
    export default {
        name:'Report',
        data(){
            return{
               start_time:'',
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
        }


    }
</script>

<style scoped>
.report{
    width:100%;
    background:none repeat scroll 0 0 #eee;
    border:1px solid #ccc;
    line-height:20px;
    padding:10px;
    padding-bottom:10px;
    overflow:hidden;

}
.report-date{
    width:100%;
    margin-bottom:10px;
}
.report-table{
   margin-bottom:20px;
   
}

.report-pagination{
    text-align:right;
    font-size:20px;
}

</style>