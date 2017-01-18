import {Injectable}    from '@angular/core';
import {Http, URLSearchParams, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import "rxjs";
import "rxjs/Rx";
import {Config} from "../config/config";
import {SearchService} from "./search.service";
import {LoginService} from "./login.service";

@Injectable()
export class BookingService {
    constructor(private http: Http, private searchService: SearchService, private loginService: LoginService) {
    }

    getBookings(): Observable<any[]> {
        let params = new URLSearchParams();
        params.set('token', this.loginService.logedUser.token.toString());
        return this.http.get(Config.API_ROUTES.ostravel + "api/reservations", {search: params})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getBooking(id): Observable<any> {
        let params = new URLSearchParams();
        params.set('token', this.loginService.logedUser.token.toString());
        return this.http.get(Config.API_ROUTES.ostravel + "api/reservations/"+id, {search: params})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    cancel(id): Observable<any> {
        let params = new URLSearchParams();
        params.set('token', this.loginService.logedUser.token.toString());
        return this.http.get(Config.API_ROUTES.ostravel + "api/reservations/"+id+"/cancel", {search: params})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    validate(id): Observable<any> {
        let params = new URLSearchParams();
        params.set('token', this.loginService.logedUser.token.toString());
        return this.http.get(Config.API_ROUTES.ostravel + "api/amicales/"+id+"/validation", {search: params})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}