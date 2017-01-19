"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var rxjs_1 = require("rxjs");
require("rxjs");
require("rxjs/Rx");
var config_1 = require("../config/config");
var AmicaleService = (function () {
    function AmicaleService(http, searchService, loginService) {
        this.http = http;
        this.searchService = searchService;
        this.loginService = loginService;
    }
    AmicaleService.prototype.getAmicale = function () {
        var params = new http_1.URLSearchParams();
        params.set('token', this.loginService.logedUser.token.toString());
        return this.http.get(config_1.Config.API_ROUTES.ostravel + "api/amicale", { search: params })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return rxjs_1.Observable.throw(error.json().error || 'Server error'); });
    };
    AmicaleService.prototype.updateAmicale = function (amicale) {
        var params = new http_1.URLSearchParams();
        params.set('token', this.loginService.logedUser.token.toString());
        params.set('libelleAmicale', amicale.libelle.toString());
        params.set('adresseAmicale', amicale.adresse.toString());
        params.set('telAmicale', amicale.tel.toString());
        params.set('faxAmicale', amicale.fax.toString());
        params.set('matriculeFiscaleAmicale', amicale.matricule_fiscale.toString());
        params.set('registreCommercieAmicale', amicale.registre_commercie.toString());
        return this.http.get(config_1.Config.API_ROUTES.ostravel + "api/updateamicale", { search: params })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return rxjs_1.Observable.throw(error.json().error || 'Server error'); });
    };
    AmicaleService.prototype.updateMargeAmicale = function (amicale) {
        var params = new http_1.URLSearchParams();
        params.set('token', this.loginService.logedUser.token.toString());
        params.set('margeSHT', amicale.marge_s_h_t.toString());
        return this.http.get(config_1.Config.API_ROUTES.ostravel + "api/updatemargeamicale", { search: params })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return rxjs_1.Observable.throw(error.json().error || 'Server error'); });
    };
    AmicaleService.prototype.getBookings = function () {
        var params = new http_1.URLSearchParams();
        params.set('token', this.loginService.logedUser.token.toString());
        return this.http.get(config_1.Config.API_ROUTES.ostravel + "api/amicale/hotels", { search: params })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return rxjs_1.Observable.throw(error.json().error || 'Server error'); });
    };
    return AmicaleService;
}());
AmicaleService = __decorate([
    core_1.Injectable()
], AmicaleService);
exports.AmicaleService = AmicaleService;
