import {NgModule}            from '@angular/core';
import {CommonModule}        from '@angular/common';
import {FormsModule}         from '@angular/forms';
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from "ng2-translate";
import {AwesomePipe} from "./pipes/awesome.pipe";
import {PersonsPipe} from "./pipes/persons.pipe";
import {ShowsignePipe} from "./pipes/showsigne.pipe";
import {HighlightDirective} from "./directives/highlight.directive";
import {LoadingComponent} from "./components/loading.component";
import {AlertComponent} from "./components/alert.component";
import {LocalStorageService} from "./services/localStorage.service";
import {StateDirective} from "./directives/state.directive";
import {HotelService} from "./services/hotel.service";
import {SearchService} from "./services/search.service";
import {Http} from "@angular/http";
import {LoadingService} from "./services/loading.service";

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
        AwesomePipe,
        PersonsPipe,
        ShowsignePipe,
        HighlightDirective,
        LoadingComponent,
        AlertComponent,
        StateDirective
    ],
    exports: [
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
        LocalStorageService,
        HotelService,
        SearchService,
        LoadingService
    ]
})
export class SharedModule {
}