import {NgModule}            from '@angular/core';
import {SharedModule}        from '../shared';
import {InfiniteScrollModule} from 'angular2-infinite-scroll';
import {SettingsComponent} from "./settings/settings.component";
import {AmicaleRoutingModule} from "./amicale.routing.module";
import {PlafondComponent} from "./plafond/plafond.component";
import {MenuComponent} from "./common/menu.component";
import {RouterModule} from "@angular/router";
import {MargeComponent} from "./marge/marge.component";
import {ReservationComponent} from "./reservations/reservation.component";
import {ReservationSingleComponent} from "./reservations/single/reservation.single.component";
import {AmicaleClientsComponent} from "./clients/amicale.clients.component";
import {AmicaleClientComponent} from "./clients/amicale.client.component";
import {AmicaleAddclientComponent} from "./newClient/amicale.addclient.component";
import {AmicaleUpdateClientComponent} from "./updateClient/amicale.update.client.component";
import {AmicaleUpdateProfileClientComponent} from "./updateClient/tabs/profile/amicale.update.profile.client.component";
import {AmicaleUpdateEmailClientComponent} from "./updateClient/tabs/email/amicale.update.email.client.component";
import {AmicaleUpdatePasswordClientComponent} from "./updateClient/tabs/password/amicale.update.password.client.component";

@NgModule({
    imports: [
        SharedModule,
        InfiniteScrollModule,
    ],
    declarations: [
        SettingsComponent,
        PlafondComponent,
        MenuComponent,
        MargeComponent,
        ReservationComponent,
        ReservationSingleComponent,
        AmicaleClientsComponent,
        AmicaleClientComponent,
        AmicaleAddclientComponent,
        AmicaleUpdateClientComponent,
        AmicaleUpdateProfileClientComponent,
        AmicaleUpdateEmailClientComponent,
        AmicaleUpdatePasswordClientComponent
    ]
})
export class AmicaleModule {
}
