import {Component, OnInit}      from '@angular/core';
import {User} from "../user";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../shared/services/localStorage.service";
import {Title} from "@angular/platform-browser";
import {LoginService} from "../../shared/services/login.service";

@Component({
    styleUrls: ['../form.css'],
    templateUrl: './profile.html'
})
export class ProfileComponent implements OnInit {

    logedUser: User = null;
    success: boolean;
    error: boolean;
    loading: boolean;

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
        this.loading=true;
        this.loginService.update(this.logedUser).subscribe(response => {
            if(response.status=="success")
            {
                this.loginService.logedUser = Object.assign({}, this.logedUser);
                LocalStorageService.setItem("currentUser", this.logedUser);
                this.success = true;
                setTimeout(() => this.success = false, 3000);
            }
            else
            {
                this.error=true;
                setTimeout(() => this.error = false, 3000);
            }
            this.loading=false;
        });

    }


}

