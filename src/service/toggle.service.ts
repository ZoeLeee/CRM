import { Injectable } from '@angular/core';

@Injectable()
export class ToggleService {

  constructor() { }
  toggleShow(index,lists){
    if(lists[index]){
      lists[index]=false;
    }else{
      for(let i in lists){
        if(i==index){
          lists[i]=true;
        }else{
          lists[i]=false;
        }
      }
      
    }
  }
}