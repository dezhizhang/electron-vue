<template>
  <div id="app">
        <el-container :style="{'height':winHeight+'px'}"> 
          <el-aside :style="{'height':winHeight+'px'}">
            <el-menu :default-openeds="['1', '3']">
              <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>起始页面</template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">
                     <router-link  tag="li" :to="{ path:'/'}"> 欢迎页面 </router-link>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>情况报告</template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">
                      <router-link tag="li" :to="{ path:'/report'}">全部情况</router-link>
                  </el-menu-item>
                  <el-menu-item index="2-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="2-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title"><i class="el-icon-setting"></i >情报设置</template>
                <el-menu-item-group>
                  <el-menu-item index="3-1">
                      <router-link :to="{ path:'/keyword'}">关建字设置 </router-link>
                  </el-menu-item>
                  <el-menu-item index="3-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="3-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="3-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                </el-submenu>
              </el-submenu>
            </el-menu>
          </el-aside>
      
          <el-container class='main' :style="{'height':winHeight+'px'}" >
             <router-view></router-view>
          </el-container>
    </el-container>
   
  </div>
</template>

<script>
import './assets/iconfont/iconfont.css'

export default {
    name: 'App',
    data(){
      return {
        winHeight:document.documentElement.clientHeight
      }
    },
    mounted() {
       window.onresize = () => {
         this.winHeight=document.documentElement.clientHeight;

       }
    },
    
  }
</script>

<style scoped>
  *{
    margin:0;
    padding:0;

  } 
  #app{
    width:100%;
    
  }

  .el-aside{
    width:200px;
    background:#eee;

  }
  .el-menu{
    background:#eee;

  }

  a{
    color:#333;
    display:block;
    text-decoration:none;

  }
  .main{
    width:100%;
    padding:10px;
    overflow-y:auto;
    overflow-x:hidden;
   

  }
</style>
