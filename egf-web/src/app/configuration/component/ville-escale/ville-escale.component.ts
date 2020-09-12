import {Component, ViewChild} from '@angular/core';
import {ColumnMode, SelectionType} from "@swimlane/ngx-datatable/release";
import {Observable} from "rxjs";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NotificationService} from "../../../components/extra/notification/notification.service";
import {egfOption} from "../../../../environments/egf.option";
import {Helpers} from "../../../shared/utility";
import swal, {SweetAlertResult} from "sweetalert2";
import {VilleEscale} from "../../model/ville-escale";
import {VilleEscaleService} from "../../service/ville-escale.service";
import PlaceResult = google.maps.places.PlaceResult;
import {Location, Appearance, GermanAddress} from '@angular-material-extensions/google-maps-autocomplete';
import {environment} from "../../../../environments/environment";
import * as firebase from 'firebase';
import GeoPoint = firebase.firestore.GeoPoint;


@Component({
    selector: 'app-ville-escale',
    templateUrl: './ville-escale.component.html',
    styleUrls: ['./ville-escale.component.scss'],
})

export class VilleEscaleComponent {


    selectionType = SelectionType.cell;

    pays = [];

    closeResult: string;
    villeEscaleSelected: VilleEscale;

    villeEscales$: Observable<VilleEscale[]>

    columnMode = ColumnMode.force;

    columns = [{name: 'createdDate', sortable: true}, {name: 'createdByDisplayName', sortable: true}, {
        name: 'pays',
        sortable: true
    }, {name: 'ville', sortable: true}, {name: 'address', sortable: false},];


    isLoading: boolean = false;

    @ViewChild('f', {static: false}) form: NgForm;


    currentJustify = 'justified';


    public appearance = Appearance;
    public zoom: number;
    public latitude: number;
    public longitude: number;
    public selectedAddress: PlaceResult;

    constructor(
        private service: VilleEscaleService,
        private modal: NgbModal,
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private notification: NotificationService,
    ) {
        this.zoom = 10;
        this.latitude = 52.520008;
        this.longitude = 13.404954;

        this.pays = environment.pays;

        this.setCurrentPosition();
        this.initData();
    }

    toDate(value) {
        return Helpers.fromaTimestamp(value);
    }

    initData() {
        this.villeEscales$ = this.service.findAll();
    }

    updateFilter(event): void {
        const val = event.target.value.toLowerCase();
        console.log('updateFilter', val);
        (val == null || val == undefined) ? this.initData() : this.villeEscales$ = this.service.search(val);
        // this.table.offset = 0;
    }


    onSubmit(): void {
        console.log('onSubmit', this.villeEscaleSelected);

        this.villeEscaleSelected.uid ? this.update() : this.add();
    }

    add(): void {
        console.log('### add ###');
        this.service.findAttribute('ville', this.villeEscaleSelected.ville)
            .subscribe(
                response => {

                    if (response === undefined) {
                        this.villeEscaleSelected.keys = Helpers.createKeywords(this.villeEscaleSelected.ville);
                        this.service.create(this.villeEscaleSelected).subscribe(
                            response => {
                                this.notification.success(egfOption.successMessage)
                                this.modal.dismissAll();
                            }, error => {
                                this.notification.error(egfOption.errorMessage);
                            },
                        );
                    } else {
                        this.notification.error(`Cette ville d\'escale ${this.villeEscaleSelected.ville} existe !`)
                    }
                },
                error => {
                    this.notification.error(egfOption.errorMessage);
                }
            );
    }

    update(): void {
        console.log('### update ###');
        this.villeEscaleSelected.keys = Helpers.createKeywords(this.villeEscaleSelected.ville);
        this.service.update(this.villeEscaleSelected.uid, this.villeEscaleSelected).subscribe(
            response => {
                console.log('response', response);
                this.notification.success(egfOption.successMessage)
                this.modal.dismissAll();
            }, error => {
                console.log('onSubmit', error);
                this.notification.error(egfOption.errorMessage);
            },
        );
    }


    // Open default modal
    openAdd(content): void {
        this.villeEscaleSelected = new VilleEscale();
        this.modal.open(content,{size: 'lg'})
            .result
            .then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.villeEscaleSelected = null;
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
    }

    openEdite(content, value) {
        console.log("openEdite", value)
        this.villeEscaleSelected = value;
        this.modal.open(content,{size: 'lg'})
            .result
            .then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.villeEscaleSelected = null;
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
        const selected: VilleEscale = (event.selected)[0];

        console.log('Select selected', selected);
        console.log('Select selected', selected.ref);

    }


    onActivate({event}) {
        console.log('Activate Event', event);
    }

    confirmCancelButton(uid) {
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
        }).then((response: SweetAlertResult) => {

            if (response != undefined && response.value) {
                this.service.delete(uid)
                    .then((res) => this.notification.success(egfOption.successMessage))
                    .catch((error) => this.notification.error(egfOption.errorMessage))
            }
            console.log('confirmCancelButton value ===>>>', response.value);
        });
    }

    // initial user position on the map
    private setCurrentPosition() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.villeEscaleSelected.geopoint = new GeoPoint(this.latitude, this.longitude);
                this.zoom = 12;
            });
            this.latitude
        }
    }

    onAutocompleteSelected(result: PlaceResult) {
        console.log('onAutocompleteSelected ===>>>', result);
        this.villeEscaleSelected.geopoint = new GeoPoint(result.geometry.location.lat(), result.geometry.location.lng());
        this.villeEscaleSelected.address = result.formatted_address;
    }

    onLocationSelected(location: Location) {
        console.log('onLocationSelected ===>>>', location);
        this.latitude = location.latitude;
        this.longitude = location.longitude;
        this.villeEscaleSelected.geopoint = new GeoPoint(location.latitude,location.longitude);
    }

    onGermanAddressMapped($event: GermanAddress) {
        console.log('onGermanAddressMapped ===>>>', $event);
        this.villeEscaleSelected.geopoint = new GeoPoint($event.geoLocation.latitude,$event.geoLocation.longitude);
        this.villeEscaleSelected.address = $event.displayAddress;
        this.villeEscaleSelected.pays = $event.state.long;
}

    markerDragEnd($event) {
        console.log('markerDragEnd ===>>>', $event.coords);
        console.log('markerDragEnd lat ===>>>', $event.coords.lat);
        console.log('markerDragEnd lng ===>>>', $event.coords.lng);
        this.villeEscaleSelected.geopoint = new GeoPoint($event.coords.lat,$event.coords.lng);

    }

    onSelected($event) {
        console.log('onSelected ===>>>', $event);
        console.log('onSelected value ===>>>', $event.value);
    }
}
