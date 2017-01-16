import {Component, OnInit, trigger, state, transition, style, animate}   from '@angular/core';
import {HotelService} from "../../shared/services/hotel.service";
import {SearchService} from "../../shared/services/search.service";
import {Title} from "@angular/platform-browser";
import {LoadingService} from "../../shared/services/loading.service";
import {Hotel} from "../object/hotel";
import {Search} from "../object/search";
import {Config} from "../../shared/config/config";
import {Router} from "@angular/router";
import {User} from "../../login/user";
import {LoginService} from "../../shared/services/login.service";
import {BookingService} from "../../shared/services/booking.service";

@Component({
    templateUrl: './admin.booking.html',
})

export class AdminBookingComponent implements OnInit {

    private loading:Boolean;
    private bookings:any[];

    constructor(private loginService: LoginService, private bookingService : BookingService , private titleService: Title) {
        this.titleService.setTitle("Bookings");
    }

    ngOnInit() {
        this.loginService.verifUserLogged();
        this.loadBookings();

    }

    loadBookings()
    {
        this.loading=true;
        this.bookingService.getBookings().subscribe(bookings => {
            this.loading=false;
            this.bookings = bookings;
        });
    }

}