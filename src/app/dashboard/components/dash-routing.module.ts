import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { MarketExchangeComponent } from './market-exchange/market-exchange.component';
import { GoldComponent } from './gold/gold.component';
const routes: Routes = [ 
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'exchange-rate',
        component:ExchangeRateComponent
    },
    {
        path:'markt-exchange',
        component:MarketExchangeComponent
    },
    {
        path:'gold',
        component:GoldComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashRoutingMoodule{}