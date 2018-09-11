<template>
  <div class='header'>
     <div class='header-wapper'>
        <i @click='handleMain' class='iconfont icon-zuixiaohua'></i>
        <i @click='handleMax' class='iconfont icon-zuidahua'></i>
        <i @click='handleClose' class='iconfont icon-close'></i>
     </div>
  </div>
</template>

<script>
export default{
    name:'Header',
    data(){
      return {

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
  line-height:40px;
  margin-right:10px;


}

.iconfont{
  color:#fff;
  margin-left:15px;


}

</style>