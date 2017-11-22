import { Component, OnInit } from '@angular/core';
declare let $:any;
@Component({
  selector: 'miniChat',
  templateUrl: './miniChat.component.html',
  styleUrls: []
})
export class MiniChatComponent implements OnInit {
  isShow=false;
  constructor() { }

  ngOnInit() { 
    $(".small-chat-box .content").slimScroll({height:"234px",railOpacity:.4});
  }
  toggleShow(){
    if(this.isShow){
      this.isShow=false;
    }else{
      this.isShow=true;
    }
  }
}