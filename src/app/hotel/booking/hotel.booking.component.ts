import {Component, OnInit}   from '@angular/core';
import {HotelService} from "../../shared/services/hotel.service";
import {SearchService} from "../../shared/services/search.service";
import {Title} from "@angular/platform-browser";
import {LoadingService} from "../../shared/services/loading.service";
import {Hotel} from "../object/hotel";
import {Search} from "../object/search";
import {Config} from "../../shared/config/config";

@Component({
    templateUrl: './hotel.booking.html',
})

export class HotelBookingComponent implements OnInit {
    private hotel: Hotel;
    private pathPhoto: string;
    private search: Search;
    private loading: boolean;

    constructor(private hotelService: HotelService, private searchService: SearchService, private title: Title, private loadingService: LoadingService) {
    }


    ngOnInit() {
        this.pathPhoto = Config.API_ROUTES.ostravel;
        this.search = this.searchService.getSearch();
        this.title.setTitle("Booking");
        this.getHotelPrice();
    }


    getHotelPrice() {
        this.searchService.resetOffset();
        this.loadingService.start();
        this.loading = true;
        this.hotelService.getOneHotel(this.search.idHotel).subscribe(hotel => {
            this.hotel = hotel;
            this.loadingService.end();
            this.loading = false;
        });
    }

}