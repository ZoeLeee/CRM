import { Component, OnInit } from '@angular/core';
import {ToggleService} from "../../service/toggle.service";
declare let $:any;
import { MyHttpService } from '../../service/myhttp.service';
import {Router} from '@angular/router';

@Component({
  
  selector: 'navHeader',
  templateUrl: 'navHeader.component.html'
})
export class NavHeaderComponent implements OnInit {
  isToggle=false;
  // 组件显示隐藏
  isShow=[false,false,false];
  // 通知,项目进度,主题切换状态
  isTab=[true,false,false];

  constructor(private toggle:ToggleService,private myHttp:MyHttpService,private router:Router) { }

  ngOnInit() { 
    $(".sidebar-container").slimScroll({height:"100%",railOpacity:.4,wheelStep:10})
  }
  // 控制模块显示隐藏方法
  toggleMsg(index){
    this.toggle.toggleShow(index,this.isShow);
  }
  //tab切换模块方法
  tabComment(index){
    this.toggle.toggleShow(index,this.isTab);
  }
  toggleLeftNav(){
    $(document.body).toggleClass("mini-navbar");
  }
  // 退出登录
  loginOut(){
    this.myHttp.sendGetRequest("http://localhost/CRMData/data/user/logout.php")
    .subscribe((data:any)=>{
      if(data){
        sessionStorage.setItem("isLogin","false");
        this.router.navigateByUrl("/login");
      }
    })
  }
}