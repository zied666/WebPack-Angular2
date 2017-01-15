import {Component, OnInit, transition} from '@angular/core';
import {Router} from "@angular/router";
import {TranslateService} from "ng2-translate";
import {LocalStorageService} from "../shared/services/localStorage.service";
import {Config} from "../shared/config/config";
import {DeviseService} from "../shared/services/devise.service";
import {LoginService} from "../shared/services/login.service";

@Component({
    selector: 'my-header',
    templateUrl: './header.html'
})
export class HeaderComponent implements OnInit {

    private agence: string;
    private version: string;
    private deviseLoading:boolean;

    constructor(private loginService: LoginService, private router: Router, private translate: TranslateService,private deviseService:DeviseService) {
    }

    ngOnInit() {
        this.deviseLoading=true;
        this.deviseService.getDevises().subscribe(devises => {
            this.deviseService.setDevises(devises) ;
            this.deviseLoading=false;
        });

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
    }

    changeDevise(devise) {
        this.deviseService.setCurrentDevise(devise);
    }

    changeTranlsation(lang: string) {
        this.translate.use(lang);
        LocalStorageService.setItem("locale", lang);
    }

    logout() {
        this.loginService.logedUser = null;
        LocalStorageService.removeItem("currentUser");
        this.router.navigateByUrl('/login');
    }


}