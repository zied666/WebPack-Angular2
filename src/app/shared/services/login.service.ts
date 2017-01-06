import {Injectable}    from '@angular/core';
import {Http, URLSearchParams, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import "rxjs";
import "rxjs/Rx";
import {Observable} from "rxjs";
import {User} from "../../login/user";
import {Config} from "../config/config";

@Injectable()
export class LoginService {
    logedUser: User = null;

    constructor(private http: Http) {
    }

    connection(email, password): Observable<any> {
        let params = new URLSearchParams();
        params.set('email', email);
        params.set('password', password);
        return this.http.get(Config.API_ROUTES.ostravel + "api/connection", {search: params})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getPhoto() {
        if (this.logedUser && this.logedUser.photo)
            return Config.API_ROUTES.ostravel + this.logedUser.photo;
        else
            return Config.LOGO;
    }

    getAmicaleLibelle() {
        if (this.logedUser && this.logedUser.amicale)
            return this.logedUser.amicale.libelle;
        else
            return Config.AGENCE;
    }

    getAdresse() {
        if (this.logedUser && this.logedUser.amicale)
            return this.logedUser.amicale.adresse;
        else
            return Config.ADRESSE;
    }

    getTel() {
        if (this.logedUser && this.logedUser.amicale)
            return this.logedUser.amicale.tel;
        else
            return Config.TEL;
    }

    update(user:User): Observable<any> {
        let params = new URLSearchParams();
        params.set('idClient', this.logedUser.id.toString());
        params.set('nom', user.nom);
        params.set('prenom', user.prenom);
        params.set('email', user.email);
        params.set('tel',user.tel);
        return this.http.get(Config.API_ROUTES.ostravel + "api/profile", {search: params})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }


}