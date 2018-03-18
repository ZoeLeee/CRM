import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MyHttpService } from '../../service/myhttp.service';

@Component({
  selector: 'projectDetail',
  templateUrl: 'project-detail.component.html'
})

export class ProjectDetailComponent implements OnInit {
  projectDetail:object;
  team:any;
  isShow=true;
  constructor(private route:ActivatedRoute,private myHttp:MyHttpService) { }

  ngOnInit() { 
    this.getProjectDetail();
  }
  getProjectDetail(){
    this.route.params.subscribe((data)=>{
      //  console.log(data);
      this.team=JSON.parse(data.team);
      this.myHttp.sendGetRequest("http://localhost/CRMData/data/projects/project_details.php?pid="+data.pid).subscribe((data:any)=>{
        if(data){
          if(data.code==200){
            // this.projectDetail=data.data;
            //转换status为相应的状态
            this.myHttp.convertData(data.data,["取消","进行中","完成"]);
            this.projectDetail=data.data[0];
            // console.log(this.projectDetail);
          }
        }
      })
    });
  }
  //将索引转为数组
  getKeys(item) {
    return Object.keys(item);
  }
  tabModule(){
    this.isShow=!this.isShow;
  }
}