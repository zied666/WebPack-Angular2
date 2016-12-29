import {NgModule}             from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./login/profile";
import {HotelListComponent} from "./hotel/list";
import {HotelDetailComponent} from "./hotel/details";
import {ReservationComponent} from "./hotel/reservation";

export const routes: Routes = [
    {path: '', component: HotelListComponent},
    {path: 'reservation/:id', component: ReservationComponent},
 //   {path: 'hotel/:id', component: HotelDetailComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
