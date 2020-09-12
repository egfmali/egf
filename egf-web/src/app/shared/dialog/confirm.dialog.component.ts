import {Component, ViewEncapsulation} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

;

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm.dialog.component.html',
  styleUrls: ['./confirm.dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ConfirmDialogComponent {
  confirmMessage: string;
  clear = 'Annuler';
  valid = 'Valider';

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {
  }
}
