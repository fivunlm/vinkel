import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotificationDemoComponent} from "./notification/notification-demo.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'notification', component: NotificationDemoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

