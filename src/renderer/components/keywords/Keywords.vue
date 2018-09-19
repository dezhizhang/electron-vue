<template>
  <div class='Keywords'>
     <div class='keywords-btn'>
        <el-button size='small' type='primary' @click='addKeyWords'>增加关建字</el-button>
     </div>
     <div class='keywords-form'> 
        <el-dialog title="增加关建词" center :visible.sync="keywordsVisible">
            <el-form :model="form">
              <el-form-item label="必须包含关建字" :label-width="formLabelWidth">  
                <el-input v-model="form.keyword" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="可包含关建字" :label-width="formLabelWidth">
                <el-input v-model="form.may_keywor" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="不包含关建字" :label-width="formLabelWidth">
                <el-input v-model="form.nokeyword" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="监控频率" :label-width="formLabelWidth">
                <el-input v-model="form.frequency" autocomplete="off"></el-input>
              </el-form-item>
             </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button size='small' @click="dialogFormVisible = false">取 消</el-button>
                <el-button size='small' type="primary" @click="addKeyWordsSubmit">确 定</el-button>
            </div>
        </el-dialog>
     </div>
     <div class='keywords-table'>
        <el-table :data="tableData" border style="width: 100%">
         
          <el-table-column prop="keyword" label="必须包含关建字" width="240">
          </el-table-column>
          <el-table-column prop="may_keywor" label="可包含关建字" width="240">
          </el-table-column>
           <el-table-column prop="nokeyword" label="不包含关建字" width="240"> 
          </el-table-column>
           <el-table-column prop="frequency" label="监控频率" width="240">
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
import tools from '../../model/tools.js'
export default {
  name:'Keywords',
  methods:{
      addKeyWords() {
        this.keywordsVisible = true;
        

      },
      addKeyWordsSubmit() {
        //http://www.apiying.com/yuqing/index.php?m=Api&a=addKeywords
        let userInfo = tools.stroage.get('userInfo')
       
        let sign = tools.sign({
          'a':'addKeywords',x
          'uid':userInfo.id,
          'salt':userInfo.salt,
        });

        this.$http.post(tools.config.apiUrl+'/index.php?m=Api&a=addKeywords', {
            keyword: this.form.keyword,
            may_keyword: this.form.may_keyword,
            nokeyword: this.from.nokeyword,
            frequency: this.from.frequency,
            sign:sign,
            uid:userInfo.id,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
  },
  data(){
    return{
        keywordsVisible: false,
        formLabelWidth: '120px',
        tableData: [{

        }],
        form: {
          keyword: '',
          may_keywor:'',
          nokeyword:'',
          frequency:''
    
        },
    }
  }
  
}
</script>

<style scoped>
.keywords-table{
  margin-bottom:10px;
}
.keywords-pagination{
  float:right;


}
</style>