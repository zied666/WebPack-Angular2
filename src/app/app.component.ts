import {Component, OnInit} from '@angular/core';
import {LoadingService} from "./shared/services/loading.service";
import {LoginService} from "./login/login.service";
import {Router} from "@angular/router";
//declare var $: any;
declare var classie: any;

@Component({
    selector: 'app',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

    constructor(){

    }

    ngOnInit() {

    }
}