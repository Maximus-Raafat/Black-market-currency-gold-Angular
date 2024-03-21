import { Component, OnChanges, OnInit, SimpleChanges  } from '@angular/core';
import { environment } from 'src/environments/environments';
import { ServiceService } from '../../service/service.service';
import { MatCardLgImage } from '@angular/material/card';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/app/langService/lang.service';
import { ActivatedRoute, Router } from '@angular/router';
import { cloneDeep } from 'lodash';
import { DataSharingServiceService } from 'src/app/datasharingserive/data-sharing-service.service';
@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arrGold = ['Gold', 'Buy', 'Sell'];
  arrCurrency = ['Currency', 'Buy', 'Sell'];
  listNametranslateGold:any = ['24-krat','18-krat','goldOunce','21-krat','22-krat','goldPound','14-krat','12-krat','9-krat',];
  listNametranslateCurrancy:any = ['Us','Sa','Eur','UAE','KUW','PoundSterling','Oma','QAT','Can','jor','Aus','Bah','Swi','Ja','Swe','Dan','Nor'];
  listNamesBank:any = ['blackMarket','CentralBankSofEgypt','NationalBanksOfEgypt','BanqueMisr','AbuDhabiIslamicBank','BanqueDuCairo','BankOfAlexandria','CreditAgricole','EgyptianGulfBank','CIBBank','QNBBank','AlAlhiBankKuwait','BlomBank','ArabInvestemntBank','BlomBank','HSBCBank','ALBarakaBank','ArabInterninatlBank','NationalBankOfKuwait','SuezCanalBank','EgyptionArabLandBank','TheunitedBank','NationalBankOfGreeceEgypt','SAIBBank','InduestrailDevelopmentBank',];
  goldPrice:any[] = [];
  currencyExchangeCenter:any[] = [];
  currencyExchangeBlackMartk:any[] = [];
  exchangeBanks :any[] = [];

  constructor(private service: ServiceService,
    private translate: TranslateService,
    private langService:LangService,
    private route: ActivatedRoute,
    private router:Router,
    private serviceDataShar:DataSharingServiceService) { 

    }

  ngOnInit(): void {
    this.exChangeRateBanksCompont();
    this.getGold();
    this.getcurrencyExchangeCenterBank();
    // this.route.data.subscribe(data => {
    //   const translations = data['translations'];
    //   console.log(translations);
    // });
  }

  getcurrencyExchangeCenterBank():void{
    this.service.getcurrencyExchangeCenterBank().subscribe(
      data=> {
       // const clonedData = cloneDeep(data);
        this.translateLabelsCurrany(data)
        this.currencyExchangeCenter = data;
        this.serviceDataShar.setData(this.currencyExchangeCenter);

        this.currencyExchangeBlackMartk = this.currencyExchangeCenter.slice(0,6);
      },err=>{
        console.log(err);
      })

  }

  getGold():void {
    this.service.getGold().subscribe(data=>{
      this.goldPrice = data;
      this.translateLabelsItemGold();

    },err=>{
        console.log(err);
    });
  }

  exChangeRateBanksCompont():void{
    this.service.exChangeRateBanksCompont().subscribe(data=>{
      this.loadCountryImages(data);
      this.translateCardsBank(data);
      this.exchangeBanks = data;
     

    }, err=>{
      console.log(err);
    })
  }
  loadCountryImages(data:any): void {
    data.forEach((countryItem:any) => {
      const imageName = countryItem.iconName;
      this.checkImageExists(imageName).then(exists => {
        countryItem.imageUrl = exists ? `assets/imges/banks/${imageName}.png` : 'assets/images/placeholder.jpg';
      });
    });
  }
  
  checkImageExists(imageName: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = `assets/imges/banks/${imageName}.png`;
    });
  }
  
  translateLabelsItemGold(): void {
    for (let i = 0; i < this.goldPrice.length; i++) {
      this.translate.get(`home.tableGoldKrat.${this.listNametranslateGold[i]}`).subscribe(
        (translation:any)=>{
         
          if (this.goldPrice[i].karat) {
            this.goldPrice[i].karat = translation;
          }
        },
        (error:any)=>{
          console.log("error form the translation Item = = = >",error)
        }
        )
      }
  }
  translateLabelsCurrany(data:any): void {
    for (let i = 0; i < data.length - 1; i++) {
      this.translate.get(`home.tableCentralBank.${this.listNametranslateCurrancy[i]}`).subscribe(
        (translation:any)=>{
          data[i].currency = translation;
        },
        (error:any)=>{
          console.log("error form the translation Item = = = >",error)
        }
        )
      }
  }
  translateCardsBank(data:any): void {
    for (let i = 0; i < data.length; i++) {
      this.translate.get(`home.tableNamesBank.${this.listNamesBank[i]}`).subscribe(
        (translation:any)=>{
          // console.log(data)
          data[i].namesBank = translation;
        },
        (error:any)=>{
          console.log("error form the translation Item = = = >",error)
        }
        )
      }
  }
}