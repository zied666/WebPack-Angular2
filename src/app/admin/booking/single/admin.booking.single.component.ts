import {Component, OnInit, Input}   from '@angular/core';
import {LoginService} from "../../../shared/services/login.service";
import {BookingService} from "../../../shared/services/booking.service";
import {Config} from "../../../shared/config/config";


@Component({
    selector: "[booking-single]",
    templateUrl: './admin.booking.single.html',
})

export class AdminBookingSingleComponent implements OnInit {


    @Input() booking: any;
    private config = Config;
    loading :boolean;
    preConfirm :boolean;

    constructor(private bookingService: BookingService) {
    }

    ngOnInit() {
        this.loading=false;
    }

    cancelBooking()
    {
        this.loading=true;
        this.bookingService.cancel(this.booking.id).subscribe(response => {
            if (response.status == "success") {
                this.booking.etat=9;
            }
            this.loading = false;
        });
    }



}