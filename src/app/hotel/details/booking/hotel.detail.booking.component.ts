import {Component, Input, OnInit}   from '@angular/core';
import {Details} from "../../object/hotel";
import {HotelService} from "../../../shared/services/hotel.service";
@Component({
    templateUrl: "./hotel.detail.booking.html",
    selector: "hotel-booking"
})

export class HotelDetailBookingComponent implements OnInit {
    @Input() hotel: Details;

    constructor(private hotelService: HotelService) {
    }

    ngOnInit() {
    }
}