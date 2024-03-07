import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatCardLgImage } from '@angular/material/card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 private apiURL="http://localhost:3000/";
 
 constructor(private http:HttpClient){}
  
  getcurrencyExchangeCenterBank():Observable<any> {
      return this.http.get(this.apiURL + "currencyExchangeCenterBank");
  }
  
  getGold():Observable<any> {
    return this.http.get(this.apiURL + "gold");
  }

  exChangeRateBanksCompont():Observable<any> {
    return this.http.get(this.apiURL + "exChangeRateBanksCompont");
  }

}
