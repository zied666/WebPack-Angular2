import {Component, Input, OnInit}   from '@angular/core';
import {HotelService, LoadingService, SearchService} from "../../../shared/services";
import {Hotel} from "../../object/hotel";
@Component({
    templateUrl: "./hotel.detail.booking.html",
    selector: "hotel-booking"
})

export class HotelDetailBookingComponent implements OnInit {
    @Input() id: number;
    private hotel: Hotel;
    private loading: boolean;

    constructor(private hotelService: HotelService, private searchService: SearchService) {
    }


    ngOnInit() {
        this.update();
    }


    update() {
        this.searchService.resetOffset();
        this.loading = true;
        this.hotelService.getOneHotel(this.id).subscribe(hotel => {
            this.hotel = hotel;
            this.loading = false;
        });
    }

    updateSearch(){
        this.searchService.resetSearch();
        this.update();
    }
}