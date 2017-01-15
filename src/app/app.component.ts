import {Component, OnInit} from '@angular/core';
import {LoginService} from "./shared/services/login.service";
import {LocalStorageService} from "./shared/services/localStorage.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

    constructor(private loginService: LoginService) {

    }

    ngOnInit() {

        if (LocalStorageService.getItem("currentUser"))
            this.loginService.logedUser = LocalStorageService.getItem("currentUser");

    }
}