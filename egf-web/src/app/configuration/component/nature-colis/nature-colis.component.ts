import {Component, ViewChild} from '@angular/core';
import {ColumnMode, SelectionType} from "@swimlane/ngx-datatable/release";
import {Observable} from "rxjs";
import {NatureColis} from "../../model/nature-colis";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NotificationService} from "../../../components/extra/notification/notification.service";
import {egfOption} from "../../../../environments/egf.option";
import {Helpers} from "../../../shared/utility";
import swal, {SweetAlertResult} from "sweetalert2";
import {NatureColisService} from "../../service/nature-colis.service";


@Component({
    selector: 'app-nature-colis',
    templateUrl: './nature-colis.component.html',
    styleUrls: ['./nature-colis.component.scss'],
})

export class NatureColisComponent{


    selectionType = SelectionType.cell;

    closeResult: string;
    natureColisSelected: NatureColis;

    natureColiss$: Observable<NatureColis[]>

    columnMode = ColumnMode.force;

    columns = [{ name: 'createdDate', sortable: true }, { name: 'createdByDisplayName',sortable: true },{ name: 'libelle',sortable: true }, { name: 'description', sortable: false }, ];


    isLoading: boolean = false;

    @ViewChild('f', {static: false}) form: NgForm;

    constructor(
        private service:NatureColisService,
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
            this.natureColiss$ = this.service.findAll();
        }

    updateFilter(event):void {
        const val = event.target.value.toLowerCase();
        console.log('updateFilter', val);
       (val==null || val==undefined) ? this.initData():this.natureColiss$ = this.service.search(val);
        // this.table.offset = 0;
    }


    onSubmit(): void {
        console.log('onSubmit', this.natureColisSelected);
        this.natureColisSelected.uid ? this.update():this.add();
    }

    add(): void {
        console.log('### add ###');
        this.service.findAttribute('libelle', this.natureColisSelected.libelle)
            .subscribe(
                response => {

                    if(response===undefined){
                        this.natureColisSelected.keys = Helpers.createKeywords(this.natureColisSelected.libelle);
                        this.service.create(this.natureColisSelected).subscribe(
                            response => {
                                this.notification.success(egfOption.successMessage)
                                this.modal.dismissAll();
                            },error => {
                                this.notification.error(egfOption.errorMessage);
                            },
                        );
                    }else {
                      this.notification.error(`Cette nature du Colis ${this.natureColisSelected.libelle} existe !`)
                    }
                },
                error => {
                    this.notification.error(egfOption.errorMessage);
                }
            );
    }

    update(): void {
        console.log('### update ###');
        this.natureColisSelected.keys = Helpers.createKeywords(this.natureColisSelected.libelle);
        this.service.update(this.natureColisSelected.uid,this.natureColisSelected).subscribe(
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
        this.natureColisSelected = new NatureColis();
        this.modal.open(content)
            .result
            .then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.natureColisSelected=null;
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    openEdite(content,value) {
        console.log("openEdite", value)
        this.natureColisSelected = value;
        this.modal.open(content)
            .result
            .then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.natureColisSelected=null;
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
        const selected: NatureColis = (event.selected)[0];

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
