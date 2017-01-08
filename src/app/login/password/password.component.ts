import {Component, OnInit, trigger, state, transition, style, animate}      from '@angular/core';
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {LoginService} from "../../shared/services/login.service";

@Component({
    styleUrls: ['../form.css'],
    templateUrl: './password.html',
    animations: [
        trigger('errorMessage', [
            state("true", style({opacity: 0, display: "none"})),
            state("false", style({opacity: 1, display: "block"})),
            transition('1 => 0', animate('.5s'))
        ])
    ]
})
export class PasswordComponent implements OnInit {

    currentPassword: string;
    newPassword: string;
    confirmationPassword: string;
    success: boolean;
    error: boolean;
    error2: boolean;
    loading: boolean;

    constructor(private loginService: LoginService, private router: Router, private titleService: Title) {
        this.titleService.setTitle("Password");
        if (this.loginService.logedUser == null)
            this.router.navigateByUrl('login');
        this.currentPassword = "";
        this.newPassword = "";
        this.confirmationPassword = "";
    }


    ngOnInit() {
    }

    update() {
        if (this.newPassword == this.confirmationPassword) {
            this.loading=true;
            this.loginService.updatePassword(this.currentPassword, this.newPassword).subscribe(response => {
                if (response.status == "succes") {
                    this.success = true;
                    setTimeout(() => this.success = false, 3000);
                }
                else {
                    this.error2 = true;
                    setTimeout(() => this.error2 = false, 3000);
                }
                this.loading=false;
            });
        } else {
            this.error = true;
            setTimeout(() => this.error = false, 3000);
        }

    }


}

