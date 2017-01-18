import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../shared/services/login.service";
import {AmicaleService} from "../../shared/services/amicale.service";


@Component({
    templateUrl: "plafond.html"
})

export class PlafondComponent implements OnInit {


    private loading:boolean;
    private amicale:any;

    constructor(private loginService: LoginService,private amicaleService:AmicaleService) {
    }


    ngOnInit() {
        this.loginService.verifUserLogged();
        this.loading=true;
        this.amicaleService.getAmicale().subscribe(response => {
            if(response && !response.status)
            {
                this.amicale=response;
                this.loading=false;
            }
        });
    }
}