import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {removeNgStyles, createNewHosts, createInputTransfer} from '@angularclass/hmr';

import {ENV_PROVIDERS} from './environment';
// App is our top level component
import {AppComponent} from './app.component';
import {APP_RESOLVER_PROVIDERS} from './app.resolver';
import {AppState, InternalStateType} from './app.service';
import {HeaderComponent} from "./header";
import {HomepageComponent} from "./homepage";
import {HotelModule} from "./hotel";
import {CoreModule} from "./core";
import {AppRoutingModule} from './app-routing.module';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {SharedModule} from "./shared";
import {FooterComponent} from "./footer/footer.component";
import {LoginModule} from "./login/index";

// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
    AppState
];

type StoreType = {
    state: InternalStateType,
    restoreInputValues: () => void,
    disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent, HeaderComponent,FooterComponent],
    declarations: [
        AppComponent,
        HomepageComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [ // import Angular's modules
        SharedModule,
        HotelModule,
        BrowserModule,
        LoginModule,
        CoreModule.forRoot({userName: 'Miss Marple'}),
        AppRoutingModule
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        ENV_PROVIDERS,
        APP_PROVIDERS
    ]
})
export class AppModule {
    constructor(public appRef: ApplicationRef, public appState: AppState) {
    }

    hmrOnInit(store: StoreType) {
        if (!store || !store.state) return;
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            let restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }

        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    }

    hmrOnDestroy(store: StoreType) {
        const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // save state
        const state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // save input values
        store.restoreInputValues = createInputTransfer();
        // remove styles
        removeNgStyles();
    }

    hmrAfterDestroy(store: StoreType) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }

}

