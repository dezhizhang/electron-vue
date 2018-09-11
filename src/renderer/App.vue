<template>
  <div id="app">
        <el-container :style="{'height':winHeight+'px'}"> 
          <el-aside :style="{'height':winHeight+'px'}">
            <el-menu :default-openeds="['1', '3']">
              <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>起始页面</template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="2-1">选项1</el-menu-item>
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
                <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="3-1">选项1</el-menu-item>
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
      
          <el-container :style="{'height':winHeight+'px'}" >
           
          </el-container>
    </el-container>
    <router-view></router-view>
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

<style>
  *{
    margin:0;
    padding:0;

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
  .el-container{
    width:100%;
    padding:10px;
    overflow-y:hidden;
    overflow-x:hidden;

  }
</style>
