import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { DashboardRoutingMoodule } from './dashboard-routing.moudle';
import { HomeComponent } from './components/home/home.component';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
import { MarketExchangeComponent } from './components/market-exchange/market-exchange.component';
import { GoldComponent } from './components/gold/gold.component';
import { CalculatorComponent } from './components-ready/calculator/calculator.component';
import { TableComponent } from './components-ready/table/table.component';
import { EgExchangeRateAtAllBanksComponent } from './components-ready/eg-exchange-rate-at-all-banks/eg-exchange-rate-at-all-banks.component';
import { FooterComponent } from './components-ready/footer/footer.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    GoldComponent,
    ExchangeRateComponent,
    MarketExchangeComponent,
    CalculatorComponent,
    TableComponent,
    EgExchangeRateAtAllBanksComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingMoodule,
    
  ]
})
export class DashboardModule { }
