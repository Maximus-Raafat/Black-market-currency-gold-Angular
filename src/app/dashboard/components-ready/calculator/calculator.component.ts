import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  selectedValueFrom:string;
  selectedValueTo:string;
  multiplicationCurrany:any;
  previousInputFrom: any;
  inputFrom:any = 1;
  inputTo:any = 3.75;
  currencyItem:any;
  constructor(private service : ServiceService){
    this.selectedValueFrom = 'USD';
    this.selectedValueTo = 'SAR';
  }

  ngOnInit() : void{
    this.service.getcurrencyExchangeCenterBank().subscribe((res:any)=>{
      this.currencyItem = res;
    })
    this.previousInputFrom = this.inputFrom;
  }

  changeTheCurrency(): void{
    [this.selectedValueTo, this.selectedValueFrom] = [this.selectedValueFrom,this.selectedValueTo];
    this.checkValueFrom();
  }
  
  checkValueFrom():void {
    let selectedValueFrom = 0;
    let selectedValueTo = 0
    let inputFrom = this.inputFrom;
    
    let count = 0;
    for (let i = 0; i < this.currencyItem.length; i++) {
      const element = this.currencyItem[i];
      if (this.selectedValueFrom === element.iconName) {
        selectedValueFrom = element.buy;
        count++;
      }
      if (this.selectedValueTo === element.iconName) {
        selectedValueTo = element.buy;
        count++;
      }
      if (count === 2) {
        break;
      }
    }
    if(this.inputFrom){
      if(+selectedValueFrom > +selectedValueTo){
        console.log("ITS RUN1")
          let number = (selectedValueFrom / selectedValueTo);
          let ditalNumber = number.toFixed(3);
          this.inputTo = this.inputFrom * +ditalNumber;
      } else {
        console.log("ITS RUN2")
        let number = selectedValueFrom / selectedValueTo;
        let ditalNumber = number.toFixed(3);
        this.inputTo = +ditalNumber * this.inputFrom;
      }
      } 
    // second condtion for if input to is change the value 
  }
  
  checkValueTo():void {
    let selectedValueFrom = 0;
    let selectedValueTo = 0
    
    let count = 0;
    for (let i = 0; i < this.currencyItem.length; i++) {
      const element = this.currencyItem[i];
      if (this.selectedValueFrom === element.iconName) {
        selectedValueFrom = element.buy;
        count++;
        console.log(this.selectedValueFrom, element.buy )
      }
      if (this.selectedValueTo === element.iconName) {
        selectedValueTo = element.buy;
        count++;
      }
      if (count === 2) {
        break;
      }
    }
  
      if(+selectedValueFrom < +selectedValueTo){
        console.log("ITS RUN3")
          let number = (selectedValueFrom / selectedValueTo);
          let ditalNumber = number.toFixed(3);
          this.inputFrom = this.inputTo * +ditalNumber;
      } else {
        console.log("ITS RUN4")
        let number = selectedValueTo / selectedValueFrom;
        let ditalNumber = number.toFixed(3);
        this.inputFrom = +ditalNumber * this.inputTo;
    }
  }
}
