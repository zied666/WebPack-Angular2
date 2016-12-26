import {Injectable}    from '@angular/core';
import 'rxjs/add/operator/toPromise';
import "rxjs";
import "rxjs/Rx";

declare var classie: any;
@Injectable()
export class LoadingService  {

    start(){
        classie.add( document.querySelector('.' + "la-anim-10"), 'la-animate');
    }

    end(){
        classie.remove(document.querySelector('.' + "la-anim-10"), 'la-animate');
    }

}