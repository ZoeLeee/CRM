import { Component, OnInit } from '@angular/core';
declare let $:any;
@Component({
  selector: 'fileManager',
  templateUrl: './file-manager.component.html'
})

export class FileManagerComponent implements OnInit {
  constructor() { }

  ngOnInit() { 
    // 添加滚动条
    // $(".fileBox").slimScroll({height:"100%"}); 
  }
}