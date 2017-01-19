import {Component, OnInit, Input} from '@angular/core';
import {LoginService} from "../../shared/services/login.service";
import {AmicaleService} from "../../shared/services/amicale.service";


@Component({
    templateUrl: "client.html",
    selector:"[amical-client-single]"
})

export class AmicaleClientComponent implements OnInit {


    private loading:boolean;
    @Input() client: any;

    constructor(private loginService: LoginService,private amicaleService:AmicaleService) {
    }


    ngOnInit() {

    }


    lockUser(id)
    {
        this.loading=true;
        this.amicaleService.lockUser(id).subscribe(response => {
            if(response.status=="success")
                this.client.user.locked=!this.client.user.locked;
            else
                alert(response.msg);
            this.loading=false;
        });
    }
}