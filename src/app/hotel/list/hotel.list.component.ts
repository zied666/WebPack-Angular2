import {Component, OnInit}   from '@angular/core';
import {Subscription} from "rxjs";
import {Hotel} from "../object/hotel";
import {HotelService} from "../../shared/services/hotel.service";
import {SearchService} from "../../shared/services/search.service";
import {Title} from "@angular/platform-browser";
import {LoadingService} from "../../shared/services/loading.service";
import {Router} from "@angular/router";
import {LoginService} from "../../shared/services/login.service";

@Component({
    templateUrl: './hotel.list.html',
})

export class HotelListComponent implements OnInit {

    countHotels: number = null;
    hotels: Hotel[];
    loadingList: Boolean;
    loadingMore: Boolean;
    haveMore: Boolean;
    subscribe: Subscription;

    constructor(private hotelService: HotelService, private searchService: SearchService,private titleService: Title,private loadingService : LoadingService,
    private router: Router,private loginService : LoginService) {
    }


    ngOnInit() {
        this.loginService.verifUserLogged();
        this.searchService.resetOffset();
        this.titleService.setTitle("Hotels");
        this.subscribe = null;
        this.hotels = [];
        this.haveMore = true;
        this.loadingList = true;
        this.updateCountHotels();
        this.update();
    }

    updateSearch(updateCount: Boolean) {
        this.loadingList = true;
        this.loadingService.start()
        this.haveMore = true;
        this.hotels = [];
        this.searchService.resetOffset();
        this.searchService.resetSearch();
        if (updateCount)
            this.updateCountHotels();
        this.update();
    }

    updateCountHotels() {
        this.countHotels = null;
        this.hotelService.getCount().subscribe(count => {
            this.countHotels = count;
        });
    }

    update() {
        if (this.subscribe != null)
            this.subscribe.unsubscribe();
        this.subscribe = this.hotelService.getHotels().subscribe(hotels => {
            this.loadingList = false;
            this.loadingService.end()
            this.loadingMore = false;
            if (hotels.length > 0)
                this.hotels = this.hotels.concat(hotels);
            else
                this.haveMore = false;
        });
    }

    onScroll() {
        if (!this.loadingList && !this.loadingMore && this.haveMore) {
            this.searchService.incrementLimit();
            this.loadingMore = true;
            this.update();
        }
    }

}