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
import {AdminProfileComponent} from "./admin/profile/admin.profile.component";
import {AdminPasswordComponent} from "./admin/password/admin.password.component";
import {AmicaleClientsComponent} from "./amicale/clients/amicale.clients.component";
import {AmicaleAddclientComponent} from "./amicale/newClient/amicale.addclient.component";

export const routes: Routes = [
    {path: '', component: HotelListComponent},
    {path: 'hotel/:id', component: HotelDetailComponent},
    {path: 'booking', component: HotelBookingComponent},
    {path: 'login', component: LoginComponent},
    {
        path: 'amicale',
        children: [
            {path: '', component: PlafondComponent},
            {path: 'settings', component: SettingsComponent},
            {path: 'marge', component: MargeComponent},
            {path: 'bookings', component: ReservationComponent},
            {path: 'clients', component: AmicaleClientsComponent},
            {path: 'newClient', component: AmicaleAddclientComponent},
        ]
    },
    {
        path: 'profile',
        children: [
            {path: '', component: AdminProfileComponent},
            {path: 'password', component: AdminPasswordComponent},
            {path: 'bookings', component: AdminBookingComponent},
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
