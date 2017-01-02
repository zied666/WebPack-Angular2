import {Component, OnInit, Input, Output, EventEmitter}   from '@angular/core';
import {Room} from "../../object/room";
import {SearchService} from "../../../shared/services/search.service";
import {Search} from "../../object/search";

@Component({
    selector: 'hotel-list-search',
    templateUrl: './hotel.list.search.html',
})

export class HotelListSearchComponent implements OnInit {

    @Output() sendSearch = new EventEmitter();
    @Input() allDetails: boolean;
    chambreCount: number;
    room1: Room;
    room2: Room;
    room3: Room;
    room4: Room;
    room5: Room;

    private search: Search;

    constructor(private searchService: SearchService) {
        this.search = searchService.getSearch();
    }

    ngOnInit() {
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