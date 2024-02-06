import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GoldComponent } from './gold/gold.component';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { MarketExchangeComponent } from './market-exchange/market-exchange.component';
import { DashRoutingMoodule } from './dash-routing.module';

@NgModule({
  declarations: [   
  
  ],
  imports: [
    CommonModule,
    DashRoutingMoodule
  ]
})
export class DashModule { }
