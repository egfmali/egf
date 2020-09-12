import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {NotificationService} from "../../../components/extra/notification/notification.service";

@Component({
  selector: 'position-dialog',
  templateUrl: './position-dialog.component.html',
  styleUrls: ['./position-dialog.component.scss'],
  providers: [NotificationService],
})
export class PositionDialogComponent implements OnInit {
  latitude: number = 0;
  longitude: number = 0;

  constructor(public dialogRef: MatDialogRef<PositionDialogComponent>) {
    this.getLocation();
  }

  ngOnInit() {
  }

  mapClick($event) {
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
  }

  getLocation(): void {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          let _coords = position['coords'];
          this.longitude = _coords.longitude;
          this.latitude = _coords.latitude;
        },
        (_) => {
          this.latitude = 0;
          this.longitude = 0;
        }
      );
    } else {
      this.latitude = 0;
      this.longitude = 0;
    }
  }
}
