import {NgModule}            from '@angular/core';
import {SharedModule}        from '../shared';
import {AppRoutingModule} from "../app-routing.module";
import {AdminBookingComponent} from "./booking";
import {AdminBookingSingleComponent} from "./booking/single/admin.booking.single.component";
import {AdminPasswordComponent} from "./password/admin.password.component";
import {AdminProfileComponent} from "./profile/admin.profile.component";
import {AdminMenuComponent} from "./common/admin.menu.component";

@NgModule({
    imports: [
        AppRoutingModule,
        SharedModule,
    ],
    declarations: [
        AdminBookingComponent,
        AdminBookingSingleComponent,
        AdminPasswordComponent,
        AdminProfileComponent,
        AdminMenuComponent
    ]
})
export class AdminModule {
}
