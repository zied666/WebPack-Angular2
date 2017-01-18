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
var LocalStorageService = (function () {
    function LocalStorageService() {
    }
    LocalStorageService.removeItem = function (item) {
        sessionStorage.removeItem(item);
    };
    LocalStorageService.getItem = function (item) {
        return JSON.parse(sessionStorage.getItem(item));
    };
    LocalStorageService.setItem = function (item, data) {
        sessionStorage.setItem(item, JSON.stringify(data));
    };
    return LocalStorageService;
}());
LocalStorageService = __decorate([
    core_1.Injectable()
], LocalStorageService);
exports.LocalStorageService = LocalStorageService;
