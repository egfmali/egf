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
import {PointDepot} from "../../model/point-depot";
import {PointDepotService} from "../../service/point-depot.service";
import {environment} from "../../../../environments/environment";
import {VilleEscale} from "../../model/ville-escale";
import * as firebase from 'firebase';
import GeoPoint = firebase.firestore.GeoPoint;


@Component({
    selector: 'app-poit-depot',
    templateUrl: './point-depot.component.html',
    styleUrls: ['./point-depot.component.scss'],
})

export class PointDepotComponent{


    selectionType = SelectionType.cell;

    pays:any;

    closeResult: string;
    pointDepotSelected: PointDepot;

    pointDepots$: Observable<PointDepot[]>

    columnMode = ColumnMode.force;

    columns = [
        { name: 'createdDate', sortable: true },
        { name: 'createdByDisplayName',sortable: true },
        { name: 'libelle',sortable: true },
        { name: 'code',sortable: true },
        { name: 'address', sortable: false },
        { name: 'nameResponsable', sortable: true },
    ];


    isLoading: boolean = false;

    @ViewChild('f', {static: false}) form: NgForm;


    public appearance = Appearance;
    public zoom: number;
    public latitude: number;
    public longitude: number;
    public selectedAddress: PlaceResult;


    constructor(
        private service:PointDepotService,
        private modal: NgbModal,
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private notification: NotificationService,
        ) {
            this.zoom = 10;
            this.latitude = 52.520008;
            this.longitude = 13.404954;

            this.pays = environment.pays

            this.setCurrentPosition();
            this.initData();
        }

        toDate(value){
             return Helpers.fromaTimestamp(value);
        }

        initData(){
            this.pointDepots$ = this.service.findAll();
        }

    updateFilter(event):void {
        const val = event.target.value.toLowerCase();
        console.log('updateFilter', val);
       (val==null || val==undefined) ? this.initData():this.pointDepots$ = this.service.search(val);
        // this.table.offset = 0;
    }


    onSubmit(): void {
        console.log('onSubmit', this.pointDepotSelected);
        this.pointDepotSelected.uid ? this.update():this.add();
    }

    add(): void {
        console.log('### add ###');
        this.service.findAttribute('libelle', this.pointDepotSelected.libelle)
            .subscribe(
                response => {

                    if(response===undefined){
                        this.pointDepotSelected.keys = Helpers.createKeywords(this.pointDepotSelected.libelle);
                        this.service.create(this.pointDepotSelected).subscribe(
                            response => {
                                this.notification.success(egfOption.successMessage)
                                this.modal.dismissAll();
                            },error => {
                                this.notification.error(egfOption.errorMessage);
                            },
                        );
                    }else {
                      this.notification.error(`Cette point de depot ${this.pointDepotSelected.libelle} existe !`)
                    }
                },
                error => {
                    this.notification.error(egfOption.errorMessage);
                }
            );
    }

    update(): void {
        console.log('### update ###');
        this.pointDepotSelected.keys = Helpers.createKeywords(this.pointDepotSelected.libelle);
        this.service.update(this.pointDepotSelected.uid,this.pointDepotSelected).subscribe(
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
        this.pointDepotSelected = new PointDepot();
        this.modal.open(content,{size: 'lg'})
            .result
            .then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.pointDepotSelected=null;
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    openEdite(content,value) {
        console.log("openEdite", value)
        this.pointDepotSelected = value;
        this.modal.open(content,{size: 'lg'})
            .result
            .then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.pointDepotSelected=null;
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
        const selected: PointDepot = (event.selected)[0];
        console.log('Select selected', selected);
        console.log('Select selected', selected.ref);

    }


    onActivate({event}) {
        console.log('Activate Event', event);
    }


    // initial user position on the map
    private setCurrentPosition() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.pointDepotSelected.geopoint = new GeoPoint(this.latitude, this.longitude);
                this.zoom = 12;
            });
            this.latitude
        }
    }

    onAutocompleteSelected(result: PlaceResult) {
        console.log('onAutocompleteSelected ===>>>', result);
        this.pointDepotSelected.geopoint = new GeoPoint(result.geometry.location.lat(), result.geometry.location.lng());
        this.pointDepotSelected.address = result.formatted_address;
    }

    onLocationSelected(location: Location) {
        console.log('onLocationSelected ===>>>', location);
        this.latitude = location.latitude;
        this.longitude = location.longitude;
        this.pointDepotSelected.geopoint = new GeoPoint(location.latitude,location.longitude);
    }

    onGermanAddressMapped($event: GermanAddress) {
        console.log('onGermanAddressMapped ===>>>', $event);
        this.pointDepotSelected.geopoint = new GeoPoint($event.geoLocation.latitude,$event.geoLocation.longitude);
        this.pointDepotSelected.address = $event.displayAddress;
        this.pointDepotSelected.pays = $event.state.long;
    }

    markerDragEnd($event) {
        console.log('markerDragEnd ===>>>', $event.coords);
        console.log('markerDragEnd lat ===>>>', $event.coords.lat);
        console.log('markerDragEnd lng ===>>>', $event.coords.lng);
        this.pointDepotSelected.geopoint = new GeoPoint($event.coords.lat,$event.coords.lng);

    }

    onSelected($event) {
        console.log('onSelected ===>>>', $event);
        console.log('onSelected value ===>>>', $event.value);
    }
}
