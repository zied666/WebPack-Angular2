import {Component, OnInit} from '@angular/core';
import {LoadingService} from "./shared/services/loading.service";
//declare var $: any;
declare var classie: any;

@Component({
    selector: 'app',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

    constructor(private loadingService : LoadingService){

    }
}