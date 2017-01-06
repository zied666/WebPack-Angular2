import {Component, OnInit} from '@angular/core';
import {LoginService} from "../shared/services/login.service";

@Component({
    selector: 'my-footer',
    templateUrl: './footer.html'
})
export class FooterComponent implements OnInit {


    constructor(private loginService: LoginService) {
    }

    ngOnInit() {


    }




}