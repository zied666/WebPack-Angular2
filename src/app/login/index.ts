import {NgModule}           from '@angular/core';
import {SharedModule}       from '../shared';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ReCaptchaModule} from "angular2-recaptcha";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ContactComponent} from "./contact/contact.component";
import {AmicaleComponent} from "./amicale/amicale.component";


@NgModule({
    imports: [SharedModule, FormsModule, HttpModule, ReCaptchaModule],
    declarations: [LoginComponent, RegisterComponent, ContactComponent],
})


export class LoginModule {
}