import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../shared/services/login.service";
import {AmicaleService} from "../../shared/services/amicale.service";
import {Title} from "@angular/platform-browser";


@Component({
    templateUrl: "reservation.html"
})

export class ReservationComponent implements OnInit {


    private loading: Boolean;
    private bookings: any[];

    constructor(private loginService: LoginService, private amicaleService: AmicaleService, private titleService: Title) {
        this.titleService.setTitle("Bookings");
    }

    ngOnInit() {
        this.loginService.verifUserLogged();
        this.loading = true;
        this.amicaleService.getBookings().subscribe(bookings => {
            this.loading = false;
            this.bookings = bookings;
        });

    }

}