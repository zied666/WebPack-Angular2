import {Component, Input, OnInit}   from '@angular/core';
import {Search} from "../../../object/search";
import {SearchService} from "../../../../shared/services/search.service";
import {Router} from "@angular/router";
import {DeviseService} from "../../../../shared/services/devise.service";
@Component({
    templateUrl: './hotel.list.single.price.arrangement.html',
    selector: 'list-single-hotel-price-arrangement',
    styleUrls:['HotelListSinglePriceArrangement.css']
})

export class HotelListSinglePriceArrangementComponent implements OnInit {
    @Input() id: number;
    @Input() arrangement: any;
    private search: Search;
    private isPageDetails: boolean;
    activeRooms: Array<number>;
    total = 0;

    constructor(private searchService: SearchService, private router: Router,private deviseService:DeviseService) {
    }

    ngOnInit() {
        if(this.router.url =="/")
            this.isPageDetails=false;
        else
            this.isPageDetails=true;
        this.search = this.searchService.getSearch();
        this.activeRooms = [];
        if (this.search.idHotel == this.id && this.search.activeRooms != null)
            this.activeRooms = this.search.activeRooms;
        else {
            let k = 0;
            for (let room of  this.arrangement.rooms) {
                this.activeRooms[k] = 0;
                k++;
            }
        }
        //calcule total
        this.updateTotal();
    }

    updateActiveRooms(i, j) {
        this.activeRooms[i] = j;
        this.updateTotal();
    }

    goPageDetails() {
        this.searchService.updateHotelsReservation(this.id, this.arrangement.id, this.activeRooms);
        this.router.navigateByUrl('hotel/' + this.id);
    }

    goValidatePage()
    {
        this.searchService.updateHotelsReservation(this.id, this.arrangement.id, this.activeRooms);
        this.router.navigateByUrl('booking');
    }

    updateTotal()
    {
        this.total = 0;
        let k = 0;
        for (let room of  this.arrangement.rooms) {
            if (room.chambres.length > 0)
                this.total += room.chambres[this.activeRooms[k]].data.total;
            k++;
        }
        this.total = Number(this.total.toFixed(3));
    }

}