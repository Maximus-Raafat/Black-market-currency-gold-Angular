import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule , } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { TranslateService } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,

  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]})
export class AppModule { }
