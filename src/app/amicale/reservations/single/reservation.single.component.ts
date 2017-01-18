import {Component, OnInit, Input} from '@angular/core';
import {BookingService} from "../../../shared/services/booking.service";
import {LoginService} from "../../../shared/services/login.service";
import {Config} from "../../../shared/config/config";
import {AmicaleService} from "../../../shared/services/amicale.service";


@Component({
    selector: "[amicale-booking-single]",
    templateUrl: "single.html"
})

export class ReservationSingleComponent implements OnInit {


    @Input() booking: any;
    private config = Config;
    loading :boolean;
    preConfirm :boolean;

    constructor(private bookingService: BookingService,private loginService: LoginService,private amicaleService:AmicaleService) {
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

    validateBooking()
    {
        this.loading=true;
        this.bookingService.validate(this.booking.id).subscribe(response => {
            if (response.status == "success") {
                this.booking.validated_amicale=new Date();
                this.booking.responsable_amicale={"nom_prenom":this.loginService.logedUser.nom+" "+this.loginService.logedUser.prenom};
            }
            this.loading = false;
        });
    }

}