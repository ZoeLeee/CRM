import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../../service/myhttp.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: []
})
export class ProfileComponent implements OnInit {
  isEdit:boolean=false;
  phone:string="";
  email:string="";
  qq:string="";
  user_name="";
  profile_img="";
  constructor(private myHttp:MyHttpService) { }

  ngOnInit() { 
    this.getBasic();
  }
  //获取用户资料
  getBasic(){
    this.myHttp.sendRequest("http://localhost/CRMData/data/user/get_basic.php").subscribe((data:any)=>{
      // console.log(data);
      this.profile_img=data.profile_img;
      this.phone=data.phone;
      this.email=data.email;
      this.qq=data.qq;
      this.user_name=data.user_name;
    })
  }
  editInfo(e){
    // console.log(e.target.innerText);
    if(e.target.innerText==="编辑资料"){
      this.isEdit=true;
      e.target.innerHTML="<i class='fa fa-coffee'></i>保存";
    }else{
      this.myHttp.sendRequest("http://localhost/CRMData/data/user/update_basic.php?phone="+this.phone+"&email="+this.email+"&qq="+this.qq+"&user_name="+this.user_name).subscribe((data:any)=>{
        // console.log(data);
        if(data){
          if(data.code!=500){
            this.isEdit=false;
            e.target.innerHTML="<i class='fa fa-coffee'></i>编辑资料";
          }
        }
      })
    }
  }
}