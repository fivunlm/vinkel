import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotificationDemoComponent} from './notification/notification-demo.component';
import {HomeComponent} from './home/home.component';
import {ProgressDemoComponent} from "./progress/progress-demo.component";
import {DropZoneDemoComponent} from "./drop-zone/drop-zone-demo.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'notification', component: NotificationDemoComponent},
  {path: 'progress', component: ProgressDemoComponent},
  {path: 'drop-zone', component: DropZoneDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

