import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from './dashboard/service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'currency-Convert';
  
  constructor(private service:ServiceService){
  }
  ngOnInit(): void {
    // this.service.getData();
  }
}
