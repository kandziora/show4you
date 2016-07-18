import { Component, OnInit }    from '@angular/core';
import {GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';

import {Show} from './show';
import {ShowService} from "./show.service";
import {ShowsDetailComponent} from './shows-detail.component';
// import { MapsAPILoader, NoOpMapsAPILoader, MouseEvent, GOOGLE_MAPS_PROVIDERS, GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';


@Component({
    selector: 'helloworld-app',
    templateUrl: 'app/map.component.html',
/*    directives: [GOOGLE_MAPS_DIRECTIVES],*/
    styleUrls:  ['app/css/map.css'],
    directives: [ShowsDetailComponent, GOOGLE_MAPS_DIRECTIVES],
    providers: [ShowService]

})

export class Map implements OnInit{

    shows:Show[];

    selectedShow: Show;

    //Berlin Coordinates:
    lat:number = 52.5243700;
    lng:number = 13.4105300;

    constructor(private showService:ShowService) {

    }


    onSelect(shows:Show) {
        this.selectedShow = shows;
        console.log(this.selectedShow);
    }

    getShows() {
        this.showService.getShows().then(shows => this.shows = shows);
    }

    ngOnInit() {
        this.getShows();
    }




}

// just an interface for type safety.
interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}
/*
// ANGULAR2_GOOGLE_MAPS_PROVIDERS is required here
bootstrap(App, [
    GOOGLE_MAPS_PROVIDERS,
    // If you don't want to let angular2-google-maps load the Google Maps API script,
    // you can use the NoOpMapsAPILoader like this:
    // provide(MapsAPILoader, {useClass: NoOpMapsAPILoader})
])*/
