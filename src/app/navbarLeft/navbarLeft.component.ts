import { Component, OnInit } from '@angular/core';
import {ToggleService} from "../../service/toggle.service";
import { MyHttpService } from '../../service/myhttp.service';

// 引入jqury
declare let $:any;

@Component({
  selector: 'navbarLeft',
  templateUrl: './navbarLeft.component.html',
  styleUrls:['./navLeft.css']
})

export class NavbarLeftComponent implements OnInit {
  // 菜单列表下落状态
  isDrop:object={
    "home":false,"email":false,"userCenter":false,"report":false,"plan":false,
    "client":false,"team":false,"project":false,"chat":false,"bbs":false,"other":false
  };
  //保存用户信息
  userInfo:any={};
  fileList:any;
  constructor(private toggle:ToggleService,private myHttp:MyHttpService) { }

  ngOnInit() { 
    $(".sidebar-collapse").slimScroll({height:"100%",railOpacity:.9,alwaysVisible:!1});
    this.getUserInfo();
  }
  dropdown(index){
    this.toggle.toggleShow(index,this.isDrop);
  }
  getUserInfo(){
    this.myHttp.sendRequest("http://localhost/CRMData/data/user/session_data.php").subscribe((data:any)=>{
      // console.log("123");
      if(data){
        this.userInfo=data;
        if(this.userInfo.role=='0'){
          this.userInfo.role="超级管理员";
        }else if(this.userInfo.role=='1'){
          this.userInfo.role="普通管理员";
        }else{
          this.userInfo.role="普通员工";        
        }
      }
      // console.log(this.userInfo);
    })
  }
  uploadFile(e){
    this.fileList = e.target.files;
    var reader = new FileReader();
    // 监听reader对象的的onload事件，当图片加载完成时，把base64编码賦值给预览图片
    reader.addEventListener("load", ()=> {
      this.userInfo.avatar = reader.result;
    }, false);
    reader.readAsDataURL(this.fileList[0]);
    this.myHttp.submitUploadFile(this.fileList,"http://localhost/CRMData/data/user/upload_file.php").subscribe((data:any)=>{
      console.log(data);
    })
  }
}