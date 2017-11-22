import { Component, OnInit, Output, EventEmitter,Input,OnChanges} from '@angular/core';
import { MyHttpService} from '../../../service/myhttp.service';
declare let $:any;

@Component({
  selector: 'clientList',
  templateUrl: './client-list.component.html',
  styleUrls: []
})
export class ClientListComponent implements OnInit,OnChanges {
  //发送客户信息
  @Output() sendIdEmitter=new EventEmitter();
  //接收到的搜索结果
  @Input() searchClients:any;
  // 客户信息
  clientsInfo:Array<any>=[];
  isShow=true;
  constructor(private myHttp:MyHttpService) { }
  ngOnChanges(){
    this.clientsInfo=this.searchClients;
  }
  ngOnInit() { 
    this.getClient(); 
  }
  //获取客户信息
  getClient(){
    this.myHttp.sendRequest("http://localhost/CRMData/data/clients/clients.php")
    .subscribe((data:any)=>{
      if(data){
        // console.log(data);
        if(data.code==200){
          this.clientsInfo=data.data;
          this.myHttp.convertData(this.clientsInfo,["重点客户","已成交","已合作","跟进中"]);
          // console.log(this.clientsInfo);  
          //默认显示列表中第一个客户的详情
          this.sendDetail(this.clientsInfo[0]);    
        }
      }
    })
  }
  sendDetail(client){
    this.sendIdEmitter.emit(client);
  }
  tabModule(){
    this.isShow=!this.isShow;
  }
}