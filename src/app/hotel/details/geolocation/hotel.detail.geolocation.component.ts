import {Component, Input, OnInit}   from '@angular/core';
import {Details} from "../../object/hotel";



@Component({
    templateUrl:'./hotel.detail.geolocation.html',
    selector: "hotel-geolocation",
    styleUrls: ['./hotel.detail.geolocation.css'],
})

export class HotelDetailGeolocationComponent implements OnInit {
    @Input() hotel: Details;
    lat: number ;
    lng: number ;

    ngOnInit() {
        this.lat = parseFloat(this.hotel.longitude) ;
        this.lng = parseFloat(this.hotel.latitude);
    }




}