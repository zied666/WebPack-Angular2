import {Component, OnInit, trigger, state, transition, animate, style} from '@angular/core';
import {LoginService} from "../../shared/services/login.service";
import {AmicaleService} from "../../shared/services/amicale.service";

class NewUser {
    email: string;
    username: string;
    nom: string;
    prenom: string;
    password: string;
    passwordConfirmation: string;
    responsable: boolean;
}

@Component({
    templateUrl: "addClient.html",
    styleUrls: ['form.css'],
    animations: [
        trigger('errorMessage', [
            state("true", style({opacity: 0, display: "none"})),
            state("false", style({opacity: 1, display: "block"})),
            transition('1 => 0', animate('.5s'))
        ])
    ]
})

export class AmicaleAddclientComponent implements OnInit {

    private success: Boolean;
    private loading: Boolean;
    private user: NewUser;


    constructor(private loginService: LoginService, private amicaleService: AmicaleService) {
    }


    ngOnInit() {
        this.user = new NewUser();
        this.loginService.verifUserLogged();

    }

    addClient() {
        if (this.user.password == this.user.passwordConfirmation) {
            this.loading = true;
            this.amicaleService.verif(this.user).subscribe(response => {
                if (response.status == "success")
                    this.submitClient();
                else {
                    alert(response.msg);
                    this.loading = false;
                }
            });
        } else
            alert('Mot de passe ne sont pas identique');
    }

    submitClient() {
        this.amicaleService.addClient(this.user).subscribe(response => {
            if (response.status == "success") {
                this.user = new NewUser();
                this.success = true;
                setTimeout(() => this.success = false, 3000);
            }
            else
                alert(response.msg);
            this.loading = false;
        });
    }
}