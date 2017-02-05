import {Injectable, OnChanges}    from '@angular/core';
import 'rxjs/add/operator/toPromise';
import "rxjs";
import "rxjs/Rx";
import {Search} from "../../hotel/object/search";
import {LocalStorageService} from "./localStorage.service";

@Injectable()
export class SearchService implements OnChanges {

    private search: Search;

    constructor() {
        if (LocalStorageService.getItem("search"))
            this.search = LocalStorageService.getItem("search");
        else
            this.search = new Search();
        this.search.limit = 10;
        this.search.offset = 0;
    }

    updateHotelsReservation(idHotel: Number,idArrangement: Number, activeRooms: Array<number>) {
        this.search.activeRooms = JSON.parse(JSON.stringify(activeRooms));
        this.search.idHotel = JSON.parse(JSON.stringify(idHotel));
        this.search.idArrangement = JSON.parse(JSON.stringify(idArrangement));
        LocalStorageService.setItem("search", this.search);
    }

    ngOnChanges() {
        LocalStorageService.setItem("search", this.search);
    }

    getSearch(): Search {
        return JSON.parse(JSON.stringify(this.search));
    }

    setSearch(search: Search): void {
        this.search = JSON.parse(JSON.stringify(search));
        LocalStorageService.setItem("search", this.search);
    }

    setRoom(rooms: string): void {
        this.search.rooms = rooms;
        LocalStorageService.setItem("search", this.search);
    }

    resetOffset(): void {
        this.search.offset = 0;
        LocalStorageService.setItem("search", this.search);
    }

    resetSearch(): void {
        this.search.idHotel = null;
        this.search.idArrangement = null;
        this.search.activeRooms = null;
        LocalStorageService.setItem("search", this.search);
    }

    incrementLimit(): void {
        this.search.offset += this.search.limit;
        LocalStorageService.setItem("search", this.search);
    }

    countChambre(): number {
        return this.search.rooms.split(";").length;
    }

    getCurrentDate()
    {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!

        var yyyy = today.getFullYear();
        if(Number(dd)<10){
            dd='0'+dd;
        }
        if(Number(mm)<10){
            mm='0'+mm;
        }
        return yyyy+"-"+mm+'-'+dd;
    }


}