import {NgModule}           from '@angular/core';
import {SharedModule}       from '../shared';
import {LoginComponent} from "./login.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ProfileComponent} from "./profile/profile.component";
import {ReCaptchaModule} from "angular2-recaptcha";


@NgModule({
    imports: [SharedModule, FormsModule, HttpModule, ReCaptchaModule],
    declarations: [LoginComponent, ProfileComponent],
})


export class LoginModule {
}