import {NgModule}            from '@angular/core';
import {SharedModule}        from '../shared/shared.module';
import {InfiniteScrollModule} from 'angular2-infinite-scroll';
import {HotelDetailComponent} from "./details/hotel.detail.component";
import {HotelListComponent} from "./list/hotel.list.component";
import {AgmCoreModule} from 'angular2-google-maps/core';
import {HotelDetailGeolocationComponent} from "./details/geolocation/hotel.detail.geolocation.component";
import {HotelDetailFicheComponent} from "./details/fiche/hotel.detail.fiche.component";
import {HotelDetailSeasonsComponent} from "./details/saisons/hotel.detail.seasons.component";
import {Ng2AutoCompleteModule} from 'ng2-auto-complete';
import {HotelListSingleComponent} from "./list/single/hotel.list.single.component";
import {HotelListSinglePriceComponent} from "./list/single/prices/hotel.list.single.price.component";
import {HotelListSinglePriceArrangementComponent} from "./list/single/prices/hotel.list.single.price.arrangement.component";
import {AppRoutingModule} from "../app-routing.module";
import {HotelListSearchComponent} from "./list/search/hotel.list.search.component";
import {HotelListSortComponent} from "./list/search/hotel.list.sort.component";


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
    ]
})
export class HotelModule {
}
