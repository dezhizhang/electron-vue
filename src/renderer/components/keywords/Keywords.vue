<template>
  <div class='Keywords'>
     <div class='keywords-btn'>
        <el-button size='small' type='primary' @click='addKeyWords'>增加关建字</el-button>
     </div>
     <div class='keywords-form'>
        <el-dialog title="收货地址" :visible.sync="keywordsVisible">
            <el-form :model="form">
              <el-form-item label="标题" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="必须包含关建字" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="可包含关建字" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="不包含关建字" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="监控效果" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
             </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button size='small' @click="dialogFormVisible = false">取 消</el-button>
                <el-button size='small' type="primary" @click="keywordsVisible = false">确 定</el-button>
            </div>
        </el-dialog>
     </div>
     <div class='keywords-table'>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="标题" width="190">
          </el-table-column>
          <el-table-column prop="name" label="必须包含关建字" width="190">
          </el-table-column>
          <el-table-column prop="address" label="可包含关建字" width="190">
          </el-table-column>
           <el-table-column prop="address" label="不包含关建字" width="190"> 
          </el-table-column>
           <el-table-column prop="address" label="监控效果" width="190">
          </el-table-column>
        </el-table> 
     </div>
    <div class='keywords-pagination'>
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template> 

<script>
export default {
  name:'Keywords',
  methods:{
      addKeyWords(){
        this.keywordsVisible = true;
        

      }
  },
  data(){
    return{
        keywordsVisible: false,
        formLabelWidth: '120px',
        tableData: [{

        }],
        form: {
          name: '',
    
        },
    }
  }
  
}
</script>

<style scoped>
.keywords-pagination{
  float:right;

}
</style>