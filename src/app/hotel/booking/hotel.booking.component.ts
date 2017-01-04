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
    private total: number;
    private arrangement: string;
    private rooms: any[]= new Array<any>();

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
                    }
                    k++;
                }
            }
        }
        this.total = Number(this.total.toFixed(3));
    }

}