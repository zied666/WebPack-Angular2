import {Injectable}    from '@angular/core';
import {Http, URLSearchParams, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import "rxjs";
import "rxjs/Rx";
import {Hotel, Details} from "../../hotel/object";
import {Config} from "../config/config";
import {SearchService} from "./search.service";
import {LoginService} from "./login.service";

@Injectable()
export class HotelService {
    constructor(private http: Http, private searchService: SearchService, private loginService: LoginService) {
    }

    booking(idHotel: number,typeChambres:string): Observable<any> {
        let params = new URLSearchParams();
        if (this.loginService.logedUser != null)
            params.set('idClient', this.loginService.logedUser.id.toString());
        params.set('rooms', this.searchService.getSearch().rooms);
        params.set('nuitees', this.searchService.getSearch().nuitees.toString());
        params.set('checkIn', this.searchService.getSearch().checkIn);
        params.set('arrangement', this.searchService.getSearch().idArrangement.toString());
        params.set('typeChambres', typeChambres);
        params.set('idHotel', idHotel.toString());
        return this.http.get(Config.API_ROUTES.ostravel + "api/booking", {search: params})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getHotels(): Observable<Hotel[]> {
        let params = new URLSearchParams();
        if (this.loginService.logedUser != null)
            params.set('idClient', this.loginService.logedUser.id.toString());
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
        return this.http.get(Config.API_ROUTES.ostravel + "api/hotels", {search: params})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getOneHotel(idHotel: number): Observable<Hotel> {
        let params = new URLSearchParams();
        if (this.loginService.logedUser != null)
            params.set('idClient', this.loginService.logedUser.id.toString());
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
        params.set('idHotel', idHotel.toString());
        return this.http.get(Config.API_ROUTES.ostravel + "api/hotels", {search: params})
            .map((res: Response) => {
                if (res.json().length == 1)
                    return res.json()[0];
                else
                    return null;
            })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getCount(): Observable<number> {
        let params = new URLSearchParams();
        if (this.loginService.logedUser != null)
            params.set('idClient', this.loginService.logedUser.id.toString());
        params.set('rooms', this.searchService.getSearch().rooms);
        params.set('nuitees', this.searchService.getSearch().nuitees.toString());
        params.set('checkIn', this.searchService.getSearch().checkIn);
        params.set('search', this.searchService.getSearch().nom);
        params.set('ville', this.searchService.getSearch().ville);
        params.set('etoile', this.searchService.getSearch().etoiles);
        params.set('orderBy', this.searchService.getSearch().orderBy);
        params.set('order', this.searchService.getSearch().order);
        return this.http.get(Config.API_ROUTES.ostravel + "api/hotelscount", {search: params})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getPrice(id): Observable<any> {
        let params = new URLSearchParams();
        params.set('nuitees', this.searchService.getSearch().nuitees.toString());
        params.set('checkIn', this.searchService.getSearch().checkIn);
        params.set('hotel', id);
        params.set('rooms', this.searchService.getSearch().rooms);
        return this.http.get(Config.API_ROUTES.ostravel + "api/price", {search: params})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getHotel(id): Observable<Details> {
        return this.http.get(Config.API_ROUTES.ostravel + "api/hotels" + '/' + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getSaisons(id): Observable<Object[]> {
        return this.http.get(Config.API_ROUTES.ostravel + "api/hotels" + '/' + id + '/saisons')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}