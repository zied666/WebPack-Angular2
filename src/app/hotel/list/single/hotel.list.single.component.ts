import {Component, Input, trigger, state, transition, animate, style}   from '@angular/core';
import {Hotel} from "../../object/hotel";
import {Search} from "../../object/search";

@Component({
    templateUrl: './hotel.single.html',
    selector:'list-single-hotel',
    animations: [
        trigger('myAnimation', [
            state('true', style({"-webkit-animation-name" : "bounceIn"})),
        ])
    ]
})

export class HotelListSingleComponent {
    @Input() hotel: Hotel;
    @Input() search: Search;
}