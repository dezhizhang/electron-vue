<template>
  <div>
    <div class='header'>
      <div class='header-wapper'>
          <i @click='handleMain' class='iconfont icon-zuixiaohua'></i>
          <i @click='handleMax' class='iconfont icon-zuidahua'></i>
          <i @click='handleClose' class='iconfont icon-close'></i>
      </div>
      
    </div>
    <div class='header-content'>
        <input type='text' v-model='name' placeholder='请输入用户名'/>
        <input type='text' v-model='age' placeholder='请输入年龄'/>
    </div>
    <div>
      <el-button type='primary' @click='addData()'>增加数据</el-button>
      <el-button type='success' @click='editData()'>修改数据</el-button>
      <el-button type='info' @click='searchData()'>查找数据</el-button>
      <el-button type='danger' @click='deleteData()'>删除数据</el-button>
    </div>
    <div>
      <ul v-for='(item,index) in list'>
        <li>{{item.name}}</li>
        <li>{{item.age}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default{
    name:'Header',
    data(){
      return {
        name:'',
        age:'',
        list:[],
      }
    },
    methods:{
      handleMain(){
        this.$electron.ipcRenderer.send('window-min')

      },
      handleMax(){
        this.$electron.ipcRenderer.send('window-max')
      },
      handleClose(){
        this.$electron.ipcRenderer.send('window-close')

      },
      addData () {
        this.$db.insert({'name':this.name,'age':this.age},(err,data) => {
            if(err){
              console.log(err);
              return;

            }
            console.log(data);

        })

      },
      editData(){
        
      },
      searchData(){
          this.$db.find({ },(err,data) => {
            if(err){
              console.log(err);
              return;

            }
            //console.log(data);
            this.list=data;


          })
      },
      deleteData(){
          this.$db.remove({name:'11111'},(err,data) => {
            if(err){
              console.log(err);
              return;

            }   
            console.log(data);

          })
      }
      
    }
}
</script>

<style>
*{
  margin:0;
  padding:0;

}
.header{
  width:100%;
  height:40px;
  background:red;
  -webkit-app-regioin:drag;

 
}

.header-wapper{
  float:right;
  height:40px;
  line-height:40px;
  margin-right:10px;
}

.iconfont{
  color:#fff;
  margin-left:15px;

}

.header-conten{
  width:100%;
  margin-top:40px;


}

</style>