import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VinkelModule } from 'vinkel';

import { AppComponent }  from './app.component';
import {NotificationDemoComponent} from "./notification/notification-demo.component";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./home/home.component";

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    VinkelModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotificationDemoComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
