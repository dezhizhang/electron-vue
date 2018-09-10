<template>
  <div id="app">
    <div class='wrap'>
      <router-link to='/'>首页</router-link>
      <router-link to='/news'>新闻</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app{
    width:100%;
    height:60px;
    background:pink;

  }
</style>
