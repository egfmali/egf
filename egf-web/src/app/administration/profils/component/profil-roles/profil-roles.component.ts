import {Component} from '@angular/core';
import {ProfilService} from "../../service/profil.service";
import {Observable} from "rxjs";
import {Profil} from "../../model/profil";
import {ActivatedRoute, Router} from "@angular/router";
import {NotificationService} from "../../../../components/extra/notification/notification.service";
import {egfOption} from "../../../../../environments/egf.option";
import {Helpers} from "../../../../shared/utility";
import swal, {SweetAlertResult} from "sweetalert2";
import {Role} from "../../../users/model/role";
import {RoleService} from "../../../users/service/role.service";


@Component({
    selector: 'app-profil-roles',
    templateUrl: './profil-roles.component.html',
    styleUrls: ['./profil-roles.component.scss'],
})

export class ProfilRolesComponent {


    profil$: Observable<Profil>
    profil: Profil;


    rolesSource: Role[];
    rolesTarget: Role[];
    loading: boolean = false;


    constructor(
        private profilService: ProfilService,
        private roleService: RoleService,
        private notification: NotificationService,
        private route: ActivatedRoute,
        private router: Router,
        // private route: ActivatedRouteSnapshot,
        // private state: RouterStateSnapshot
    ) {
        this.initData();
    }

    toDate(value) {
        return Helpers.fromaTimestamp(value);
    }

    initData() {
        this.rolesSource = this.roleService.roles;

        console.log('this.sourceRole', this.rolesSource);

        const uid = this.route.snapshot.paramMap.get('uid');
        this.profil$ = this.profilService.find(uid);
        this.profil$.subscribe(
            (response)=>{
                this.profil = response;
                this.rolesTarget = this.profil.roles;
                 this.filterRoles();
            }
        )

    }


    update() {
        console.log('### update ###');
        console.log('### update source Roles ###', this.rolesSource);
        console.log('### update source Roles ###', this.rolesTarget);

        if (!this.profil) {
            return;
        }

        this.profil.roles = this.rolesTarget;

        this.profilService.update(this.profil.uid, this.profil)
            .subscribe((response) => {
                    this.notification.success(egfOption.successMessage);
                }, error => {
                    console.log('error',error);
                    this.notification.error(egfOption.errorMessage);
                }
            )
    }

    filterRoles() {
        const selectedRoles = this.rolesTarget.map(role => role.name);

        this.rolesSource = this.rolesSource.filter(role => !selectedRoles.includes(role.name));
    }

    filter(filter, result) {
        for (let i = 0; i < filter.length; i++) {
            for (let j = 0; j < result.length; j++) {
                if (filter[i].name === result[j].name) {
                    result.splice(j, 1)
                }
            }
        }
        return result;
    }


    confirmCancelButton() {
        swal.fire({
            title: 'Êtes-vous sûr?',
            text: "Tous les utilisateurs ayant ce profil bénéficieront de ces roles !",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0CC27E',
            cancelButtonColor: '#FF586B',
            confirmButtonText: 'Oui, appliquerz',
            cancelButtonText: 'Non, annulez',
            confirmButtonClass: 'btn btn-success btn-raised mr-5',
            cancelButtonClass: 'btn btn-danger btn-raised',
            buttonsStyling: false
        }).then((response: SweetAlertResult) => {

            if (response != undefined && response.value) {
                this.update();
            }
            console.log('confirmCancelButton value ===>>>', response.value);
        });
    }


}
