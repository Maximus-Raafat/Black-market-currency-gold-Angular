import { Component } from '@angular/core';
import { count } from 'rxjs';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent {
  imagesBase:string;
  
currentDate!: Date;
  constructor(){
    this.currentDate = new Date();
    this.imagesBase = environment.imageBase + 'banks/ECBA.png';
  }

  clock(){
    let time = new Date();
    let hours = time.getHours().toString();

    console.log(hours);
  }

}
