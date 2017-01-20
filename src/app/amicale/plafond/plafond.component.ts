import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../shared/services/login.service";
import {AmicaleService} from "../../shared/services/amicale.service";


@Component({
    templateUrl: "plafond.html"
})

export class PlafondComponent implements OnInit {


    private loading: boolean;
    private data: any;

    constructor(private loginService: LoginService, private amicaleService: AmicaleService) {
    }


    ngOnInit() {
        this.loginService.verifUserLogged();
        this.loading = true;
        this.amicaleService.getStat().subscribe(response => {
            if (response.status == "success") {
                this.data = response.data;
                this.loading = false;
            }
            else
                alert(response.msg);
        });
    }
}