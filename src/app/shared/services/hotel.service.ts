import {Injectable}    from '@angular/core';
import {Http, URLSearchParams, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import "rxjs";
import "rxjs/Rx";
import {Hotel, Details} from "../../hotel/object/hotel";
import {Config} from "../config/config";
import {SearchService} from "./search.service";

@Injectable()
export class HotelService {
    constructor(private http: Http, private searchService: SearchService) {
    }

    getHotels(): Observable<Hotel[]> {
        let params = new URLSearchParams();
        params.set('rooms', this.searchService.getSearch().rooms);
        params.set('nuitees', this.searchService.getSearch().nuitees.toString());
        params.set('checkIn', this.searchService.getSearch().checkIn);
        params.set('limit', this.searchService.getSearch().limit.toString());
        params.set('offset', this.searchService.getSearch().offset.toString());
        params.set('search', this.searchService.getSearch().nom);
        params.set('ville', this.searchService.getSearch().ville);
        params.set('etoile', this.searchService.getSearch().etoiles);
        params.set('orderBy', this.searchService.getSearch().orderBy);
        params.set('order', this.searchService.getSearch().order);
        return this.http.get(Config.API_ROUTES.ostravel + "hotels", {search: params})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getCount(): Observable<number> {
        let params = new URLSearchParams();
        params.set('rooms', this.searchService.getSearch().rooms);
        params.set('nuitees', this.searchService.getSearch().nuitees.toString());
        params.set('checkIn', this.searchService.getSearch().checkIn);
        params.set('search', this.searchService.getSearch().nom);
        params.set('ville', this.searchService.getSearch().ville);
        params.set('etoile', this.searchService.getSearch().etoiles);
        params.set('orderBy', this.searchService.getSearch().orderBy);
        params.set('order', this.searchService.getSearch().order);
        return this.http.get(Config.API_ROUTES.ostravel + "hotelscount", {search: params})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getPrice(id): Observable<any> {
        let params = new URLSearchParams();
        params.set('nuitees', this.searchService.getSearch().nuitees.toString());
        params.set('checkIn', this.searchService.getSearch().checkIn);
        params.set('hotel', id);
        params.set('rooms', this.searchService.getSearch().rooms);
        return this.http.get(Config.API_ROUTES.ostravel + "price", {search: params})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getHotel(id): Observable<Details> {
        return this.http.get(Config.API_ROUTES.ostravel + "hotels" + '/' + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getSaisons(id): Observable<Object[]> {
        return this.http.get(Config.API_ROUTES.ostravel + "hotels" + '/' + id + '/saisons')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}