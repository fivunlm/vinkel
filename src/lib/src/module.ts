import {NgModule} from '@angular/core';

import {VinkelDummyComponent} from './component/dummy.component';
import {LibService} from './service/lib.service';
import {VnkNotificationComponent} from './notification/vnk-notification.component';
import {CommonModule} from '@angular/common';
import {VnkNotificationService} from './service/vnk-notification.service';
import {VnkProgressBarComponent} from "./progress/vnk-progress-bar.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VinkelDummyComponent,
    VnkNotificationComponent,
    VnkProgressBarComponent
  ],
  providers: [
    LibService,
    VnkNotificationService,
  ],
  exports: [
    VinkelDummyComponent,
    VnkNotificationComponent,
    VnkProgressBarComponent
  ]
})
export class VinkelModule {
}
