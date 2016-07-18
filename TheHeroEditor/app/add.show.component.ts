import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Show} from './show';
//import {NavigationComponent} from './nav.component';
import {ShowService} from './show.service.ts';
import {ShowsDetailComponent} from './shows-detail.component';

@Component({
    selector: 'helloworld-app',
    templateUrl: 'app/add.show.component.html',
    styleUrls: ['app/list_style.css'],
    directives: [ShowsDetailComponent],
    providers: [ShowService]

})


export class AddShowComponent{

    shows:Show[];
    selectedShow:Show;
    addingShow = true;


    constructor(private showService:ShowService, private router: Router) {

    }

    getShows() {
        this.showService.getShows().then(shows => this.shows = shows);
    }




    addShow() {
        this.addingShow = true;
        this.selectedShow = null;
    }


    close(savedShow:Show) {
        this.addingShow = false;
        if (savedShow) {
            this.getShows();
        }
    }




}