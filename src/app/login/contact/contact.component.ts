import {Component, OnInit, trigger, state, transition, style, animate}      from '@angular/core';
import {Config} from "../../shared/config/config";

@Component({
    templateUrl: './contact.html',
    styleUrls: ['../form.css'],
    animations: [
        trigger('errorMessage', [
            state("true", style({opacity: 0, display: "none"})),
            state("false", style({opacity: 1, display: "block"})),
            transition('1 => 0', animate('.5s'))
        ])
    ]
})
export class ContactComponent implements OnInit {

    config = Config;
    ngOnInit() {

    }



}

