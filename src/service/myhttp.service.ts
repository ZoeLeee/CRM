import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { enable, destroy } from 'splash-screen';
import { FileUploader} from 'ng2-file-upload/file-upload/file-uploader.class';
@Injectable()
export class MyHttpService {
  constructor(private http: Http) { 
    
  }
  //发送网络请求
  sendRequest(url:string,isLoad=true){
    //显示loading窗口
    if(isLoad){
      enable("circular");
    } 
    return this.http.get(url,{withCredentials:true})
    .map((response:Response)=>{
      if(response){
        destroy();
      }
      return response.json();
    })
  }
  //上传文件
  submitUploadFile(fileList,url){ 
    if(fileList.length>0){ 
      let file:File = fileList[0]; 
      let formData = new FormData(); 
      formData.append('file',file,file.name); 
      let headers = new Headers(); 
      // headers.append('Accept','application/json'); 
      // let options = new RequestOptions({headers:headers}); 
      return this.http.post(url,formData,{withCredentials:true}) 
      .map(res=>res.json())
    } 
  } 
  //将数据库的status转为相应的状态,datas为接受到的数据,arr为要转化的数据数组
  convertData(datas,arr){
    for(let data of datas){
      for(let i in arr){
        if(data.status==i){
          data.status=arr[i]
        }
      }
    }
  }
}