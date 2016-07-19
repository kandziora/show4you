import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
import { Show } from './show';
//import { MyFilterPipe } from './venue-pipe';

import { Venue } from './venues';
import {ShowService} from "./show.service";
import {StringToDatePipe} from './string-to-date.pipe';

@Component({
    selector: 'helloworld-app',
    templateUrl: 'app/venue.component.html',
    styleUrls: ['app/css/venue_style.css'],
    directives: [GOOGLE_MAPS_DIRECTIVES],
    providers: [ShowService],
    pipes: [StringToDatePipe]/*,
    pipes: [MyFilterPipe]*/

})


export class VenueComponent implements OnInit{
    @Input()
    venues: Venue[];
    selectedVenue: Venue;
    show: Show;
    shows:Show[];
/*    filterargs = {title: 'Astra'};
    items = [{title: 'hello world'}, {title: 'hello kitty'}, {title: 'foo bar'}];*/

    @Output()
    close = new EventEmitter();

    //Berlin Coordinates:
    lat:number = 52.5243700;
    lng:number = 13.4105300;

    error: any;
    navigated = false; // true if navigated here

    constructor(
        private showService: ShowService) {
    }

    onSelect(venue:Venue) {
        this.selectedVenue = venue;
        console.log(this.selectedVenue);

    }

    getVenues() {
        this.showService.getVenues().then(venues => this.venues = venues);
    }

    getShows() {
        this.showService.getShows().then(shows => this.shows = shows);
    }

    ngOnInit() {
    this.getVenues();
        this.getShows();
}
}