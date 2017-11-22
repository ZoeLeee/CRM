import { Component, OnInit } from '@angular/core';
declare let $:any;
@Component({
  selector: 'email',
  templateUrl: './email.component.html',
  styleUrls: []
})
export class EmailComponent implements OnInit {
  constructor() { }

  ngOnInit() { 
    $(".full-height-scroll").slimScroll({height:"100%"});
  }
}