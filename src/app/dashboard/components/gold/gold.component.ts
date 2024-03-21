import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environments';
import { ServiceService } from '../../service/service.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { cloneDeep } from 'lodash';

interface Calculator {
  selectedValue: any;
  inputValue: number;
}
@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css']
})

export class GoldComponent implements OnInit, AfterViewInit{
  calculators: Calculator[] = [{
    selectedValue: 0,
    inputValue: 1,
  }];
  listNametranslateGold:any = ['24-krat','18-krat','goldOunce','21-krat','22-krat','goldPound','14-krat','12-krat','9-krat',];
  listNametranslateBar:any = ['0.25','0.5','1','2.5','5','10','25','50','100','1000'];
  isSell: boolean = false;
  calculateThePrice:number=0;
  imagesBase:string;  
  currentDate!: Date;
  arrGold = ['Gold', 'Buy', 'Sell'];
  goldPrice:any[] = [];
  goldPriceItems:any[] = [];

  goldPriceGrams:any[]=[];
  namesTableLabel = ['Bar','Buy','Sell'];
  karatArayNum:any = [
    "1 gram of ",
    "5 gram of ",
    "10 gram of ",
    "25 gram of ",
    "50 gram of ",
    "100 gram of ",
    "150 gram of ",
    "200 gram of ",
    "250 gram of ",
    "300 gram of ",
    "500 gram of ",
    "700 gram of ",
    "1,000 gram of "
  ];
  accessoriesPrices:any = [
    0.25,
    0.5,
    1,
    2.5,
    5,
    10,
    25,
    50,
    100,
    1000
  ]
  
    constructor(private service:ServiceService, private elementRef: ElementRef,private translate:TranslateService ){
      this.currentDate = new Date();
      this.imagesBase = environment.imageBase + 'currency/EGP.png';
    }
    ngOnInit(): void {
      this.getGold();
    }
    
    ngAfterViewInit() {   }
    
    getGold():void {
      this.service.getGold().subscribe(data=>{
        this.goldPrice = data;
        this.translateGoldname(data)
        this.changeTables(1);
      },err=>{
          console.log(err);
      });
    }
    changeTables(id:number):void{
       this.goldPrice.forEach((_itme:any)=>{
         if(id == _itme.id){
          for (let i = 0; i < 10; i++) {
            let item = { ..._itme };
            item.id = i + 1;
            delete item.imageUrl;
            delete item.iconName;

            let karatTitle = item.karat.replace(/-/g,' ')
            karatTitle = karatTitle.slice(0,8);
            item.karat = this.accessoriesPrices[i] + " gold grams bar " + karatTitle; 

            let buyWithOutComm = item.buy.replace(/,/g,'');
            let transforamToNumBuy:number = + buyWithOutComm;
            transforamToNumBuy *= this.accessoriesPrices[i] ;

            let sellWithOutComm = item.sell.replace(/,/g,'');
            let transforamToNumSell:number = + sellWithOutComm;
            transforamToNumSell *=  this.accessoriesPrices[i] ;
            
            let calculateIndex = transforamToNumSell.toString().length;
            if (calculateIndex == 4) {
              item.buy = transforamToNumBuy.toString().slice(0,1) + "," + transforamToNumBuy.toString().slice(1);
              item.sell = transforamToNumSell.toString().slice(0,1) + "," + transforamToNumSell.toString().slice(1)
            } else if (calculateIndex == 5){
              item.buy = transforamToNumBuy.toString().slice(0,2) + ","  + transforamToNumBuy.toString().slice(2);
              item.sell = transforamToNumSell.toString().slice(0,2) + "," + transforamToNumSell.toString().slice(2)
            } else if (calculateIndex == 6){
              item.buy = transforamToNumBuy.toString().slice(0,3) + ","  + transforamToNumBuy.toString().slice(3);
              item.sell = transforamToNumSell.toString().slice(0,3) + "," + transforamToNumSell.toString().slice(3);
            } else if (calculateIndex == 7){
              item.buy = transforamToNumBuy.toString().slice(0,1) + "," + transforamToNumBuy.toString().slice(0,3) + "," + transforamToNumBuy.toString().slice(4);
              item.sell = transforamToNumSell.toString().slice(0,1) + "," + transforamToNumSell.toString().slice(0,3) + ","  +  transforamToNumSell.toString().slice(4);
            } else {
              item.buy = transforamToNumBuy.toString();
              item.sell = transforamToNumSell.toString();
            }
            this.goldPriceGrams.push(item);
        }
      }
    })
    // this.translateGoldname(data)

    console.log("gold price ",this.goldPriceGrams)
    this.translateGoldnameBar(this.goldPriceGrams);
    }


    clock(){
      let time = new Date();
      let hours = time.getHours().toString();
      console.log(hours);
    }
      
    translateGoldname(data: any[]): void {
      let arrayItems: any[] = [];
      for (let i = 0; i < data.length; i++) {
          this.translate.get(`home.tableGoldKrat.${this.listNametranslateGold[i]}`).subscribe(
              (translation: any) => {
                  // Create a new object to hold the translated value
                  let newItem = { ...data[i] }; // Spread syntax to clone object
                  newItem.karat = translation;
                  arrayItems.push(newItem);
              },
              (error: any) => {
                  console.log("error from the translation Item = = = >", error);
              }
          );
      }
      this.goldPriceItems = arrayItems

    }
    translateGoldnameBar(data: any[]): void {
      let arrayItems: any[] = [];
      for (let i = 0; i < data.length ; i++) {
          this.translate.get(`gold.EgyptGoldBars&AccessoriesPrices.${this.listNametranslateBar[i]}`).subscribe(
              (translation: any) => {
                  // Create a new object to hold the translated value
                  let newItem = { ...data[i] }; // Spread syntax to clone object
                  newItem.karat = translation;
                  arrayItems.push(newItem);
              },
              (error: any) => {
                  console.log("error from the translation Item = = = >", error);
              }
          );
      }
      console.log(arrayItems)
      this.goldPriceGrams = arrayItems

    }
}
