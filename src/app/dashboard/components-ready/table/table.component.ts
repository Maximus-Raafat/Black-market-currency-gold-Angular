import { state } from '@angular/animations';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { LangService } from 'src/app/langService/lang.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges{
private languageChangeSubscription!:Subscription;
[x: string]: any;
listNametranslate:any = ['24-krat','18-krat','goldOunce','21-krat','22-krat','goldPound','14-krat','12-krat','9-krat',];
@Input() namesTableLable = ['Currency','Buy','Sell'];
@Input() nameOfFolder:any;
@Input() itemsTable:any;

constructor(private router: Router,private translate: TranslateService)
{


}

ngOnInit(): void { 
  this.translateLabelsNamesTable();


}

ngOnChanges(changes: SimpleChanges): void {
  if (changes['itemsTable'] && changes['itemsTable'].currentValue) {

    this.loadCountryImages(); 
  
  }
}

loadCountryImages(): void {
  this.itemsTable.forEach((countryItem:any) => {
    if (countryItem.iconName) {
      const imageName = countryItem.iconName;
      this.checkImageExists(imageName).then(exists => {
        countryItem.imageUrl = exists ? `assets/imges/${this.nameOfFolder}/${imageName}.png` : 'assets/images/placeholder.jpg';
      });
    } else {
      console.log("Dont have Value");
    }
  });
}

checkImageExists(imageName: string): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = `assets/imges/${this.nameOfFolder}/${imageName}.png`;
  });
}
 navigateToDetails(data:any){
  console.log("data before navigate",this.itemsTable); 
  const combinedObjects = { param1: data, param2: this.itemsTable };
  const id : number = +data.id;
  this.router.navigate(['/dashboard/goldCurreToCurre',id], { state: { data: combinedObjects } });
}
translateLabelsNamesTable(): void {
  let array:any = [];
  this.namesTableLable.forEach(key => {
    this.translate.get(`home.${key}`).subscribe(
      (translation: any) => {
        array.push(translation);
      },
      (error: any) => {
        console.error("Translation error:", error);
      }
    );
  });
  this.namesTableLable = array;
}

translateLabelsItem(): void {
  // let array:any = [];
  console.log("listNametranslate",this.listNametranslate)
  for (let i = 0; i < this.listNametranslate.length; i++) {

    this.translate.get(`home.tableGoldKrat.${this.listNametranslate[i]}`).subscribe(
      (translation:any)=>{
        if (this.itemsTable[i].karat) {
          this.itemsTable[i].karat = translation;
        }
      },
      (error:any)=>{
        console.log("error form the translation Item = = = >",error)
      }
    )
    
  }
}
hasImage(): boolean {
  return this.itemsTable.some((item:any) => !!item.imageUrl);
}

}
