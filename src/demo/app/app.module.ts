import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {VinkelModule} from 'vinkel';
import {FormsModule} from '@angular/forms';
import {AppComponent}  from './app.component';
import {NotificationDemoComponent} from './notification/notification-demo.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {ProgressDemoComponent} from "./progress/progress-demo.component";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    VinkelModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotificationDemoComponent,
    ProgressDemoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
