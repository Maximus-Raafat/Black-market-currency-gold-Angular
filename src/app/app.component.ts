import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from './dashboard/service/service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  lang:any;

  constructor(private translate: TranslateService) {
    this.trnalsetet() 
  }
  ngOnInit(): void {

  }
  trnalsetet() : void{
    if ("language" in localStorage) {
      this.lang = localStorage.getItem("language")
      console.log(this.lang)
       this.translate.use(this.lang);
    } else {
      this.translate.use(this.translate.defaultLang);
    }
  }
}
