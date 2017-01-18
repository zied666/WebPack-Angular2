import {Component, OnInit}   from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Hotel} from "../object/hotel";
import {Search} from "../object/search";
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