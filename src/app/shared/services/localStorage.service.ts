import {Injectable}    from '@angular/core';
import 'rxjs/add/operator/toPromise';
import "rxjs";
import "rxjs/Rx";

@Injectable()
export class LocalStorageService {
    static removeItem(item: string) {
        sessionStorage.removeItem(item);
    }

    static getItem(item: string) {
        return JSON.parse(sessionStorage.getItem(item));
    }

    static setItem(item: string, data: any) {
        sessionStorage.setItem(item, JSON.stringify(data));
    }
}