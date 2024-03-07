import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { environment } from 'src/environments/environments';

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
  constructor( private service:ServiceService){
    this.currentDate = new Date()
    this.imageString = environment.imageBase + "/currency/EGP.png";
  }

  ngOnInit(): void {
    this.getData();
  }
  
  getData(){
    this.service.getcurrencyExchangeCenterBank().subscribe((data:any)=>{
      this.currencyExchangeCenter = data;
    })
  }

}
