import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import {AuthService} from "../../shared/services/auth.service";
import {NotificationService} from "../../components/extra/notification/notification.service";

@Component({
    selector: 'app-forgot-password-page',
    templateUrl: './forgot-password-page.component.html',
    styleUrls: ['./forgot-password-page.component.scss']
})

export class ForgotPasswordPageComponent {
    @ViewChild('f', {static: false}) form: NgForm;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private auth: AuthService,
        private notification: NotificationService,

        ) { }

    // On submit click, reset form fields
    onSubmit(form: NgForm) {

        console.log('onSubmit', form.value)

        this.auth.sendPasswordResetEmail(form.value.email)
            .then((res)=>{
                console.log('onSubmit ok')
                this.notification.success('Le lien de réinitialisation a été envoyé à : ' + form.value.email)
            })
            .catch((err)=>{
                console.log('onSubmit err', err)
                this.notification.error('Impossible d\'envoyer le lien de réinitialisation, veuillez réessayer plus tard');
            })
        form.reset();
    }

    // On login link click
    onLogin() {
        this.router.navigate(['login'], { relativeTo: this.route.parent });
    }

    // On registration link click
    onRegister() {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    }
}
