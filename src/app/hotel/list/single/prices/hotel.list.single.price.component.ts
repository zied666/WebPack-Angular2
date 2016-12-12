import {Component, Input, OnInit}   from '@angular/core';
import {Search} from "../../../object/search";
import {HotelService} from "../../../../shared/services/hotel.service";

@Component({
    templateUrl: './hotel.list.single.price.html',
    selector: 'list-single-hotel-price',
})

export class HotelListSinglePriceComponent implements OnInit {
    @Input() id: number;
    @Input() search: Search;
    @Input() arrangements : any;

    constructor(private hotelService: HotelService) {
    }

    ngOnInit() {
    }
}