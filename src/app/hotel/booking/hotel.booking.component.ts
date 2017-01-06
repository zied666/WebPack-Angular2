import {Component, OnInit}   from '@angular/core';
import {HotelService} from "../../shared/services/hotel.service";
import {SearchService} from "../../shared/services/search.service";
import {Title} from "@angular/platform-browser";
import {LoadingService} from "../../shared/services/loading.service";
import {Hotel} from "../object/hotel";
import {Search} from "../object/search";
import {Config} from "../../shared/config/config";
import {LoginService} from "../../login/login.service";
import {Router} from "@angular/router";
import {User} from "../../login/user";
import {LocalStorageService} from "../../shared/services/localStorage.service";

@Component({
    templateUrl: './hotel.booking.html',
})

export class HotelBookingComponent implements OnInit {
    private hotel: Hotel;
    private pathPhoto: string;
    private search: Search;
    private loading: boolean;
    private total: number;
    private arrangement: string;
    private booking: any;
    private rooms: any[]= new Array<any>();
    private typeChambres: any[]= new Array<any>();
    private loadingBooking:boolean;
    logedUser: User = null;

    constructor(private hotelService: HotelService, private searchService: SearchService, private title: Title, private loadingService: LoadingService,
                private router: Router,private loginService : LoginService) {
    }


    ngOnInit() {
        if(this.loginService.logedUser== null)
            this.router.navigateByUrl('login');
        this.booking = null;
        this.logedUser = Object.assign({}, this.loginService.logedUser);
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
            this.updateTotal();
        });
    }

    updateTotal() {
        this.total = 0;
        let k = 0;
        let roomTab:any[];
        for (let arrangement of  this.hotel.prices.arrangements) {
            if (arrangement.id == this.search.idArrangement) {
                this.arrangement=arrangement.libelle;
                for (let room of  arrangement.rooms) {
                    if (room.chambres.length > 0)
                    {
                        this.total += room.chambres[this.search.activeRooms[k]].data.total;
                        roomTab=[room.occupation,room.occupationAdulte,room.occupationEnfant, room.chambres[this.search.activeRooms[k]]];
                        this.rooms.push(roomTab);
                        this.typeChambres.push(room.chambres[this.search.activeRooms[k]].id);
                    }
                    k++;
                }
            }
        }
        this.total = Number(this.total.toFixed(3));
    }

    update() {
        this.loadingBooking=true;
        this.hotelService.booking(this.search.idHotel,this.typeChambres.join(";")).subscribe(booking => {
            this.loadingBooking=false;
            this.booking=booking;
        });
    }

}