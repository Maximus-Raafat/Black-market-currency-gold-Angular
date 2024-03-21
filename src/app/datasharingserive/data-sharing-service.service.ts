import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingServiceService {
  private dataArray:any=[]=[];
  constructor() { }


  setData(data:any[]){
    this.dataArray = data;
  }
  getData(){
    console.log("currencyExchangeCenter= = == = = = = = ",this.dataArray)
    return this.dataArray;
  }
}
