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

    addClient(user:any): Observable<any> {
        let params = new URLSearchParams();
        params.set('token', this.loginService.logedUser.token.toString());
        params.set('userEmail', user.email);
        params.set('userUsername', user.username);
        params.set('userNom', user.nom);
        params.set('userPrenom', user.prenom);
        params.set('userPassword', user.password);
        params.set('userResponsable', user.responsable);
        return this.http.get(Config.API_ROUTES.ostravel + "api/user/create", {search: params})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    lockUser(id): Observable<any> {
        let params = new URLSearchParams();
        params.set('token', this.loginService.logedUser.token.toString());
        return this.http.get(Config.API_ROUTES.ostravel + "api/users/"+id+"/lock", {search: params})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }


    getClients(): Observable<any> {
        let params = new URLSearchParams();
        params.set('token', this.loginService.logedUser.token.toString());
        return this.http.get(Config.API_ROUTES.ostravel + "api/amicale/clients", {search: params})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
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