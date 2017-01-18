import {Injectable}    from '@angular/core';
import {Http, URLSearchParams, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import "rxjs";
import "rxjs/Rx";
import {Config} from "../config/config";
import {SearchService} from "./search.service";
import {LoginService} from "./login.service";

@Injectable()
export class AmicaleService {
    constructor(private http: Http, private searchService: SearchService, private loginService: LoginService) {
    }

    getAmicale(): Observable<any> {
        let params = new URLSearchParams();
        params.set('token', this.loginService.logedUser.token.toString());
        return this.http.get(Config.API_ROUTES.ostravel + "api/amicale", {search: params})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    updateAmicale(amicale:any): Observable<any> {
        let params = new URLSearchParams();
        params.set('token', this.loginService.logedUser.token.toString());
        params.set('libelleAmicale', amicale.libelle.toString());
        params.set('adresseAmicale', amicale.adresse.toString());
        params.set('telAmicale', amicale.tel.toString());
        params.set('faxAmicale', amicale.fax.toString());
        params.set('matriculeFiscaleAmicale', amicale.matricule_fiscale.toString());
        params.set('registreCommercieAmicale', amicale.registre_commercie.toString());
        return this.http.get(Config.API_ROUTES.ostravel + "api/updateamicale", {search: params})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    updateMargeAmicale(amicale:any): Observable<any> {
        let params = new URLSearchParams();
        params.set('token', this.loginService.logedUser.token.toString());
        params.set('margeSHT', amicale.marge_s_h_t.toString());
        params.set('margePourSHT', amicale.marge_pour_s_h_t.toString());
        return this.http.get(Config.API_ROUTES.ostravel + "api/updatemargeamicale", {search: params})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getBookings(): Observable<any[]> {
        let params = new URLSearchParams();
        params.set('token', this.loginService.logedUser.token.toString());
        return this.http.get(Config.API_ROUTES.ostravel + "api/amicale/hotels", {search: params})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }


}