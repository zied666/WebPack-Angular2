import {NgModule}             from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileComponent} from "./login/profile";
import {HotelListComponent} from "./hotel/list";
import {HotelDetailComponent} from "./hotel/details";
import {HotelBookingComponent} from "./hotel/booking";
import {PasswordComponent} from "./login/password";
import {LoginComponent} from "./login/login/login.component";
import {ContactComponent} from "./login/contact/contact.component";
import {AdminBookingComponent} from "./admin/booking/admin.booking.component";
import {TranslateService} from "ng2-translate";
import {LoginService} from "./shared/services/login.service";
import {PlafondComponent} from "./amicale/plafond/plafond.component";
import {AmicaleComponent} from "./amicale/default/amicale.component";
import {SettingsComponent} from "./amicale/settings/settings.component";
import {MargeComponent} from "./amicale/marge/marge.component";
import {ReservationComponent} from "./amicale/reservations/reservation.component";

export const routes: Routes = [
    {path: '', component: HotelListComponent},
    {path: 'hotel/:id', component: HotelDetailComponent},
    {path: 'booking', component: HotelBookingComponent},
    {path: 'mybookings', component: AdminBookingComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'password', component: PasswordComponent},
    {path: 'password', component: PasswordComponent},
    {
        path: 'amicale',
        children: [
            {path: '', component: PlafondComponent},
            {path: 'settings', component: SettingsComponent},
            {path: 'marge', component: MargeComponent},
            {path: 'bookings', component: ReservationComponent},
        ]
    },
    {path: 'contact', component: ContactComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
