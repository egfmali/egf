import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {NotificationService} from "../../../../components/extra/notification/notification.service";
import {AuthService} from "../../../../shared/services/auth.service";
import {UserService} from "../../service/user.service";
import {egfOption} from "../../../../../environments/egf.option";
import {ProfilService} from "../../../profils/service/profil.service";
import {Observable} from "rxjs";
import {Profil} from "../../../profils/model/profil";
import {User} from "../../model/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  isLoading: boolean = false;

  form: NgForm;

  profils$: Observable<Profil[]>;

  user: User ;

  constructor(
      private notification: NotificationService,
      private auth: AuthService,
      private userService: UserService,
      private profilService: ProfilService,
  ) { }



  ngOnInit() {
      if(this.user==null) this.user=new User();
      this.profils$ = this.profilService.findAll();
  }

  async onSubmit(form: NgForm)  {
    console.log('### onSubmit ###', form.value);


    return;

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
