import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'showSigne'})
export class ShowsignePipe implements PipeTransform {
    transform(phrase: string) {
        if(phrase)
            return "%";
        else
            return 'TND';
    }
}