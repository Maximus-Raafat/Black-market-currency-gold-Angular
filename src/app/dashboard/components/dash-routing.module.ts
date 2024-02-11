import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { MarketExchangeComponent } from './market-exchange/market-exchange.component';
import { GoldComponent } from './gold/gold.component';
import { GoldCurreToCurreComponent } from './gold-curre-to-curre/gold-curre-to-curre.component';
const routes: Routes = [ 
   
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashRoutingMoodule{}