import {Component, OnInit, trigger, state, transition, style, animate}      from '@angular/core';
import {Config} from "../../shared/config/config";
import {LoginService} from "../../shared/services/login.service";
import {Title} from "@angular/platform-browser";
import {AmicaleService} from "../../shared/services/amicale.service";

@Component({
    templateUrl: './settings.html',
    styleUrls: ['./form.css'],
    animations: [
        trigger('errorMessage', [
            state("true", style({opacity: 0, display: "none"})),
            state("false", style({opacity: 1, display: "block"})),
            transition('1 => 0', animate('.5s'))
        ])
    ]
})
export class SettingsComponent implements OnInit {

    config = Config;
    amicale : any;
    loading:boolean;
    loadingSubmit:boolean;
    success:boolean;
    danger:boolean;
    constructor(private loginService: LoginService,private  titleService: Title,private amicaleService:AmicaleService) {
        this.titleService.setTitle(this.loginService.logedUser.amicale.libelle);
    }
    ngOnInit() {
        this.loginService.verifUserLogged();
        this.loading=true;
        this.amicaleService.getAmicale().subscribe(response => {
            if(response && !response.status)
            {
                this.amicale=response;
                this.loading=false;
            }
        });

    }

    update()
    {
        this.loadingSubmit=true;
        this.amicaleService.updateAmicale(this.amicale).subscribe(response => {
            if(response.status && response.status=="succes")
            {
                this.success=true;
                this.loginService.logedUser.amicale=JSON.parse(JSON.stringify(this.amicale));;
                setTimeout(() => this.success = false, 3000);
            }else
            {
                this.danger=true;
                setTimeout(() => this.danger = false, 3000);
            }
            this.loadingSubmit=false;
        });

    }


}

