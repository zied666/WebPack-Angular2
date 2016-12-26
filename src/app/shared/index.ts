import {NgModule}            from '@angular/core';
import {CommonModule}        from '@angular/common';
import {FormsModule}         from '@angular/forms';
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from "ng2-translate";
import {AwesomePipe,PersonsPipe,ShowsignePipe} from "./pipes";
import {HighlightDirective,StateDirective} from "./directives";
import {LoadingComponent,AlertComponent} from "./components";
import {LocalStorageService,HotelService,SearchService,LoadingService} from "./services";;
import {Http} from "@angular/http";

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