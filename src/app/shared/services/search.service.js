"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
require("rxjs");
require("rxjs/Rx");
var search_1 = require("../../hotel/object/search");
var localStorage_service_1 = require("./localStorage.service");
var SearchService = (function () {
    function SearchService() {
        if (localStorage_service_1.LocalStorageService.getItem("search"))
            this.search = localStorage_service_1.LocalStorageService.getItem("search");
        else
            this.search = new search_1.Search();
        this.search.limit = 10;
        this.search.offset = 0;
    }
    SearchService.prototype.updateHotelsReservation = function (idHotel, idArrangement, activeRooms) {
        this.search.activeRooms = JSON.parse(JSON.stringify(activeRooms));
        this.search.idHotel = JSON.parse(JSON.stringify(idHotel));
        this.search.idArrangement = JSON.parse(JSON.stringify(idArrangement));
        localStorage_service_1.LocalStorageService.setItem("search", this.search);
    };
    SearchService.prototype.ngOnChanges = function () {
        localStorage_service_1.LocalStorageService.setItem("search", this.search);
    };
    SearchService.prototype.getSearch = function () {
        return JSON.parse(JSON.stringify(this.search));
    };
    SearchService.prototype.setSearch = function (search) {
        this.search = JSON.parse(JSON.stringify(search));
        localStorage_service_1.LocalStorageService.setItem("search", this.search);
    };
    SearchService.prototype.setRoom = function (rooms) {
        this.search.rooms = rooms;
        localStorage_service_1.LocalStorageService.setItem("search", this.search);
    };
    SearchService.prototype.resetOffset = function () {
        this.search.offset = 0;
        localStorage_service_1.LocalStorageService.setItem("search", this.search);
    };
    SearchService.prototype.resetSearch = function () {
        this.search.idHotel = null;
        this.search.idArrangement = null;
        this.search.activeRooms = null;
        localStorage_service_1.LocalStorageService.setItem("search", this.search);
    };
    SearchService.prototype.incrementLimit = function () {
        this.search.offset += this.search.limit;
        localStorage_service_1.LocalStorageService.setItem("search", this.search);
    };
    return SearchService;
}());
SearchService = __decorate([
    core_1.Injectable()
], SearchService);
exports.SearchService = SearchService;
