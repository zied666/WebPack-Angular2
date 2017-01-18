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

@NgModule({
    imports: [
        SharedModule,
        InfiniteScrollModule,
    ],
    declarations: [
        SettingsComponent,PlafondComponent,MenuComponent,MargeComponent,ReservationComponent
    ]
})
export class AmicaleModule {
}
