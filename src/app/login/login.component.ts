import {Component, OnInit, animate, transition, trigger, state, style, ViewChild,}      from '@angular/core';
import {Router} from "@angular/router";
import {LocalStorageService} from "../shared/services/localStorage.service";
import {ReCaptchaComponent} from "angular2-recaptcha/lib/captcha.component";
import {Title} from "@angular/platform-browser";
import {LoadingService} from "../shared/services/loading.service";
import {Config} from "../shared/config/config";
import {LoginService} from "../shared/services/login.service";

@Component({
    templateUrl: './login.html',
    styleUrls: ['form.css'],
    animations: [
        trigger('errorMessage', [
            state("true", style({opacity: 0, display: "none"})),
            state("false", style({opacity: 1, display: "block"})),
            transition('1 => 0', animate('.5s'))
        ])
    ]
})
export class LoginComponent implements OnInit {

    @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;
    token: string;
    login: String;
    password: String;
    loading: boolean;
    error: boolean;
    captchaError: boolean;
    config= Config;

    constructor(private loginService: LoginService, private router: Router, private  titleService: Title,private loadingService : LoadingService) {
        this.titleService.setTitle("Login");
    }


    handleCorrectCaptcha($event) {
        this.token = $event;
    }

    ngOnInit() {
        this.token = null;
        this.captchaError = false;
        this.error = false;
        this.loading = false;
        this.login = "";
        this.password = "";
        if (this.loginService.logedUser != null)
            this.router.navigateByUrl('/');
    }

    onSubmit() {
       /* if (this.token) {*/
            this.loading = true;
            this.loadingService.start();
            this.loginService.connection(this.login, this.password).subscribe(response => {
                if (response.data != null) {
                    this.loginService.logedUser = response.data;
                    this.router.navigateByUrl('/');
                    LocalStorageService.setItem("currentUser", response.data);
                }
                else {
                    this.error = true;
                    this.loading = false;
                    setTimeout(() => this.error = false, 3000);
                }
                this.loadingService.end();
            });
       /* } else {
            this.captchaError = true;
            setTimeout(() => this.captchaError = false, 3000);
        }*/
    }


}

