import {NgModule}            from '@angular/core';
import {SharedModule}        from '../shared';
import {AppRoutingModule} from "../app-routing.module";
import {AdminBookingComponent} from "./booking";
import {AdminBookingSingleComponent} from "./booking/single/admin.booking.single.component";

@NgModule({
    imports: [
        AppRoutingModule,
        SharedModule,
    ],
    declarations: [
        AdminBookingComponent,
        AdminBookingSingleComponent
    ]
})
export class AdminModule {
}
