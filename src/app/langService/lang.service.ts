import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  private languageChangeSubject = new Subject<string>();
  languageChange$ = this.languageChangeSubject.asObservable();

  constructor() { }

  changeLanguage(language: string) {
    this.languageChangeSubject.next(language);
  }
}
