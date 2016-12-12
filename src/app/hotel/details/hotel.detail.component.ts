import {Component, OnInit}   from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Details} from "../object/hotel";
import {HotelService} from "../../shared/services/hotel.service";

@Component({
    templateUrl: './hotel.detail.html'
})

export class HotelDetailComponent implements OnInit {

    hotel :Details;
    tab:String;
    loadingHotel:boolean;

    constructor(private route: ActivatedRoute,private hotelService: HotelService) {
    }


    ngOnInit() {
        this.tab="home";
        this.loadingHotel=true;
        let id = parseInt(this.route.snapshot.params['id'], 10);
        this.hotelService.getHotel(id).subscribe(hotel => {
            this.hotel = hotel;
            this.loadingHotel=false;
        });
    }

}