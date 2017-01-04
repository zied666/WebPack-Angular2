import {Pipe, PipeTransform} from '@angular/core';
import {DeviseService} from "../services/devise.service";

@Pipe({
    name: 'devise',
    pure: false
})
export class DevisePipe implements PipeTransform {


    constructor(private deviseService:DeviseService) {
    }

    transform(price: number) {
        if(this.deviseService.currentDevise)
        {
            return (price*this.deviseService.currentDevise.montant).toFixed(this.deviseService.currentDevise.scale)+' '+this.deviseService.currentDevise.code;
        }
        return price+" DT";
    }
}