import {Injectable}    from '@angular/core';
import 'rxjs/add/operator/toPromise';
import "rxjs";
import "rxjs/Rx";

@Injectable()
declare var classie: any;
export class LoadingService  {

    start(){
        classie.add( document.querySelector('.' + "la-anim-10"), 'la-animate');
    }

    end(){
        classie.remove(document.querySelector('.' + "la-anim-10"), 'la-animate');
    }

}