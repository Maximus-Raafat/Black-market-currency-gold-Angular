import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GoldComponent } from './gold/gold.component';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { MarketExchangeComponent } from './market-exchange/market-exchange.component';
import { DashRoutingMoodule } from './dash-routing.module';
import { GoldCurreToCurreComponent } from './gold-curre-to-curre/gold-curre-to-curre.component';
import { AdsComponent } from './ads/ads.component';

@NgModule({
  declarations: [   
    
  
    
  
    AdsComponent
  ],
  imports: [
    CommonModule,
    DashRoutingMoodule
  ]
})
export class DashModule { }
