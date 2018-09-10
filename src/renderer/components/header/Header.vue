<template>
  <div class='header'>
     <div class='header-wapper'>
        <i class='iconfont icon-zuixiaohua'></i>
        <i class='iconfont icon-zuidahua'></i>
        <i class='iconfont icon-close'></i>
     </div>
  </div>
</template>

<script>
export default{
    name:'Header',

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