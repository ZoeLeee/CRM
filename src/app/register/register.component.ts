import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../../service/myhttp.service';
import {Router} from '@angular/router';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls:['./register.css']
})

export class RegisterComponent implements OnInit {
  //用户名,密码是否可用
  isPass=[false,false,false];
  checkNameMsg:string="请输入3~12位用户名";
  nameReg:RegExp=/^[A-Za-z0-9]{3,12}$/;
  checkPwdMsg:string='请输入3位以上密码';
  pwdReg:RegExp=/^[A-Za-z0-9]{3,}$/; 
  isSamePwd:string="检查密码是否一致"; 
  // 是否同意本站协议
  isAgree:boolean=false;
  //用户输入的用户名密码
  uname:string="";
  upwd:string="";
  urpwd:string="";
  // urpwd:string="";
  constructor(private myHttp:MyHttpService,private router:Router) { }

  ngOnInit() { }
  // 检查用户名是否可用及重复
  checkName(e){
    if(this.nameReg.test(e)){
      this.myHttp.sendGetRequest("http://localhost/CRMData/data/user/check_uname.php?uname="+e)
      .subscribe((data:any)=>{
        // console.log(data);
        if(data.code==201){
          this.checkNameMsg="用户名已存在";
          this.isPass[0]=false; 
        }else{
          this.checkNameMsg=""; 
          this.isPass[0]=true;         
        }
      })
    }else{
      this.checkNameMsg="请输入3~12位用户名";
      this.isPass[0]=false; 
    }
    
  }
  // 检查密码是否符合要求
  checkPwd(e){
    if(this.pwdReg.test(e)){
      this.checkPwdMsg="";
      this.isPass[1]=true; 
    }else{
      this.checkPwdMsg="请输入3位以上密码";  
      this.isPass[1]=false;     
    }
  }
  // 检查密码是否一致
  checkPwdSame(e){
    // console.log(this.upwd,e);
    if(this.upwd===e){
      this.isSamePwd="";
      this.isPass[2]=true; 
    }else{
      this.isSamePwd="两次密码输入不一致"; 
      this.isPass[2]=false;      
    }
  }
  // 注册
  toRegister(){
    this.myHttp.sendGetRequest("http://localhost/CRMData/data/user/register.php?uname="+this.uname+"&upwd="+this.upwd)
    .subscribe((data:any)=>{
      if(data){
        if(data.code==200){
          this.router.navigateByUrl("/login");
        }
      }
    })
  }
}