import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// why we use this service? 
export class TranslationResolver implements Resolve<any> {
  
  constructor(private translate: TranslateService) {}

  resolve(): Observable<any> {

    return this.translate.getTranslation(this.translate.currentLang);
  }
}