import {NgModule}             from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./login/profile";
import {HotelListComponent} from "./hotel/list";
import {HotelDetailComponent} from "./hotel/details";
import {HotelBookingComponent} from "./hotel/booking";

export const routes: Routes = [
    {path: '', component: HotelListComponent},
    {path: 'hotel/:id', component: HotelDetailComponent},
    {path: 'booking', component: HotelBookingComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
