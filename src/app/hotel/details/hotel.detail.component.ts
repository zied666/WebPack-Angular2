import {Component, OnInit}   from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Details} from "../object/hotel";
import {HotelService} from "../../shared/services/hotel.service";
import {Title} from "@angular/platform-browser";
import {LoginService} from "../../login/login.service";
import {Config} from "../../shared/config/config";

@Component({
    templateUrl: './hotel.detail.html'
})

export class HotelDetailComponent implements OnInit {

    hotel :Details;
    tab:String;
    gmaps:boolean;
    loadingHotel:boolean;
    private pathPhoto:string;

    constructor(private route: ActivatedRoute,private hotelService: HotelService, private titleService: Title,
                private router: Router,private loginService : LoginService) {
    }


    ngOnInit() {
        this.pathPhoto=Config.API_ROUTES.ostravel;
        if(this.loginService.logedUser== null)
            this.router.navigateByUrl('login');
        this.tab="booking";
        this.gmaps=false;
        this.loadingHotel=true;
        let id = parseInt(this.route.snapshot.params['id'], 10);
        this.hotelService.getHotel(id).subscribe(hotel => {
            this.hotel = hotel;
            this.loadingHotel=false;
            this.titleService.setTitle(hotel.libelle);
        });
    }

}