import { Component, OnInit } from '@angular/core';
declare let $:any;
@Component({
  selector: 'storeIndex',
  templateUrl: './index.component.html'
})

export class IndexComponent implements OnInit {
  constructor() { }

  ngOnInit() { 
    $(".J_iframe").slimScroll({height:"100%"});
  }
}