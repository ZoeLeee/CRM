import { Component ,DoCheck,OnInit} from '@angular/core';
declare let $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit,DoCheck{
  title = 'app';
  doc=$(document);
  ngDoCheck() {
    // console.log(document.documentElement.clientWidth);

    
  }
  ngOnInit() {
    window.onresize=()=>{
      if(this.doc.width()<=768){
        $(document.body).addClass("mini-navbar");
      }
    }
  }
}
