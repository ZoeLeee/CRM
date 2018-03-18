import { Component, OnInit } from '@angular/core';
declare let $:any;
import { MyHttpService} from '../../service/myhttp.service';
@Component({
  selector: 'client',
  templateUrl: './clients.component.html',
  styleUrls: []
})
export class ClientComponent implements OnInit {
  //搜索到的客户列表
  clients:any;
  //客户详情
  clientDetail:any;
  // 跟进进度
  clientProgress:any;
  //备注信息
  remark:any;
  // 后续计划
  plans:any;
  keyword="";
   // 是否显示创建项目
   display: boolean = false;
  constructor(private myHttp:MyHttpService) { }

  ngOnInit() { 
        // 添加滚动条
        $(".full-height-scroll").slimScroll({height:"100%"}); 
  }
  getClientDetail(client:any){
      // console.log(client);
     this.clientDetail=client;
     if(client.p_path){
      this.clientProgress=client.p_path.progress; 
      this.remark=client.p_path.remark;
      this.plans=client.p_path.plan;
     }  
  }
  // 搜索客户
  searchClient(e){
    this.myHttp.sendGetRequest("http://localhost/CRMData/data/clients/clients.php?kw="+e,false).subscribe((data:any)=>{
      // console.log(data);
      if(data){
        if(data.code==200){
          this.clients=data.data;
        }
      }
    })
  }
  showDialog() {
    this.display = true;
  }
}