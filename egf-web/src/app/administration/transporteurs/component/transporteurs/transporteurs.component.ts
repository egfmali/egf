import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {ColumnMode, DatatableComponent, SelectionType} from "@swimlane/ngx-datatable/release";
import {Observable} from "rxjs";
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
import {TransporteurService} from "../../service/transporteur.service";
import {Transporteur} from "../../model/transporteur";
import {ProfilService} from "../../../profils/service/profil.service";
import {Profil} from "../../../profils/model/profil";
import {User} from "../../../users/model/user";


@Component({
    selector: 'app-transporteurs',
    templateUrl: './transporteurs.component.html',
    styleUrls: ['./transporteurs.component.scss'],
})

export class TransporteursComponent{


    selectionType = SelectionType.cell;

    closeResult: string;

    transporteurSelected: Transporteur;

    transporteurs$: Observable<Transporteur[]>

    profils$: Observable<Profil[]>

    columnMode = ColumnMode.force;

    email: string;
    password: string;

    // Table Column Titles
    columns = [
        { name: 'createdDate', sortable: true },
        { name: 'status',sortable: true },
        { name: 'Name',sortable: true },
        { name: 'code',sortable: true },
        { name: 'type',sortable: true },
        { name: 'phone',sortable: true },
    ];


    isLoading: boolean = false;

    @ViewChild('f', {static: false}) form: NgForm;

    constructor(
        private profilService:ProfilService,
        private service:TransporteurService,
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
            this.transporteurs$ = this.service.findAll();
        }

    updateFilter(event):void {
        const val = event.target.value.toLowerCase();
        console.log('updateFilter', val);
       (val==null || val==undefined) ? this.initData():this.transporteurs$ = this.service.search(val);
        // this.table.offset = 0;
    }


    onSubmit(): void {
        console.log('onSubmit', this.transporteurSelected);

        this.transporteurSelected.uid ? this.update():this.add();
    }

    add(): void {
        console.log('### add ###');
        this.profilService.findAttribute('name', this.transporteurSelected.code)
            .subscribe(
                response => {

                    if(response===undefined){
                        this.transporteurSelected.keys = Helpers.createKeywords(this.transporteurSelected.code);
                        this.service.create(this.transporteurSelected).subscribe(
                            response => {
                                this.notification.success(egfOption.successMessage)
                                this.modal.dismissAll();
                            },error => {
                                this.notification.error(egfOption.errorMessage);
                            },
                        );
                    }else {
                      this.notification.error(`Le profil ${this.transporteurSelected.code} existe !`)
                    }
                },
                error => {
                    this.notification.error(egfOption.errorMessage);
                }
            );
    }

    update(): void {
        console.log('### update ###');
        this.transporteurSelected.keys = Helpers.createKeywords(this.transporteurSelected.code);
        this.service.update(this.transporteurSelected.uid,this.transporteurSelected).subscribe(
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
        this.transporteurSelected = new Transporteur();
        this.modal.open(content)
            .result
            .then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.transporteurSelected=null;
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    openEdite(content,value) {
        console.log("openEdite", value)
        this.transporteurSelected = value;
        this.modal.open(content)
            .result
            .then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.transporteurSelected=null;
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
