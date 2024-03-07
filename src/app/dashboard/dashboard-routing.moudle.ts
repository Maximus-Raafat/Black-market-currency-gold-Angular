import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
import { GoldComponent } from './components/gold/gold.component';
import { MarketExchangeComponent } from './components/market-exchange/market-exchange.component';
import { GoldCurreToCurreComponent } from './components/gold-curre-to-curre/gold-curre-to-curre.component';
const routes: Routes = [ 

    {
        path: "",
        component: LayoutComponent,
        children: [
          {path:"home",component:HomeComponent},
          {path:"gold",component:GoldComponent},
          {path:'goldCurreToCurre/:id', component: GoldCurreToCurreComponent },
          {path:"exchange-rate",component:ExchangeRateComponent},
          {path:"markt-exchange",component:MarketExchangeComponent},
        ]
      }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingMoodule{}