import {Component, Input, Output, EventEmitter}   from '@angular/core';
import {Search} from "../../object/search";
import {SearchService} from "../../../shared/services/search.service";

@Component({
    selector: 'hotel-list-sort',
    template: `
                <nav class="navbar navbar-default booking-item-dates-change mb40 mt30" style="padding: 0px;background-color: white">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#filtre-hotels" aria-expanded="true">
                <span class="sr-only">{{"HOTELS.LIST"|translate}}</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#" *ngIf="countHotels!=null">
                <strong>{{countHotels}}</strong> {{"HOTELS.FOUNDDED"|translate}}
                <span *ngIf="search.ville!=''">{{"IN"|translate}} <strong>{{searchService.getSearch().ville}}</strong></span>
                 {{"FOR"|translate}} <strong>{{searchService.getSearch().checkIn|date:"dd/MM/yyyy"}}</strong>
                 {{"TO"|translate}} <strong>{{searchService.getSearch().checkIn|addDate:searchService.getSearch().nuitees|date:"dd/MM/yyyy"}}</strong>
                 {{"FOR"|translate}} <strong>{{searchService.countChambre()}} {{"HOTELS.ROOM"|translate}}(s)</strong>
            </a>
        </div>
        <div class="collapse navbar-collapse"   id="filtre-hotels">

            <ul class="nav navbar-nav navbar-right">
                <li ngClass="{'active':search.orderBy=='libelle'}">
                    <a href="javascript:void(0)" (click)=" updateSort('libelle');">
                        {{'HOTELS.NAMES'|translate}}
                        <span *ngIf="search.order=='DESC' && search.orderBy=='libelle'" class="fa fa-angle-up"></span>
                        <span *ngIf="search.order=='ASC' && search.orderBy=='libelle'" class="fa fa-angle-down"></span>
                    </a>
                </li>
                <li ngClass="{'active':search.orderBy=='categorie'}">
                    <a href="javascript:void(0)" (click)=" updateSort('categorie');">
                        {{'HOTELS.STARS'|translate}}
                        <span *ngIf="search.order=='DESC' && search.orderBy=='categorie'" class="fa fa-angle-up"></span>
                        <span *ngIf="search.order=='ASC' && search.orderBy=='categorie'" class="fa fa-angle-down"></span>
                    </a>
                </li>
                <li ngClass="{'active':search.orderBy=='ville'}">
                    <a href="javascript:void(0)" (click)=" updateSort('ville');">
                        {{'HOTELS.CITIES'|translate}}
                        <span *ngIf="search.order=='DESC' && search.orderBy=='ville'" class="fa fa-angle-up"></span>
                        <span *ngIf="search.order=='ASC' && search.orderBy=='ville'" class="fa fa-angle-down"></span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
`,
})
export class HotelListSortComponent {

    @Input() countHotels: number;
    @Output() sendSearch = new EventEmitter();

    private search: Search;

    constructor(private searchService: SearchService) {
        this.search = searchService.getSearch();
    }

    updateSort(lib: string) {
        if (lib == this.search.orderBy) {
            if (this.search.order == "DESC")
                this.search.order = "ASC";
            else
                this.search.order = "DESC";
        }
        else
            this.search.orderBy = lib;
        this.searchService.setSearch(this.search);
        this.sendSearch.emit(false);
    }

}