import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { environment } from 'src/environments/environments';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-market-exchange',
  templateUrl: './market-exchange.component.html',
  styleUrls: ['./market-exchange.component.css']
})
export class MarketExchangeComponent implements OnInit{
currentDate!:Date;
arrCurrency = ['Currency', 'Buy', 'Sell'];
currencyExchangeCenter : any;
imageString:string;
listNametranslateCurrancy:any = ['Us','Sa','Eur','UAE','KUW','PoundSterling','Oma','QAT','Can','jor','Aus','Bah','Swi','Ja','Swe','Dan','Nor'];

  constructor( private service:ServiceService,private translate:TranslateService){
    this.currentDate = new Date()
    this.imageString = environment.imageBase + "/currency/EGP.png";
    
  }

  ngOnInit(): void {
    this.getData();
  }
  // // i want when i navgate to this compont resend the data if arbic resend arbic if not resend english! // / / / // /
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
