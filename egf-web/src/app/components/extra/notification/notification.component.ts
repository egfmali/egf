import { Component } from '@angular/core';
import { NotificationService } from './notification.service'
@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'],
    providers: [NotificationService]
})

export class NotificationComponent {
    constructor(private service: NotificationService) { }

    // Success Type
    typeSuccess() {
        this.service.success();
    }

    // Success Type
    typeInfo() {
        this.service.info();
    }

    // Success Type
    typeWarning() {
        this.service.warning();
    }

    // Success Type
    typeError() {
        this.service.error();
    }

    // Custom Type
    typeCustom() {
        this.service.custom();
    }

    // Remove current toasts using animation
    clearToast() {
        this.service.clearToast();
    }

    // Show close button
    showCloseButton() {
        this.service.showCloseButton();
    }

    //progressBar
    progressBar() {
        this.service.progressBar();
    }

    //Dismiss toastr on click
    dismissToastOnClick() {
        this.service.dismissToastOnClick();
    }

    // Timeout
    timeout() {
        this.service.errorTimeout();
    }

    // Enable HTML
    enableHtml() {
        this.service.enableHtml();
    }

    // Title Class
    titleClass() {
        this.service.titleClass();
    }
    // Message Class
    messageClass() {
        this.service.messageClass();
    }

}