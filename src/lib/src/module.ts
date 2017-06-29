import {NgModule} from '@angular/core';

import {VinkelDummyComponent} from './component/dummy.component';
import {LibService} from './service/lib.service';
import {VnkNotificationComponent} from './notification/vnk-notification.component';
import {CommonModule} from '@angular/common';
import {VnkNotificationService} from './service/vnk-notification.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VinkelDummyComponent,
    VnkNotificationComponent,
  ],
  providers: [
    LibService,
    VnkNotificationService,
  ],
  exports: [
    VinkelDummyComponent,
    VnkNotificationComponent
  ]
})
export class VinkelModule {
}
