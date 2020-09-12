import { Component, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import {NotificationService} from "../../components/extra/notification/notification.service";
import {AuthService} from "../../shared/services/auth.service";
import {egfOption} from "../../../environments/egf.option";
import {User} from "../../administration/users/model/user";

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {

    isLoading: boolean = false;

    @ViewChild('f', {static: false}) form: NgForm;


    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private notification: NotificationService,
        private auth: AuthService,
        ) { }


    async onSubmit(form: NgForm)  {
        console.log('### onSubmit ###');
        if(form.dirty && form.valid) {
            this.isLoading = true;
            console.log('form value', form.value);
            await this.auth.doLogin(form.value)
                .then((user: User) => {
                    console.log('doLogin ok', user);
                    this.isLoading = false;
                    if(user.status) {
                        this.notification.success(egfOption.successMessage);
                        this.router.navigateByUrl('dashboard/dashboard1');
                    }else {
                        this.notification.info(egfOption.authenticationInactifMessage);
                    }
                  },
                )
                .catch((ko) => {
                    this.notification.error(egfOption.authenticationFailedMessage);
                    this.notification.error(ko.message);
                    this.isLoading = false;
                });

        }
    }

    async doGoogleLogin()  {
        console.log('### doGoogleLogin ###');
            await this.auth.doGoogleLogin()
                .then((user) => {
                    console.log('doLogin ok', user.user);
                    this.isLoading = false;
                    this.notification.success(egfOption.successMessage);
                    this.router.navigateByUrl('dashboard/dashboard1');

                  },
                )
                .catch((ko) => {
                    this.notification.error(ko.message);
                    console.log('doLogin ko', ko);
                    this.isLoading = false;
                });
    }

    async doFacebookLogin()  {
        console.log('### doFacebookLogin ###');
            await this.auth.doFacebookLogin()
                .then((user) => {
                    console.log('doLogin ok', user.user);
                    this.isLoading = false;
                    this.notification.success(egfOption.successMessage);
                    this.router.navigateByUrl('dashboard/dashboard1');

                  },
                )
                .catch((ko) => {
                    this.notification.error(ko.message);
                    console.log('doLogin ko', ko);
                    this.isLoading = false;
                });
    }

    async doTwitterLogin()  {
        console.log('### doTwitterLogin ###');
            await this.auth.doTwitterLogin()
                .then((user) => {
                    console.log('doLogin ok', user.user);
                    this.isLoading = false;
                    this.notification.success(egfOption.successMessage);
                    this.router.navigateByUrl('dashboard/dashboard1');

                  },
                )
                .catch((ko) => {
                    this.notification.error(ko.message);
                    console.log('doLogin ko', ko);
                    this.isLoading = false;
                });
    }


    // On Forgot password link click
    onForgotPassword() {
        this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    }
    // On registration link click
    onRegister() {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    }
}
