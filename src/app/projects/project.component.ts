import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../../service/myhttp.service';

@Component({
  selector: 'project',
  templateUrl: 'project.component.html'
})

export class ProjectComponent implements OnInit {
  // 保存项目的信息
  projectInfo:any;
  // 项目团队信息
  teamsInfo:any;
  // 搜索项目关键字
  kw:string="";
  // 是否显示创建项目
  display: boolean = false;
  
      
  constructor(private myHttp:MyHttpService) { }
  ngOnInit() { 
    this.getProject(true);
  }
  //获取项目数据
  getProject(isLoad:boolean){
    this.myHttp.sendGetRequest("http://localhost/CRMData/data/projects/projects.php?kw="+this.kw,isLoad)
    .subscribe((data:any)=>{
      // console.log(data); 
      if(data){
        if(data.code=='200'){
          this.projectInfo=data.data;
          this.myHttp.convertData(this.projectInfo,["取消","进行中","完成"]);
          this.teamsInfo=data.teams;
          // console.log(this.teamsInfo);
        }
      }
    })
  }
  //将索引转为数组
  getKeys(item) {
    return Object.keys(item);
  }
  //转json字符串
  convertJson(obj){
    return JSON.stringify(obj);
  }
  // 刷新重新加载方法
  refrashPage(){
    this.getProject(false);
  }
  // 搜索项目
  searchProject(e){
    this.getProject(false);
  }
  // 显示创建项目框
  showDialog() {
    this.display = true;
  }
}