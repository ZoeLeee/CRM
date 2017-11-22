import { Injectable,OnInit} from '@angular/core';
import {Router} from '@angular/router' ;
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { MyHttpService } from '../service/myhttp.service';

@Injectable()
export class CanEnterGuard implements CanActivate,OnInit {
  toLogin:boolean=false;
  constructor(private myHttp:MyHttpService,private router:Router) { 
    
  }
  ngOnInit(){
    // console.log("init");
    
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // console.log("active");
    this.checkLogin();
    return this.toLogin;
  }
  checkLogin(){
    if(eval(sessionStorage.getItem('isLogin'))){
      this.toLogin=true;
    }else{
      this.toLogin=false;
      this.router.navigateByUrl("/login");
     
    }
  }
}