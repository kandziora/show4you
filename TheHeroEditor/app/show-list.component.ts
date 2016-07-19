import {Component, OnInit} from '@angular/core';
import {GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
import {Router} from '@angular/router';

import {Show} from './show';
import {ShowService} from './show.service.ts';
import {ShowsDetailComponent} from './shows-detail.component';
import {GoogleCalComponent} from './google-calendar';
import {GoogleCalService} from './google-calendar.service';
import {StringToDatePipe} from './string-to-date.pipe';

@Component({
    selector: 'helloworld-app',
    templateUrl: 'app/html/show-list.component.html',
    styleUrls: ['app/css/list_style.css'],
    directives: [ShowsDetailComponent, GOOGLE_MAPS_DIRECTIVES, GoogleCalComponent],
    providers: [ShowService, GoogleCalService],
    pipes: [StringToDatePipe]

})


export class ShowListComponent implements OnInit {
    private title:string;
    shows:Show[];
    selectedShow:Show;
    addingShow = false;
    error:any;
    value : boolean = true;

    //Berlin Coordinates:
    lat:number = 52.5243700;
    lng:number = 13.4105300;

    constructor(private showService:ShowService, private router: Router, private googleCalServive:GoogleCalService) {
        this.title = 'Shows for you';
    }

    onSelect(show:Show) {
        this.selectedShow = show;
        console.log(this.selectedShow);

    }

    getShows() {
        this.showService.getShows().then(shows => this.shows = shows);
    }

    ngOnInit() {
        this.getShows();
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

    delete(show:Show, event:any) {
        event.stopPropagation();
        this.showService
            .delete(show)
            .then(res => {
                this.shows = this.shows.filter(h => h !== show);
                if (this.selectedShow === show) {
                    this.selectedShow = null;
                }
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    handleAuthClick(event) {
        this.googleCalServive.handleAuthClick(event);
    }

    makeTrue(){
            this.value = true;
    }

    makeFalse(){
            this.value = !this.value;
    }
}



