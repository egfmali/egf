import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-profil',
    templateUrl: './user-profil.component.html',
    styleUrls: ['./user-profil.component.scss']
})

export class UserProfilComponent implements OnInit {

    //Variable Declaration
    currentPage: string = "Transporteur profil"

    ngOnInit() {
    }

    showPage(page: string) {
        this.currentPage = page;
    }
}