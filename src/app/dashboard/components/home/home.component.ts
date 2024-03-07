import { Component, OnInit  } from '@angular/core';
import { environment } from 'src/environments/environments';
import { ServiceService } from '../../service/service.service';
import { MatCardLgImage } from '@angular/material/card';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arrGold = ['Gold', 'Buy', 'Sell'];
  arrCurrency = ['Currency', 'Buy', 'Sell'];

  goldPrice:any[] = [];
  currencyExchangeCenter:any[] = [];
  currencyExchangeBlackMartk:any[] = [];
  exchangeBanks :any[] = [];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.getcurrencyExchangeCenterBank();
    this.getGold();
    this.exChangeRateBanksCompont();
  }
  

  getcurrencyExchangeCenterBank():void{
    this.service.getcurrencyExchangeCenterBank().subscribe(
      data=> {
        this.currencyExchangeCenter = data;
        this.currencyExchangeBlackMartk = this.currencyExchangeCenter.slice(0,6);
      },err=>{
        console.log(err);
      })
  }

  getGold():void {
    this.service.getGold().subscribe(data=>{
      this.goldPrice = data;
    },err=>{
        console.log(err);
    });
  }

  exChangeRateBanksCompont():void{
    this.service.exChangeRateBanksCompont().subscribe(data=>{
      this.loadCountryImages(data);
      this.exchangeBanks = data;
    }, err=>{
      console.log(err);
    })
  }
  loadCountryImages(data:any): void {
    data.forEach((countryItem:any) => {
      const imageName = countryItem.iconName;
      this.checkImageExists(imageName).then(exists => {
        countryItem.imageUrl = exists ? `assets/imges/banks/${imageName}.png` : 'assets/images/placeholder.jpg';
      });
    });
  }
  
  checkImageExists(imageName: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = `assets/imges/banks/${imageName}.png`;
    });
  }
  
  
}