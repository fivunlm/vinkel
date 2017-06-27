import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VinkelModule } from 'vinkel';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, VinkelModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
