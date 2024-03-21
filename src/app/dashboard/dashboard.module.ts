import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingMoodule } from './dashboard-routing.moudle';
import { MaterialModule } from '../material/material.module';
import { NgApexchartsModule } from "ng-apexcharts";

// Import your components
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { GoldComponent } from './components/gold/gold.component';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
import { MarketExchangeComponent } from './components/market-exchange/market-exchange.component';
import { CalculatorComponent } from './components-ready/calculator/calculator.component';
import { TableComponent } from './components-ready/table/table.component';
import { EgExchangeRateAtAllBanksComponent } from './components-ready/eg-exchange-rate-at-all-banks/eg-exchange-rate-at-all-banks.component';
import { FooterComponent } from './components-ready/footer/footer.component';
import { GoldCurreToCurreComponent } from './components/gold-curre-to-curre/gold-curre-to-curre.component';
import { AdsComponent } from './components/ads/ads.component';
import { CalculatorGramsComponent } from './components-ready/calculator-grams/calculator-grams.component';

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
    FooterComponent,
    GoldCurreToCurreComponent,
    AdsComponent,
    CalculatorGramsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule, // Import SharedModule for translation setup
    FormsModule,
    DashboardRoutingMoodule,
    MaterialModule,
    NgApexchartsModule,
  ]
})
export class DashboardModule { }
