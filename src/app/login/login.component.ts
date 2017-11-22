import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../../service/myhttp.service';
import {Router} from '@angular/router';
@Component({
  selector: 'storeLogin',
  templateUrl: './login.component.html',
  styleUrls:[]
})

export class LoginComponent implements OnInit {
  uname:string="";
  upwd:string="";
  // 错误信息
  errorMsg="";
  constructor(private myHttp:MyHttpService,private router:Router) { }
  ngOnInit() { }
  toLogin(){
    // console.log(this.uname);
    if(this.uname && this.upwd){
      this.myHttp.sendRequest("http://localhost/CRMData/data/user/login.php?uname="+this.uname+"&upwd="+this.upwd)
      .subscribe((data:any)=>{
          if(data.code==200){
            sessionStorage.setItem("isLogin",'true');
            this.errorMsg="";
            // console.log("登录成功");
            this.router.navigate([""]);
          }else{
            this.errorMsg="请检查用户名和密码";
          }
      })
    }
  }
}