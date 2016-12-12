import {Component, Input}   from '@angular/core';
import {Details} from "../../object/hotel";
@Component({
    templateUrl:'./hotel.detail.fiche.html',
    selector:"hotel-fiche"
})

export class HotelDetailFicheComponent  {
    @Input() hotel: Details;

}