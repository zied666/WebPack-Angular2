import {Component, Input, trigger, state, style, animate, transition} from '@angular/core';
import {AmicaleService} from "../../../../shared/services/amicale.service";


@Component({
    templateUrl: "passwordClient.html",
    selector: "amicale-client-update-password",
    styleUrls: ['form.css'],
    animations: [
        trigger('errorMessage', [
            state("true", style({opacity: 0, display: "none"})),
            state("false", style({opacity: 1, display: "block"})),
            transition('1 => 0', animate('.5s'))
        ])
    ]
})

export class AmicaleUpdatePasswordClientComponent {


    success: boolean;
    loading: boolean;
    password: string;
    passwordConfirmation: string;
    @Input() client: any;

    constructor(private amicaleService: AmicaleService) {
    }


    update() {
        this.loading = true;
        this.amicaleService.updateEmailProfile(this.client).subscribe(response => {
            if (response.status == "success") {
                this.success = true;
                setTimeout(() => this.success = false, 3000);
            }
            else
                alert(response.msg);
            this.loading = false;
        });
    }

}