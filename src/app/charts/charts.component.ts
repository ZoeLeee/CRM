import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'charts',
  templateUrl: './charts.component.html',
  styleUrls: []
})
export class ChartsComponent implements OnInit {
    //日期数据
    timeData= ['5-21', '5-22', '5-23', '5-24', '5-25', '5-26', '5-27',
    '5-28', '5-29', '5-30','5-31','6-1',
    '6-2', '6-3', '6-4', '6-5', '6-6', '6-7',
    '6-8', '6-9', '6-10', '6-11', '6-12', '6-13'].map(function (str) {
        return str.replace('2009/', '');
    })
  //折柱混合图
  lineColOption={
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['蒸发量','降水量','平均温度']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series: [
        {
            name:'蒸发量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name:'降水量',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'平均温度',
            type:'line',
            yAxisIndex: 1,
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
  };
  //用户反馈数据表
  feebbackOption={
    title: {
        bottom:5,
        text: '用户反馈数据表',
        x: 'center'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            return params[0].name + '<br/>'
                + params[0].seriesName + ' : ' + params[0].value + '位<br/>';
        },
        axisPointer: {
            animation: false
        }
    },
    legend: {
        data:['用户排名','关注排名','汽车之家用户评分','XX网用户评分','YY网用户评分'],
        x: 'left'
    },
    dataZoom: [
        {
            show: true,
            realtime: true,
            start: 30,
            end: 70,
            xAxisIndex: [0, 1]
        },
        {
            type: 'inside',
            realtime: true,
            start: 30,
            end: 70,
            xAxisIndex: [0, 1]
        }
    ],
    grid: [{
        left: 50,
        right: 50,
        height: '35%'
    }, {
        left: 50,
        right: 50,
        top: '55%',
        height: '35%'
    }],
    xAxis : [
        {
            type : 'category',
            boundaryGap : true,
            axisLine: {onZero: true},
            data: this.timeData
        },
        {
            gridIndex: 1,
            type : 'category',
            boundaryGap : true,
            axisLine: {onZero: true},
            data: this.timeData,
            position: 'top'
        }
    ],
    yAxis : [
        {
            name : '用户排名',
            type : 'value',
            min:60
        },
        {
            gridIndex: 0,
            name : '关注排名',
            type : 'value',
            min:0,
            max:10
        },
        {
            gridIndex: 1,
            name : '用户评分',
            type : 'value',
            min:4,
            max:5
        }
    ],
    series : [
        {
            name:'用户排名',
            type:'line',
            symbolSize: 8,
            hoverAnimation: false,
            data:[
               67,68,67,68,69,70,71,72,73,72,70,71,70,69,68,67,67,66,65,65,66,68,70,71
            ]
        },
        {
            name:'关注排名',
            type:'line',
            symbolSize: 8,
            yAxisIndex:1,
            xAxisIndex:0,
            hoverAnimation: false,
            data: [
               1,1,1,2,1,1,1,1,2,3,4,3,2,1,2,3,4,5,4,3,2,1,2,3
            ]
        },
        {
            name:'汽车之家用户评分',
            type:'bar',
            xAxisIndex: 1,
            yAxisIndex: 2,
            data:[
              4.5,4.4,4.5,4.6,4.8, 4.5,4.4,4.5,4.6,4.8, 4.5,4.4,4.5,4.6,4.8, 4.5,4.4,4.5,4.6,4.8, 4.5,4.4,4.5,4.6,4.4
            ]
        },
        {
            name:'XX网用户评分',
            type:'bar',
            xAxisIndex: 1,
            yAxisIndex: 2,
            data:[
              4.5,4.5,4.5,4.8,4.8, 4.5,4.4,4.7,4.6,4.8, 4.2,4.4,4.5,4.6,4.8, 4.5,4.4,4.5,4.1,4.7, 4.6,4.4,4.9,4.2,4.4
            ]
        },
        {
            name:'YY网用户评分',
            type:'bar',
            xAxisIndex: 1,
            yAxisIndex: 2,
            data:[
              4.5,4.2,4.5,4.6,4.1, 4.5,4.4,4.5,4.3,4.8, 4.5,4.4,4.5,4.6,4.8, 4.5,4.3,4.5,4.6,4.1, 4.5,4.4,4.9,4.4,4.4
            ]
        }
    ]
}
  constructor() { 
    
  }

  ngOnInit() { 
    
  }
  
}