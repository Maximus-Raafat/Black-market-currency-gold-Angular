import { state } from '@angular/animations';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges{
[x: string]: any;
@Input() namesTableLable = ['Currency','BuY','Sell'];
@Input() nameOfFolder:any;
@Input() itemsTable:any;

constructor(private router: Router) {}

ngOnInit(): void { }

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




}
