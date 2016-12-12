import {Component, OnInit, Input, Output, EventEmitter}   from '@angular/core';
import {Search} from "../../object/search";
import {Room} from "../../object/room";
import {SearchService} from "../../../shared/services/search.service";

@Component({
    selector: 'hotel-list-sort',
    template: `
                <nav class="navbar navbar-default">
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
            </a>
        </div>
        <div class="collapse navbar-collapse"   id="filtre-hotels">

            <ul class="nav navbar-nav navbar-right">
                <li ngClass="{'active':search.orderBy=='libelle'}">
                    <a href="javascript:void(0)" (click)=" updateSort('libelle');">
                        {{'HOTELS.NAMES'|translate}}
                        <span *ngIf="search.order=='DESC' && search.orderBy=='libelle'" class="glyphicon glyphicon-sort-by-alphabet-alt"></span>
                        <span *ngIf="search.order=='ASC' && search.orderBy=='libelle'" class="glyphicon glyphicon-sort-by-alphabet"></span>
                    </a>
                </li>
                <li ngClass="{'active':search.orderBy=='categorie'}">
                    <a href="javascript:void(0)" (click)=" updateSort('categorie');">
                        {{'HOTELS.STARS'|translate}}
                        <span *ngIf="search.order=='DESC' && search.orderBy=='categorie'" class="glyphicon glyphicon-sort-by-order-alt"></span>
                        <span *ngIf="search.order=='ASC' && search.orderBy=='categorie'" class="glyphicon glyphicon-sort-by-order"></span>
                    </a>
                </li>
                <li ngClass="{'active':search.orderBy=='ville'}">
                    <a href="javascript:void(0)" (click)=" updateSort('ville');">
                        {{'HOTELS.CITIES'|translate}}
                        <span *ngIf="search.order=='DESC' && search.orderBy=='ville'" class="glyphicon glyphicon-sort-by-alphabet-alt"></span>
                        <span *ngIf="search.order=='ASC' && search.orderBy=='ville'" class="glyphicon glyphicon-sort-by-alphabet"></span>
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
        this.sendSearch.emit(false);
    }

}