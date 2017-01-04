import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'addDate'})
export class AddDatePipe implements PipeTransform {
    transform(date:string,day:number) {
        let result = new Date(date);
        result.setDate(result.getDate() + day);
        return result;

    }
}