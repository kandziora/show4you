import {Component, EventEmitter, OnInit, Input,  Output, Pipe, HostListener} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {Control} from '@angular/common';
import {Show} from './show';
//import {NavigationComponent} from './nav.component';
import {ShowService} from './show.service.ts';
import {ShowsDetailComponent} from './shows-detail.component';

@Component({
    selector: 'helloworld-app',
    templateUrl: 'app/html/add.show.component.html',
    styleUrls: ['app/css/shows-detail.component.css'],
    directives: [ShowsDetailComponent, ROUTER_DIRECTIVES],
    providers: [ShowService]

})


export class AddShowComponent{


    @Input()
    show: Show;
    shows:Show[];
    selectedShow:Show;
    addingShow = true;

    @Output()
        close = new EventEmitter();

    error: any;
    navigated = false; // true if navigated here

    constructor(private showService:ShowService) {

    }

    addShow() {
        this.addingShow = true;
        this.selectedShow = null;
        this.show = new Show();
    }

    ngOnInit() {
        if (this.show !== undefined) {
            let id = +this.show.id;
            this.navigated = true;

        } else {
            this.navigated = false;
            this.show = new Show();
        }
    }

    save() {
        this.showService
            .save(this.show)
            .then(show => {
                this.show = show; // saved show, w/ id if new
                this.close.emit(show);
                console.log(this.show);

            })
            .catch(error => this.error = error); // TODO: Display error message
        this.selectedShow = null;
        this.addingShow = false;
    }

    getShows() {
        this.showService.getShows().then(shows => this.shows = shows);
    }






}