import {Component, ViewChild} from '@angular/core';
import {ColumnMode, SelectionType} from "@swimlane/ngx-datatable/release";
import {Observable} from "rxjs";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NotificationService} from "../../../components/extra/notification/notification.service";
import {egfOption} from "../../../../environments/egf.option";
import {Helpers} from "../../../shared/utility";
import swal, {SweetAlertResult} from "sweetalert2";;
import PlaceResult = google.maps.places.PlaceResult;
import {Location, Appearance, GermanAddress} from '@angular-material-extensions/google-maps-autocomplete';
import {Societe} from "../../model/societe";
import {SocieteService} from "../../service/societe.service";
import {environment} from "../../../../environments/environment";
import {VilleEscale} from "../../model/ville-escale";
import * as firebase from 'firebase';
import GeoPoint = firebase.firestore.GeoPoint;


@Component({
    selector: 'app-societe',
    templateUrl: './societe.component.html',
    styleUrls: ['./societe.component.scss'],
})

export class SocieteComponent{


    selectionType = SelectionType.cell;

    pays:any;

    closeResult: string;
    societeSelected: Societe;

    societes$: Observable<Societe[]>


    columns = [
        { name: 'createdDate', sortable: true },
        { name: 'createdByDisplayName',sortable: true },
        { name: 'libelle',sortable: true },
        { name: 'code',sortable: true },
        { name: 'phone',sortable: true },
        { name: 'email',sortable: true },
        { name: 'ville',sortable: true },
        { name: 'address', sortable: false },
    ];


    isLoading: boolean = false;

    @ViewChild('f', {static: false}) form: NgForm;

    constructor(
        private service:SocieteService,
        private modal: NgbModal,
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private notification: NotificationService,
        ) {
            this.pays = environment.pays

            this.initData();
        }

        toDate(value){
             return Helpers.fromaTimestamp(value);
        }

        initData(){
            this.societes$ = this.service.findAll();
        }

    updateFilter(event):void {
        const val = event.target.value.toLowerCase();
        console.log('updateFilter', val);
       (val==null || val==undefined) ? this.initData():this.societes$ = this.service.search(val);
        // this.table.offset = 0;
    }


    onSubmit(): void {
        console.log('onSubmit', this.societeSelected);
        this.societeSelected.uid ? this.update():this.add();
    }

    add(): void {
        console.log('### add ###');
        this.service.findAttribute('libelle', this.societeSelected.libelle)
            .subscribe(
                response => {

                    if(response===undefined){
                        this.societeSelected.keys = Helpers.createKeywords(this.societeSelected.libelle);
                        this.service.create(this.societeSelected).subscribe(
                            response => {
                                this.notification.success(egfOption.successMessage)
                                this.modal.dismissAll();
                            },error => {
                                this.notification.error(egfOption.errorMessage);
                            },
                        );
                    }else {
                      this.notification.error(`Cette point de depot ${this.societeSelected.libelle} existe !`)
                    }
                },
                error => {
                    this.notification.error(egfOption.errorMessage);
                }
            );
    }

    update(): void {
        console.log('### update ###');
        this.societeSelected.keys = Helpers.createKeywords(this.societeSelected.libelle);
        this.service.update(this.societeSelected.uid,this.societeSelected).subscribe(
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
        this.societeSelected = new Societe();
        this.modal.open(content,{size: 'lg'})
            .result
            .then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.societeSelected=null;
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    openEdite(content,value) {
        console.log("openEdite", value)
        this.societeSelected = value;
        this.modal.open(content,{size: 'lg'})
            .result
            .then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.societeSelected=null;
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



    onSelect(event) {
        const selected: Societe = (event.selected)[0];
        console.log('Select selected', selected);
        console.log('Select selected', selected.ref);

    }


    onActivate({event}) {
        console.log('Activate Event', event);
    }

    onSelected($event) {
        console.log('onSelected ===>>>', $event);
        console.log('onSelected value ===>>>', $event.value);
    }
}
