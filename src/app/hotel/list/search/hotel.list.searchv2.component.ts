import {Component, OnInit, Input, Output, EventEmitter}   from '@angular/core';
import {Room} from "../../object/room";
import {SearchService} from "../../../shared/services/search.service";
import {Search} from "../../object/search";

declare var $: any;
@Component({
    selector: 'hotel-list-search-2',
    templateUrl: './hotel.list.searchv2.html',
    styleUrls: ['./form.css','autocomplete.css']
})

export class HotelListSearchv2Component implements OnInit {

    @Output() sendSearch = new EventEmitter();
    @Input() allDetails: boolean;
    nights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    chambreCount: number;
    room1: Room;
    room2: Room;
    room3: Room;
    room4: Room;
    room5: Room;

    minDate = new Date().toISOString().slice(0, 10).replace(/-/g, "-");


    private search: Search;

    constructor(private searchService: SearchService) {
        this.search = searchService.getSearch();
    }

    ngOnInit() {
        $(document).ready(function () {
            $('.ng2-auto-complete').css('display', 'block');
        });
        $('.ng2-auto-complete').css('display', 'block');
        var data: any[] = this.search.rooms.split(";");
        this.chambreCount = data.length;
        this.room1 = new Room(data[0]);
        this.room2 = new Room(data[1]);
        this.room3 = new Room(data[2]);
        this.room4 = new Room(data[3]);
        this.room5 = new Room(data[4]);
    }

    updateRooms() {
        let roomsString = "";
        for (var i = 1; i <= this.chambreCount; i++) {
            roomsString += this["room" + i].countAdult;
            for (var j = 1; j <= this["room" + i].countChild; j++) {
                roomsString += "," + this["room" + i].getAge(j);
            }
            roomsString += ";";
        }
        roomsString = roomsString.substr(0, roomsString.length - 1);
        this.search.rooms = roomsString;
        this.searchService.setSearch(this.search);
        this.sendSearch.emit(true);
    }

}