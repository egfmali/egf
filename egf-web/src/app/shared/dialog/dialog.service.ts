import {Injectable} from '@angular/core';
import {ConfirmDialogComponent} from './confirm.dialog.component';
import {PositionDialogComponent} from "./position-dialog/position-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) {
  }

  openConfirmDialog(message: string, clear = 'Annuler', valid = 'Valider') {
    const matDialogRef = this.dialog.open(ConfirmDialogComponent, {
      disableClose: true
    });
    matDialogRef.componentInstance.confirmMessage = message;
    matDialogRef.componentInstance.clear = clear;
    matDialogRef.componentInstance.valid = valid;
    return matDialogRef;
  }

  openPositionDialog(currentLocation: any) {
    const matDialogRef = this.dialog.open(PositionDialogComponent, {
      disableClose: true
    });
    matDialogRef.componentInstance.longitude = currentLocation.longitude;
    matDialogRef.componentInstance.latitude = currentLocation.latitude;
    return matDialogRef;
  }


}
