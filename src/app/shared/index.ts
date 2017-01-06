import {NgModule}            from '@angular/core';
import {CommonModule}        from '@angular/common';
import {FormsModule}         from '@angular/forms';
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from "ng2-translate";
import {AwesomePipe, PersonsPipe, ShowsignePipe} from "./pipes";
import {HighlightDirective, StateDirective} from "./directives";
import {LoadingComponent, AlertComponent} from "./components";
import {LocalStorageService, HotelService, SearchService, LoadingService} from "./services";
;
import {Http} from "@angular/http";
import {DevisePipe} from "./pipes/devise.pipe";
import {DeviseService} from "./services/devise.service";
import {StarsPipe} from "./pipes/stars.pipe";
import {AddDatePipe} from "./pipes/add_date.pipe";
import {LoginService} from "./services/login.service";

@NgModule({
    imports: [
        CommonModule,
        //TranslateModule.forRoot(),
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
            deps: [Http]
        })
    ],
    declarations: [
        AddDatePipe,
        StarsPipe,
        DevisePipe,
        AwesomePipe,
        PersonsPipe,
        ShowsignePipe,
        HighlightDirective,
        LoadingComponent,
        AlertComponent,
        StateDirective
    ],
    exports: [
        AddDatePipe,
        StarsPipe,
        DevisePipe,
        PersonsPipe,
        AwesomePipe,
        ShowsignePipe,
        HighlightDirective,
        CommonModule,
        FormsModule,
        TranslateModule,
        LoadingComponent,
        AlertComponent,
        StateDirective
    ],
    providers: [
        LoginService,
        LocalStorageService,
        HotelService,
        SearchService,
        LoadingService,
        DeviseService
    ]
})
export class SharedModule {
}