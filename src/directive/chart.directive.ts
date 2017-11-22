import { Directive, ElementRef ,Input ,OnInit} from '@angular/core';
import * as echarts from 'echarts';
@Directive({
  selector: '[chart]',
})
export class ChartDirective implements OnInit{ 
  @Input("chart") chartsOption="";
  constructor(private el:ElementRef){}
  ngOnInit(){
    //得到调用该指令的元素以及所传递来的数据
    const echart = echarts as any;
    const chart = echart.init(this.el.nativeElement);
    chart.setOption(this.chartsOption);
}
}