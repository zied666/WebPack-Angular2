import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../shared/services/login.service";
import {AmicaleService} from "../../shared/services/amicale.service";


@Component({
    templateUrl: "clients.html"
})

export class AmicaleClientsComponent implements OnInit {


    private loading:boolean;
    private clients:any[];

    constructor(private loginService: LoginService,private amicaleService:AmicaleService) {
    }


    ngOnInit() {
        this.loginService.verifUserLogged();
        this.loading=true;
        this.amicaleService.getClients().subscribe(clients => {
            if(clients && !clients.status)
            {
                this.clients=clients;
                this.loading=false;
            }
        });
    }
}