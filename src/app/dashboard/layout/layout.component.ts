import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/app/langService/lang.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{
  lang:any = "en"
  constructor(private translate: TranslateService, private langService:LangService){
    this.trnalsetet();
  }
  ngOnInit(): void {
  }  
  
  switchLanguage() {
    this.lang = this.lang === "en" ? "ar" : "en";
    localStorage.setItem('language', this.lang);
    this.translate.use(this.lang);
    window.location.reload();
  }

  trnalsetet() : void{
    if ("language" in localStorage) {
      this.lang = localStorage.getItem("language")
       this.translate.use(this.lang);
    } else {
      this.translate.use(this.translate.defaultLang);
      console.log(this.lang)

    }
  }

}
