import { Component, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {NotificationService} from "../../components/extra/notification/notification.service";
import {AuthService} from "../../shared/services/auth.service";
import {egfOption} from "../../../environments/egf.option";

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss']
})

export class RegisterPageComponent {

    isLoading: boolean = false;

    form: NgForm;

    constructor(
        private fb: FormBuilder,
        private notification: NotificationService,
        private auth: AuthService,
        ) {
    }

    async onSubmit(form: NgForm)  {
        console.log('### onSubmit ###');

        if(form.dirty && form.valid) {
        this.isLoading = true;
        console.log('form value', form.value);
        await this.auth.doRegister(form.value)
            .then((ok) => {
                this.notification.success(egfOption.successMessage);
                console.log('register OK', ok);
                this.isLoading = false;
                this.onReset(form);
            },
        )
            .catch((ko) => {
                this.notification.error(egfOption.alternativeMessage);
                console.log('register ko', ko);
                this.isLoading = false;
                this.onReset(form);
        });

        }
    }

    onReset(form:NgForm)  {
        form.resetForm();
    }




}
