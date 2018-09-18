<template>
  <div class='home'>
      <highcharts :options="pieOption"></highcharts>
      <highcharts :options="columnOption"></highcharts>
  </div>
  </div>
</template>

<script>
let path = require('path');
let fs = require('fs');

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
      pieOption,
      columnOption,
      

    }
  }
  
  
 
}
</script>

<style>



</style>