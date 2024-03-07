import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
interface Calculator {
  selectedValue: any;
  inputValue: number;
}

@Component({
  selector: 'app-calculator-grams',
  templateUrl: './calculator-grams.component.html',
  styleUrls: ['./calculator-grams.component.css']
})
export class CalculatorGramsComponent implements OnInit{
  calculators: Calculator[] = [{
    selectedValue: 0,
    inputValue: 1,
  }];
  goldPrice:any[] = [];
  calculateThePrice:number=0;
  isSell: boolean = false;

  constructor(private service: ServiceService){}

  ngOnInit(): void {
    this.getGold();
  }
  getGold():void {
    this.service.getGold().subscribe(data=>{
      this.goldPrice = data;
    },err=>{
        console.log(err);
    });
  }

  addCalculator() {
    this.calculators.push({ selectedValue: 0, inputValue: 1 });
  }

  removeCalculator(index: number) {
    console.log(index)
    this.calculators.splice(index, 1);
  }

  calculate() {
    this.calculateThePrice = 0;

    this.calculators.forEach(element => {
      if(element.selectedValue.buy && element.selectedValue.sell) {
      console.log("element",element)
      if (!this.isSell) {
        let buyWithOutComm = element.selectedValue.buy.replace(/,/g,'');
        let transforamToNumBuy:number = +buyWithOutComm;
        this.calculateThePrice += transforamToNumBuy * element.inputValue
      } else if(this.isSell) {
        let sellWithOutComm = element.selectedValue.sell.replace(/,/g,'');
        let transforamToNumBuy:number = +sellWithOutComm;
        this.calculateThePrice += transforamToNumBuy * element.inputValue
      } else {
        console.log("NOT FOUND")
      }
        // transformToNumber = + element.selectedValue.sell;
        // // console.log(typeof(element.inputValue))
        // this.calculateThePrice += transformToNumber * element.inputValue ;
      }
    });
  }


}
