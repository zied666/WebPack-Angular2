import {NgModule}            from '@angular/core';
import {SharedModule}        from '../shared';
import {InfiniteScrollModule} from 'angular2-infinite-scroll';
import {HotelDetailComponent} from "./details/hotel.detail.component";
import {HotelListComponent} from "./list/hotel.list.component";
import {AgmCoreModule} from 'angular2-google-maps/core';
import {HotelDetailGeolocationComponent} from "./details/geolocation";
import {HotelDetailFicheComponent} from "./details/fiche";
import {HotelDetailSeasonsComponent} from "./details/saisons";
import {Ng2AutoCompleteModule} from 'ng2-auto-complete';
import {HotelListSingleComponent} from "./list/single";
import {HotelListSinglePriceComponent} from "./list/single/prices";
import {HotelListSinglePriceArrangementComponent} from "./list/single/prices";
import {AppRoutingModule} from "../app-routing.module";
import {HotelListSearchComponent} from "./list/search";
import {HotelListSortComponent} from "./list/search";
import {HotelDetailBookingComponent} from "./details/booking";

@NgModule({
    imports: [
        AppRoutingModule,
        SharedModule,
        InfiniteScrollModule,
        Ng2AutoCompleteModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBrmGPKzL57yv1rdDGTFMr0Am6pmZ8t898'
        })
    ],
    declarations: [
        HotelListComponent,
        HotelListSortComponent,
        HotelListSearchComponent,
        HotelListSingleComponent,
        HotelListSinglePriceComponent,
        HotelListSinglePriceArrangementComponent,
        HotelDetailComponent,
        HotelDetailGeolocationComponent,
        HotelDetailFicheComponent,
        HotelDetailSeasonsComponent,
        HotelDetailBookingComponent,
    ]
})
export class HotelModule {
}
