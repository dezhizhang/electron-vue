<template>
  <div class='home'>
    <div class='home-logo'>
        <el-dialog title="用户登录" :close-on-click-modal="false"
            :show-close="false"    :close-on-press-escape="false" 
            :center="true" 
            :visible.sync="dialogFormVisible">
            <el-form>
                <el-form-item>
                    <el-input v-model='userInfo.username' placeholder='请输入用户名'></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model='userInfo.password' placeholder='请输入用密码'></el-input>
                </el-form-item> 
                <el-button style="width:100%"  type='primary' @click ='doLogin'>登  录</el-button>
            </el-form>
       </el-dialog>
      </div>
    <div class='home-charts'>
      <highcharts :options="pieOption"></highcharts>
      <highcharts :options="columnOption"></highcharts>
    </div>
  </div>
  </div>
</template>

<script>
import tools from '../../model/tools.js'
let path = require('path');
let fs = require('fs');
console.log(tools);


// Build the chart
let pieOption= {
		chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				type: 'pie'
		},
		title: {
				text: '2018 年浏览器市场份额'
		},
		tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
				pie: {
						allowPointSelect: true,
						cursor: 'pointer',
						dataLabels: {
								enabled: false
						},
						showInLegend: true
				}
		},
		series: [{
				name: 'Brands',
				colorByPoint: true,
				data: [{
						name: 'Chrome',
						y: 61.41,
						sliced: true,
						selected: true
				}, {
						name: 'Internet Explorer',
						y: 11.84
				}, {
						name: 'Firefox',
						y: 10.85
				}, {
						name: 'Edge',
						y: 4.67
				}, {
						name: 'Safari',
						y: 4.18
				}, {
						name: 'Other',
						y: 7.05
				}]
		}]
};

let columnOption= {
    chart: {
        type: 'column'
    },
    title: {
        text: '按性别划分的水果消费总量'
    },
    xAxis: {
        categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
    },
    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: '水果数量'
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>' +
                '总量: ' + this.point.stackTotal;
        }
    },
    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },
    series: [{
        name: '小张',
        data: [5, 3, 4, 7, 2],
        stack: 'male' // stack 值相同的为同一组
    }, {
        name: '小潘',
        data: [3, 4, 4, 2, 5],
        stack: 'male'
    }, {
        name: '小彭',
        data: [2, 5, 6, 2, 1],
        stack: 'female'
    }, {
        name: '小王',
        data: [3, 0, 4, 4, 3],
        stack: 'female'
    }]
}

export default {
  name:'Home',
  data(){
    return {
      userInfo:{
        username:"",
        password:''
      },
      pieOption,
      columnOption,
      formLabelWidth:'120px',
      dialogFormVisible:true,
     

    }
  },
  beforeMount() {
      //let userInfo = localStorage.getItem('userInfo');
      let userInfo = tools.stroage.get('userInfo'); //获取用户信息

      if(userInfo){
          this.dialogFormVisible = false;

      }else{
          this.dialogFormVisible = true;

      }

  },
  methods:{
       doLogin () {
           
           
           if(this.userInfo.username && this.userInfo.password){
           this.$http.post(tools.config.apiUrl+'/index.php?m=Api&a=login', {
                username: this.userInfo.username,
                password: this.userInfo.password
            })
            .then((response) => {
                 response = response.data;
                if(response.success){
                    // localStorage.setItem('userInfo', JSON.stringify(response));
                    tools.stroage.set('userInfo',response.result); //保存用户信息
                    this.dialogFormVisible = false;
                    

                } else {
                    this.$message({
                        message:response.message,
                        type:'warning'
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            });

                  
           } else {
               this.$message({
                message: '用户名或密码不能为空！',
                type: 'warning'
                });
           }
            



       }
  }
  
 
}
</script>

<style>



</style>