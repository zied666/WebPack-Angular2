import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'addDate'})
export class AddDatePipe implements PipeTransform {
    transform(date:string,days:number) {
        let result = new Date(date);
        return new Date(result.setTime( result.getTime() + days * 86400000 ));
    }
}