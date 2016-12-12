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

    incrementLimit(): void {
        this.search.offset += this.search.limit;
        LocalStorageService.setItem("search", this.search);
    }


}