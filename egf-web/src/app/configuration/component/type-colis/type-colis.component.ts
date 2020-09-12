import {Component, ViewChild} from '@angular/core';
import {ColumnMode, SelectionType} from "@swimlane/ngx-datatable/release";
import {Observable} from "rxjs";
import {TypeColis} from "../../model/type-colis";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NotificationService} from "../../../components/extra/notification/notification.service";
import {AuthService} from "../../../shared/services/auth.service";
import {QueryFn} from "@angular/fire/firestore";
import {egfOption} from "../../../../environments/egf.option";
import {Helpers} from "../../../shared/utility";
import * as alertFunctions from "../../../shared/data/sweet-alerts";
import swal, {SweetAlertResult} from "sweetalert2";
import {TypeColisService} from "../../service/type-colis.service";


@Component({
    selector: 'app-type-colis',
    templateUrl: './type-colis.component.html',
    styleUrls: ['./type-colis.component.scss'],
})

export class TypeColisComponent{


    selectionType = SelectionType.cell;

    closeResult: string;
    typeColisSelected: TypeColis;

    typeColiss$: Observable<TypeColis[]>

    columnMode = ColumnMode.force;

    columns = [{ name: 'createdDate', sortable: true }, { name: 'createdByDisplayName',sortable: true },{ name: 'code',sortable: true },{ name: 'libelle',sortable: true }, { name: 'description', sortable: false }, ];


    isLoading: boolean = false;

    @ViewChild('f', {static: false}) form: NgForm;

    constructor(
        private service:TypeColisService,
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
            this.typeColiss$ = this.service.findAll();
        }

    updateFilter(event):void {
        const val = event.target.value.toLowerCase();
        console.log('updateFilter', val);
       (val==null || val==undefined) ? this.initData():this.typeColiss$ = this.service.search(val);
        // this.table.offset = 0;
    }


    onSubmit(): void {
        console.log('onSubmit', this.typeColisSelected);
        this.typeColisSelected.uid ? this.update():this.add();
    }

    add(): void {
        console.log('### add ###');
        this.service.findAttribute('libelle', this.typeColisSelected.libelle)
            .subscribe(
                response => {

                    if(response===undefined){
                        this.typeColisSelected.keys = Helpers.createKeywords(this.typeColisSelected.libelle);
                        this.service.create(this.typeColisSelected).subscribe(
                            response => {
                                this.notification.success(egfOption.successMessage)
                                this.modal.dismissAll();
                            },error => {
                                this.notification.error(egfOption.errorMessage);
                            },
                        );
                    }else {
                      this.notification.error(`Le typde de Colis ${this.typeColisSelected.libelle} existe !`)
                    }
                },
                error => {
                    this.notification.error(egfOption.errorMessage);
                }
            );
    }

    update(): void {
        console.log('### update ###');
        this.typeColisSelected.keys = Helpers.createKeywords(this.typeColisSelected.libelle);
        this.service.update(this.typeColisSelected.uid,this.typeColisSelected).subscribe(
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
        this.typeColisSelected = new TypeColis();
        this.modal.open(content)
            .result
            .then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.typeColisSelected=null;
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    openEdite(content,value) {
        console.log("openEdite", value)
        this.typeColisSelected = value;
        this.modal.open(content)
            .result
            .then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.typeColisSelected=null;
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
        const selected: TypeColis = (event.selected)[0];

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
                this.service.delete(uid)
            .then((res)=>this.notification.success(egfOption.successMessage))
            .catch((error)=> this.notification.error(egfOption.errorMessage))
            }
            console.log('confirmCancelButton value ===>>>',response.value);
        });
    }



}
