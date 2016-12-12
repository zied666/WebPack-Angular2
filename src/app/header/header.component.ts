import {Component, OnInit, transition} from '@angular/core';
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";
import {TranslateService} from "ng2-translate";
import {LocalStorageService} from "../shared/services/localStorage.service";
import {Config} from "../shared/config/config";

@Component({
    selector: 'my-header',
    templateUrl: './header.html'
})
export class HeaderComponent implements OnInit {

    private agence: string;
    private version: string;

    constructor(private loginService: LoginService, private router: Router, private translate: TranslateService) {
    }

    ngOnInit() {
        this.agence = Config.AGENCE;
        this.version = Config.VERSION;
        this.translate.addLangs(["en", "fr"]);
        this.translate.setDefaultLang('en');
        if (LocalStorageService.getItem('locale'))
            this.translate.use(LocalStorageService.getItem('locale'));
        else {
            let browserLang = this.translate.getBrowserLang();
            this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
            LocalStorageService.setItem("locale", browserLang.match(/en|fr/) ? browserLang : 'en');
        }
        if (LocalStorageService.getItem("currentUser"))
            this.loginService.logedUser = LocalStorageService.getItem("currentUser");
    }

    changeTranlsation(lang: string) {
        this.translate.use(lang);
        LocalStorageService.setItem("locale", lang);
    }

    logout() {
        this.loginService.logedUser = null;
        LocalStorageService.removeItem("currentUser");
        this.router.navigateByUrl('');
    }


}