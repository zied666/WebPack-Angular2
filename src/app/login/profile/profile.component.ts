import {Component, OnInit}      from '@angular/core';
import {LoginService} from "../login.service";
import {User} from "../user";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../shared/services/localStorage.service";
import {Title} from "@angular/platform-browser";

@Component({
    styleUrls: ['../form.css'],
    templateUrl: './profile.html'
})
export class ProfileComponent implements OnInit {

    logedUser: User = null;
    success: boolean;

    constructor(private loginService: LoginService, private router: Router, private titleService: Title) {
        this.titleService.setTitle("Profile");
    }


    ngOnInit() {
        this.success = false;
        if (this.loginService.logedUser == null)
            this.router.navigateByUrl('login');
        this.logedUser = Object.assign({}, this.loginService.logedUser);
    }

    update() {
        this.success = true;
        this.loginService.logedUser = Object.assign({}, this.logedUser);
        LocalStorageService.setItem("currentUser", this.logedUser);
        setTimeout(() => this.success = false, 3000);
    }


}

