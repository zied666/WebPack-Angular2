import {Component, Input, OnInit}   from '@angular/core';
import {Search} from "../../../object/search";
import {HotelService} from "../../../../shared/services/hotel.service";
import {SearchService} from "../../../../shared/services/search.service";

@Component({
    templateUrl: './hotel.list.single.price.html',
    selector: 'list-single-hotel-price',
})

export class HotelListSinglePriceComponent implements OnInit {
    @Input() id: number;
    @Input() search: Search;
    @Input() arrangements: any;
    private search: Search;
    private defaultIdArrangement: number;

    constructor(private searchService: SearchService) {
    }

    ngOnInit() {
        this.search = this.searchService.getSearch();
        if (this.search.idHotel == this.id && this.search.idArrangement != null)
            this.defaultIdArrangement = this.search.idArrangement;
        else
            this.defaultIdArrangement = this.arrangements[0].id;
        console.log(this.arrangements,this.defaultIdArrangement);
    }
}