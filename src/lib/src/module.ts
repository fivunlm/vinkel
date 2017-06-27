import { NgModule } from '@angular/core';

import { VinkelDummyComponent } from './component/dummy.component';
import { LibService } from './service/lib.service';

@NgModule({
  declarations: [VinkelDummyComponent],
  providers: [LibService],
  exports: [VinkelDummyComponent]
})
export class VinkelModule { }
