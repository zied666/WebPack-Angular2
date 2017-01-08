import {Component, OnInit, ViewChild, trigger, state, transition, style, animate}      from '@angular/core';
import {LoginService} from "../../shared/services/login.service";
import {ReCaptchaComponent} from "angular2-recaptcha/lib/captcha.component";

@Component({
    templateUrl: './register.html',
    styleUrls: ['../form.css'],
    selector: 'login-register',
    animations: [
        trigger('errorMessage', [
            state("true", style({opacity: 0, display: "none"})),
            state("false", style({opacity: 1, display: "block"})),
            transition('1 => 0', animate('.5s'))
        ])
    ]
})
export class RegisterComponent implements OnInit {


    @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;
    token: string;

    loading: boolean;
    captchaError: boolean;
    success: boolean;
    name: string;
    email: string;
    password: string;

    constructor(private loginService: LoginService) {
    }


    ngOnInit() {
        this.token = null;
        this.loading = false;
        this.success = false;
        this.captchaError = false;
    }

    handleCorrectCaptcha($event) {
        this.token = $event;
    }


    register() {
        if (this.token) {
            this.loading = true;
            this.loginService.register(this.name, this.email, this.password).subscribe(response => {
                if (response.status == 'success')
                    this.success = true;
                this.loading = false;
            });
        } else {
            this.captchaError = true;
            setTimeout(() => this.captchaError = false, 3000);
        }
    }


}

