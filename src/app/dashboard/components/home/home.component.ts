import { Component } from '@angular/core';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imagesBase!:string;
  constructor(){
  this.imagesBase = environment.imageBase + 'banks/ECBA.png';

  }
}
