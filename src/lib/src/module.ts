import {NgModule} from '@angular/core';

import {VinkelDummyComponent} from './component/dummy.component';
import {LibService} from './service/lib.service';
import {VnkNotificationComponent} from './notification/vnk-notification.component';
import {CommonModule} from '@angular/common';
import {VnkNotificationService} from './service/vnk-notification.service';
import {VnkProgressBarComponent} from "./progress/vnk-progress-bar.component";
import {VnkDropZoneDirective} from "./directives/drop-zone/vnk-drop-zone.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VinkelDummyComponent,
    VnkNotificationComponent,
    VnkProgressBarComponent,
    VnkDropZoneDirective
  ],
  providers: [
    LibService,
    VnkNotificationService,
  ],
  exports: [
    VinkelDummyComponent,
    VnkNotificationComponent,
    VnkProgressBarComponent,
    VnkDropZoneDirective
  ]
})
export class VinkelModule {
}
