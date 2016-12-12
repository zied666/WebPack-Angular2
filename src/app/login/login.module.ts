import {NgModule}           from '@angular/core';
import {SharedModule}       from '../shared/shared.module';
import {LoginComponent} from "./login.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ProfileComponent} from "./profile/profile.component";
import {ReCaptchaModule} from "angular2-recaptcha";
import {LoginService} from "./login.service";


@NgModule({
    imports: [SharedModule, FormsModule, HttpModule, ReCaptchaModule],
    declarations: [LoginComponent, ProfileComponent],
    providers: [LoginService]
})


export class LoginModule {
}