import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';
import { environment } from 'src/environments/environments';
import { ServiceService } from '../../service/service.service';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { DataSharingServiceService } from 'src/app/datasharingserive/data-sharing-service.service';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit{
arrCurrency = ['Currency', 'Buy', 'Sell'];
currencyExchangeCenter : any;
currentDate: Date;
imageString:string;
listNametranslateCurrancy:any = ['Us','Sa','Eur','UAE','KUW','PoundSterling','Oma','QAT','Can','jor','Aus','Bah','Swi','Ja','Swe','Dan','Nor'];

  constructor(
    private service:ServiceService,
    private translate: TranslateService,
    private router: Router,
    private serivceDataShar:DataSharingServiceService
    ){
    this.currentDate = new Date();
    this.imageString = environment.imageBase + "/currency/EGP.png";
    const navigation = this.router.getCurrentNavigation();
    
  }

  ngOnInit(): void {
    this.getData();
  }

  clock(){
    let time = new Date();
    let hours = time.getHours().toString();
    console.log(hours);
  }
// i want when i navgate to this compont resend the data if arbic resend arbic if not resend english!
  getData(){
    this.service.getcurrencyExchangeCenterBank().subscribe((data:any)=>{
      this.currencyExchangeCenter = data;
      this.translateLabelsCurrany(data)
    })
  }
  translateLabelsCurrany(data:any): void {
    for (let i = 0; i < data.length - 1; i++) {
      this.translate.get(`home.tableCentralBank.${this.listNametranslateCurrancy[i]}`).subscribe(
        (translation:any)=>{
          data[i].currency = translation;
        },
        (error:any)=>{
          console.log("error form the translation Item = = = >",error)
        }
        )
      }
  }

}
