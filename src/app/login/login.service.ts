import {Injectable}    from '@angular/core';
import {Http, URLSearchParams, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import "rxjs";
import "rxjs/Rx";
import {Observable} from "rxjs";
import {User} from "./user";

@Injectable()
export class LoginService {
    private heroesUrl = 'http://os-travel.com/api/connection';  // URL to web api
    logedUser:User = null;
    constructor(private http: Http) {
    }

    connection(email, password): Observable<any> {
        let params = new URLSearchParams();
        params.set('email', email);
        params.set('password', password);
        return this.http.get(this.heroesUrl, {search: params})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }


}