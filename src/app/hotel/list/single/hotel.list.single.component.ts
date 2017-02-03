import {Component, Input, trigger, state, style, OnInit}   from '@angular/core';
import {Hotel} from "../../object/hotel";
import {Config} from "../../../shared/config/config";

@Component({
    templateUrl: './hotel.single.html',
    selector:'list-single-hotel',
    styleUrls:['style.css'],
    animations: [
        trigger('myAnimation', [
            state('true', style({"-webkit-animation-name" : "bounceIn"})),
        ])
    ]
})

export class HotelListSingleComponent implements OnInit {
    @Input() hotel: Hotel;
    @Input() booking: boolean;
    private pathPhoto:string;

    ngOnInit() {
        this.pathPhoto=Config.API_ROUTES.ostravel;
    }

}