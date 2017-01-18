import {Component, OnInit}      from '@angular/core';
import {LoginService} from "../../shared/services/login.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: './menu.html',
    selector:'admin-amicale-menu'
})
export class AdminMenuComponent implements OnInit {

    ngOnInit() {

    }
    constructor(private loginService: LoginService, private router: Router) {
    }
}

