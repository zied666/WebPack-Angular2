import {Injectable}    from '@angular/core';
import 'rxjs/add/operator/toPromise';
import "rxjs";
import "rxjs/Rx";
import {LocalStorageService} from "./localStorage.service";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Config} from "../config/config";

class Devise {
    public id: number;
    public libille: string;
    public code: string;
    public symbole: string;
    public montant: number;
    public scale: number;
}

@Injectable()
export class DeviseService {

    public devises: Array<Devise> = [];
    public currentDevise: Devise;

    setCurrentDevise(devise: Devise) {
        this.currentDevise = devise;
        LocalStorageService.setItem("currentDevise", devise);
    }

    getCurrentDevise() {
        return this.currentDevise;
    }

    constructor(private http: Http) {
        if (LocalStorageService.getItem("currentDevise"))
            this.currentDevise = LocalStorageService.getItem("currentDevise");
    }

    setDevises(devises: Array<Devise>) {
        this.devises = devises;

        if (this.devises.length != 0 && !this.currentDevise) {
            this.currentDevise = this.devises[0];
            LocalStorageService.setItem("currentDevise", this.devises[0]);
        }
    }

    getDevises(): Observable<Devise[]> {
        return this.http.get(Config.API_ROUTES.ostravel + "api/devises")
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }


}