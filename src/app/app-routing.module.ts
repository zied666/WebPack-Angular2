import {NgModule}             from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileComponent} from "./login/profile";
import {HotelListComponent} from "./hotel/list";
import {HotelDetailComponent} from "./hotel/details";
import {HotelBookingComponent} from "./hotel/booking";
import {PasswordComponent} from "./login/password";
import {LoginComponent} from "./login/login/login.component";
import {ContactComponent} from "./login/contact/contact.component";

export const routes: Routes = [
    {path: '', component: HotelListComponent},
    {path: 'hotel/:id', component: HotelDetailComponent},
    {path: 'booking', component: HotelBookingComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'password', component: PasswordComponent},
    {path: 'contact', component: ContactComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
