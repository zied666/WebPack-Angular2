import {Component, OnInit, Input} from '@angular/core';
import {LoginService} from "../../shared/services/login.service";
import {AmicaleService} from "../../shared/services/amicale.service";
import {ActivatedRoute} from "@angular/router";


@Component({
    templateUrl: "updateClient.html",
})

export class AmicaleUpdateClientComponent implements OnInit {


    private id: number;
    private client: any;
    private loading: boolean;

    constructor(private loginService: LoginService, private amicaleService: AmicaleService, private route: ActivatedRoute) {
    }


    ngOnInit() {
        let id = parseInt(this.route.snapshot.params['id'], 10);
        this.loading = true;
        this.amicaleService.getClient(id).subscribe(response => {
            if (response.status == "success") {
                this.client=response.data;
                this.loading = false;
            }
            else
                alert(response.msg)
        });
    }


}