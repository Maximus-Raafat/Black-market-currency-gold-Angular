import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { DashboardRoutingMoodule } from './dashboard-routing.moudle';
import { HomeComponent } from './components/home/home.component';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
import { MarketExchangeComponent } from './components/market-exchange/market-exchange.component';
import { GoldComponent } from './components/gold/gold.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    GoldComponent,
    ExchangeRateComponent,
    MarketExchangeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingMoodule,
    
  ]
})
export class DashboardModule { }
