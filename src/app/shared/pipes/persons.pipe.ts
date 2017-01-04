import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'persons'})
export class PersonsPipe implements PipeTransform {
    transform(i: number) {
        let response="";
        for (var _i = 1; _i <= i; _i++)
            response+="<i class='im im-business-person'></i>";
        return response;
    }
}