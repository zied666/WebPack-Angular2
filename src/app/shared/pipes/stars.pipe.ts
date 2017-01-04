import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'stars'})
export class StarsPipe implements PipeTransform {
    transform(i) {
        if(Number(i))
        {
            let response='<ul class="icon-group booking-item-rating-stars">';
            for (let _i = 1; _i <= i; _i++)
                response+="<i class='fa fa-star'></i>";
            response+='</ul>';
            return response;
        }
    }
}