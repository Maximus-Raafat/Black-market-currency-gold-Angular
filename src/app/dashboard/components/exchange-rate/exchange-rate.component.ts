import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';
import { environment } from 'src/environments/environments';
import { ServiceService } from '../../service/service.service';

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

  constructor(private service:ServiceService){
    this.currentDate = new Date();
    this.imageString = environment.imageBase + "/currency/EGP.png";

  }

  ngOnInit(): void {
    this.getData();
  }

  clock(){
    let time = new Date();
    let hours = time.getHours().toString();
    console.log(hours);
  }

  getData(){
    this.service.getcurrencyExchangeCenterBank().subscribe((data:any)=>{
      this.currencyExchangeCenter = data;
    })
  }

}
