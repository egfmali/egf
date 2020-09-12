
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {

    constructor(public toastr: ToastrService) { }

    // Success Type
    success(message: string = '',title: string = 'Succès') {
        this.toastr.success(message, title);
    }

    // Success Type
    info(message: string = '', title: string = 'Infos') {
        this.toastr.info(message, title);
    }

    // Success Type
    warning(message: string = '',title: string = 'Alerte') {
        this.toastr.warning(message,title);
    }

    // Success Type
    error(message: string = '',title: string = 'Erreur') {
        this.toastr.error(message, title);
    }

    // Custom Type
    custom(message: string = '',title: string = '',enableHtml:boolean=true) {
        this.toastr.success('<span class="text-danger">message</span>', title, { enableHtml: enableHtml });
    }

    //Progress bar
    progressBar(message: string = '',title: string = '', progressBar:boolean=true) {
        this.toastr.info(message, title, { "progressBar": progressBar });
    }

    // Timeout
    errorTimeout(message: string = '', title:string='Erreur', time: number=2000) {
        this.toastr.error(message, title, { "timeOut": time });
    }


    //Dismiss toastr on Click
    dismissToastOnClick(message: string = '',title: string = '') {
        this.toastr.info(message, title, { "tapToDismiss": true });
    }
    // Remove current toasts using animation
    clearToast() {
        this.toastr.clear()
    }

    // Show close button
    showCloseButton(message: string = '',title: string = '') {
        this.toastr.info(message, title, { closeButton: true });
    }
    // Enable  HTML
    enableHtml(message: string = '', title: string = '') {
        this.toastr.info('<i>Have fun <b>storming</b> the castle!</i>', 'Miracle Max Says', { enableHtml: true });
    }
    // Title Class
    titleClass(message: string = '', title: string = '') {
        this.toastr.info(message, title, { titleClass: 'h3' });
    }
    // Message Class
    messageClass(message: string = '', title: string = '') {
        this.toastr.info(message, title, { messageClass: 'text-uppercase' });
    }

}