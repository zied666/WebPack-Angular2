import {Component, OnInit} from '@angular/core';
import {TranslateService} from "ng2-translate";
//declare var $: any;

@Component({
    selector: 'app',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {


    ngOnInit() {
        //$('body').addClass('loaded');
    }
}