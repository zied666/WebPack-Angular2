"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var config_1 = require("../../shared/config/config");
var AmicaleComponent = (function () {
    function AmicaleComponent(loginService, titleService, amicaleService) {
        this.loginService = loginService;
        this.titleService = titleService;
        this.amicaleService = amicaleService;
        this.config = config_1.Config;
        this.titleService.setTitle(this.loginService.logedUser.amicale.libelle);
    }
    AmicaleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.amicaleService.getAmicale().subscribe(function (response) {
            if (response && !response.status) {
                _this.amicale = response;
                _this.loading = false;
            }
        });
    };
    AmicaleComponent.prototype.update = function () {
        var _this = this;
        this.loadingSubmit = true;
        this.amicaleService.updateAmicale(this.amicale).subscribe(function (response) {
            if (response.status && response.status == "succes") {
                _this.success = true;
                _this.loginService.logedUser.amicale = JSON.parse(JSON.stringify(_this.amicale));
                ;
                setTimeout(function () { return _this.success = false; }, 3000);
            }
            else {
                _this.danger = true;
                setTimeout(function () { return _this.danger = false; }, 3000);
            }
            _this.loadingSubmit = false;
        });
    };
    return AmicaleComponent;
}());
AmicaleComponent = __decorate([
    core_1.Component({
        templateUrl: './amicale.html',
        styleUrls: ['../form.css'],
        animations: [
            core_1.trigger('errorMessage', [
                core_1.state("true", core_1.style({ opacity: 0, display: "none" })),
                core_1.state("false", core_1.style({ opacity: 1, display: "block" })),
                core_1.transition('1 => 0', core_1.animate('.5s'))
            ])
        ]
    })
], AmicaleComponent);
exports.AmicaleComponent = AmicaleComponent;
