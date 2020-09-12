import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {ColumnMode, DatatableComponent, SelectionType} from "@swimlane/ngx-datatable/release";
import {ProfilService} from "../../service/profil.service";
import {Observable} from "rxjs";
import {Profil} from "../../model/profil";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NotificationService} from "../../../../components/extra/notification/notification.service";
import {AuthService} from "../../../../shared/services/auth.service";
import {QueryFn} from "@angular/fire/firestore";
import {egfOption} from "../../../../../environments/egf.option";
import {Helpers} from "../../../../shared/utility";
import * as alertFunctions from "../../../../shared/data/sweet-alerts";
import swal, {SweetAlertResult} from "sweetalert2";


@Component({
    selector: 'app-profils-list',
    templateUrl: './profil-list.component.html',
    styleUrls: ['./profil-list.component.scss'],
})

export class ProfilListComponent{


    selectionType = SelectionType.cell;

    closeResult: string;
    profilSelected: Profil;

    profils$: Observable<Profil[]>

    columnMode = ColumnMode.force;
    // Table Column Titles
    columns = [{ name: 'createdDate', sortable: true }, { name: 'createdByDisplayName',sortable: true },{ name: 'Name',sortable: true }, { name: 'Description', sortable: false }, ];


    isLoading: boolean = false;

    @ViewChild('f', {static: false}) form: NgForm;

    constructor(
        private profilService:ProfilService,
        private modal: NgbModal,
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private notification: NotificationService,
        ) {
         this.initData();
        }

        toDate(value){
        return Helpers.fromaTimestamp(value);
        }

        initData(){
            this.profils$ = this.profilService.findAll();
        }

    updateFilter(event):void {
        const val = event.target.value.toLowerCase();
        console.log('updateFilter', val);
       (val==null || val==undefined) ? this.initData():this.profils$ = this.profilService.search(val);
        // this.table.offset = 0;
    }


    onSubmit(): void {
        console.log('onSubmit', this.profilSelected);

        this.profilSelected.uid ? this.update():this.add();
    }

    add(): void {
        console.log('### add ###');
        this.profilService.findAttribute('name', this.profilSelected.name)
            .subscribe(
                response => {

                    if(response===undefined){
                        this.profilSelected.keys = Helpers.createKeywords(this.profilSelected.name);
                        this.profilService.create(this.profilSelected).subscribe(
                            response => {
                                this.notification.success(egfOption.successMessage)
                                this.modal.dismissAll();
                            },error => {
                                this.notification.error(egfOption.errorMessage);
                            },
                        );
                    }else {
                      this.notification.error(`Le profil ${this.profilSelected.name} existe !`)
                    }
                },
                error => {
                    this.notification.error(egfOption.errorMessage);
                }
            );
    }

    update(): void {
        console.log('### update ###');
        this.profilSelected.keys = Helpers.createKeywords(this.profilSelected.name);
        this.profilService.update(this.profilSelected.uid,this.profilSelected).subscribe(
            response => {
                console.log('response', response);
                this.notification.success(egfOption.successMessage)
                this.modal.dismissAll();
            },error => {
                console.log('onSubmit', error);
                this.notification.error(egfOption.errorMessage);
            },
        );
    }



    // Open default modal
    openAdd(content):void {
        this.profilSelected = new Profil();
        this.modal.open(content)
            .result
            .then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.profilSelected=null;
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    openEdite(content,value) {
        console.log("openEdite", value)
        this.profilSelected = value;
        this.modal.open(content)
            .result
            .then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.profilSelected=null;
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });

    }

    // This function is used in open
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }




    onSelect(event) {
        const selected: Profil = (event.selected)[0];

        console.log('Select selected', selected);
        console.log('Select selected', selected.ref);

    }


    onActivate({event}) {
        console.log('Activate Event', event);
    }

    confirmCancelButton(uid){
        swal.fire({
            title: 'Êtes-vous sûr?',
            text: "Vous ne pourrez pas revenir en arrière !",
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#0CC27E',
            cancelButtonColor: '#FF586B',
            confirmButtonText: 'Oui, supprimez',
            cancelButtonText: 'Non, annulez',
            confirmButtonClass: 'btn btn-success btn-raised mr-5',
            cancelButtonClass: 'btn btn-danger btn-raised',
            buttonsStyling: false
        }).then((response: SweetAlertResult)=>{

            if(response!=undefined && response.value){
                this.profilService.delete(uid)
            .then((res)=>this.notification.success(egfOption.successMessage))
            .catch((error)=> this.notification.error(egfOption.errorMessage))
            }
            console.log('confirmCancelButton value ===>>>',response.value);
        });
    }



}
