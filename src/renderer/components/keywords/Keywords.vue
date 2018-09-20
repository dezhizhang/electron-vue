<template>
  <div class='Keywords'>
     <div class='keywords-btn'>
        <el-button size='small' type='primary' @click='addKeyWords'>增加关建字</el-button>
     </div>
     <!--增加关建词开始-->
     <div class='keywords-form'> 
        <el-dialog title="增加关建词" center :visible.sync="addKeywordsVisible">
            <el-form :model="addForm">
              <el-form-item label="必须包含关建字" :label-width="formLabelWidth">  
                <el-input v-model="addForm.keyword" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="可包含关建字" :label-width="formLabelWidth">
                <el-input v-model="addForm.may_keyword" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="不包含关建字" :label-width="formLabelWidth">
                <el-input v-model="addForm.nokeyword" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="监控频率" :label-width="formLabelWidth">
                <el-input v-model="addForm.frequency" autocomplete="off"></el-input>
              </el-form-item>
             </el-form>
            <div slot="footer" style="text-align:right" class="dialog-footer">
                <el-button size='small' @click="dialogFormVisible = false">取 消</el-button>
                <el-button size='small' type="primary" @click="addKeyWordsSubmit">确 定</el-button>
            </div>
        </el-dialog>
     </div>
      <!--增加关建词结束-->
      <!--列表部分开始-->
     <div class='keywords-table'>
        <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="keyword" label="必须包含关建字" width="200">
          </el-table-column>
               <el-table-column prop="may_keyword" label="可包含关建字" width="200">
          </el-table-column>
               <el-table-column prop="nokeyword" label="不包含关建字" width="200"> 
          </el-table-column>
               <el-table-column prop="frequency" label="监控频率" width="200">
          </el-table-column>
           <el-table-column  label="操作"  fixed="right"  width="200">
              <template slot-scope="scope">
                  <el-button @click="handleEditClick(scope.row)" type="text" size="small">编辑</el-button>  | 
                  <el-button type="text" size="small">编辑</el-button>
              </template>
          </el-table-column>
        </el-table> 
     </div>
      <!--列表部分结束-->
      <!--分页器开始-->
    <div class='keywords-pagination'>
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
    <!--分页器结束-->
    <!--编辑开始-->
    <div class='keywords-edit'>
        <el-dialog title="增加关建词" center :visible.sync="editKeywordsVisible">
            <el-form :model="editForm">
              <el-form-item label="必须包含关建字" :label-width="formLabelWidth">  
                <el-input v-model="editForm.keyword" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="可包含关建字" :label-width="formLabelWidth">
                <el-input v-model="editForm.may_keyword" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="不包含关建字" :label-width="formLabelWidth">
                <el-input v-model="editForm.nokeyword" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="监控频率" :label-width="formLabelWidth">
                <el-input v-model="editForm.frequency" autocomplete="off"></el-input>
              </el-form-item>
             </el-form>
            <div slot="footer" style="text-align:right"  class="dialog-footer">
                <el-button size='small' @click="dialogFormVisible = false">取 消</el-button>
                <el-button size='small' type="primary" @click="editKeyWordsSubmit">确 定</el-button>
            </div>
        </el-dialog>
    </div>
     <!--编辑结束-->
  </div>
</template> 

<script>
import tools from '../../model/tools.js'
export default {
  name:'Keywords',
  methods:{
      addKeyWords () {
        this.addKeywordsVisible = true;
        

      },
      handleEditClick (item){
         let editApi = tools.config.apiUrl +'/index.php?m=Api&a=oneKeywordsList&uid='+userInfo.id+'&sign='+sign+'&id='+item.id;
         this.editKeywordsVisible = true;
             let userInfo = tools.stroage.get('userInfo')
          let sign = tools.stroage.sign({
              'id':item.id,
              'a':'oneKeywordsList',
              'uid':userInfo.id,
              'salt':userInfo.salt,
           });
           
          this.$http.get(editApi)
          .then((response) => {
            let result = response.data.result
            this.editForm.keyword = result.keyword;
            this.editForm.may_keyword = result.may_keyword;
            this.editForm.nokeyword = result.nokeyword;
            this.editForm.frequency = result.frequency;
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      editKeyWordsSubmit () {
           console.log(this.editForm.id);

          //：http://www.apiying.com/yuqing/index.php?m=Api&a=editKeywords
             let userInfo = tools.stroage.get('userInfo')
             let sign = tools.stroage.sign({
                'id':this.editForm.id,
                'a':'editKeywords',
                'uid':userInfo.id,
                'salt':userInfo.salt,
              });
          //   this.$http.post(tools.config.apiUrl+'/index.php?m=Api&a=editKeywords', {
          //       id:this.editForm.id,
          //       keyword: this.editForm.keyword,
          //       may_keyword: this.editForm.may_keyword,
          //       nokeyword: this.editForm.nokeyword,
          //       frequency: this.editForm.frequency,
          //       sign:sign,
          //       uid:userInfo.id,
          //  }).
          //  then((response) => {
          //    console.log(response);

          //  })
          //  .catch(function (error) {
          //   console.log(error);
          // });
    
      },
      
      addKeyWordsSubmit () {
        //http://www.apiying.com/yuqing/index.php?m=Api&a=addKeywords
        let userInfo = tools.stroage.get('userInfo')
        let sign = tools.stroage.sign({
          'a':'addKeywords',
          'uid':userInfo.id,
          'salt':userInfo.salt,
        });
      

        this.$http.post(tools.config.apiUrl+'/index.php?m=Api&a=addKeywords', {
            keyword: this.addForm.keyword,
            may_keyword: this.addForm.may_keyword,
            nokeyword: this.addForm.nokeyword,
            frequency: this.addForm.frequency,
            sign:sign,
            uid:userInfo.id,
          })
          .then((response) => {
             if(response.data.success){
               this.addKeywordsVisible = false;
               //增加完成时重新获取数据
               this.getKeyWordsList();

             } else {
               this.$message({
                  showClose: true,
                  message: response.data.message,
                  type: 'warning'
                });
             }
          })
          .catch(function (error) {
            console.log(error);
          });
      },
       getKeyWordsList(){
       let userInfo = tools.stroage.get('userInfo')
        let sign = tools.stroage.sign({
          'a':'keywordsList',
          'uid':userInfo.id,
          'salt':userInfo.salt,
        });
        //http://www.apiying.com/yuqing/index.php?m=Api&a=keywordsList
        let api = tools.config.apiUrl +'/index.php?m=Api&a=keywordsList&uid='+userInfo.id+'&sign='+sign;
        
        this.$http.get(api)
        .then((response) => {
          this.tableData = response.data.result;

        })
        .catch(function (error) {
            console.log(error);
          });
  },
 
  },
 

  data(){
    return{
        addKeywordsVisible: false,
        editKeywordsVisible:false,
        formLabelWidth: '120px',
        tableData: [],
        editId:'',
        addForm: {
          keyword: '',
          may_keyword:'',
          nokeyword:'',
          frequency:''
    
        },
        editForm: {
          keyword: '',
          may_keyword:'',
          nokeyword:'',
          frequency:''
    
        },
    }
  },
   mounted() {
    this.getKeyWordsList();


  },
  
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