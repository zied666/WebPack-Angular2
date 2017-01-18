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
require("rxjs");
require("rxjs/Rx");
var rxjs_1 = require("rxjs");
var config_1 = require("../config/config");
var localStorage_service_1 = require("./localStorage.service");
var LoginService = (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        this.logedUser = null;
    }
    LoginService.prototype.verifUserLogged = function () {
        var _this = this;
        if (this.logedUser == null && this.router.url != "/login") {
            this.router.navigateByUrl('login');
        }
        else
            this.verifToken(this.logedUser.token).subscribe(function (response) {
                if (response.status != "succes") {
                    localStorage_service_1.LocalStorageService.removeItem("currentUser");
                    if (_this.router.url != "/login")
                        _this.router.navigateByUrl('login');
                }
            });
    };
    LoginService.prototype.verifToken = function (token) {
        var params = new http_1.URLSearchParams();
        params.set('token', token);
        return this.http.get(config_1.Config.API_ROUTES.ostravel + "api/veriftoken", { search: params })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return rxjs_1.Observable.throw(error.json().error || 'Server error'); });
    };
    LoginService.prototype.connection = function (email, password) {
        var params = new http_1.URLSearchParams();
        params.set('email', email);
        params.set('password', password);
        return this.http.get(config_1.Config.API_ROUTES.ostravel + "api/connection", { search: params })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return rxjs_1.Observable.throw(error.json().error || 'Server error'); });
    };
    LoginService.prototype.getPhoto = function () {
        if (this.logedUser && this.logedUser.photo)
            return config_1.Config.API_ROUTES.ostravel + this.logedUser.photo;
        else
            return config_1.Config.LOGO;
    };
    LoginService.prototype.getAmicaleLibelle = function () {
        if (this.logedUser && this.logedUser.amicale)
            return this.logedUser.amicale.libelle;
        else
            return config_1.Config.AGENCE;
    };
    LoginService.prototype.getAdresse = function () {
        if (this.logedUser && this.logedUser.amicale)
            return this.logedUser.amicale.adresse;
        else
            return config_1.Config.ADRESSE;
    };
    LoginService.prototype.getTel = function () {
        if (this.logedUser && this.logedUser.amicale)
            return this.logedUser.amicale.tel;
        else
            return config_1.Config.TEL;
    };
    LoginService.prototype.update = function (user) {
        var params = new http_1.URLSearchParams();
        params.set('token', this.logedUser.token.toString());
        params.set('nom', user.nom);
        params.set('prenom', user.prenom);
        params.set('email', user.email);
        params.set('tel', user.tel);
        return this.http.get(config_1.Config.API_ROUTES.ostravel + "api/profile", { search: params })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return rxjs_1.Observable.throw(error.json().error || 'Server error'); });
    };
    LoginService.prototype.updatePassword = function (currentPassword, newPassword) {
        var params = new http_1.URLSearchParams();
        params.set('token', this.logedUser.token.toString());
        params.set('ancienPassword', currentPassword);
        params.set('newPassword', newPassword);
        return this.http.get(config_1.Config.API_ROUTES.ostravel + "api/password", { search: params })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return rxjs_1.Observable.throw(error.json().error || 'Server error'); });
    };
    LoginService.prototype.register = function (name, email, password) {
        var params = new http_1.URLSearchParams();
        params.set('name', name);
        params.set('email', email);
        params.set('password', password);
        return this.http.get(config_1.Config.API_ROUTES.ostravel + "api/email", { search: params })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return rxjs_1.Observable.throw(error.json().error || 'Server error'); });
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable()
], LoginService);
exports.LoginService = LoginService;
