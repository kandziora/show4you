import { Component, OnInit }    from '@angular/core';
import {GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
import {NavigationComponent} from './nav.component';
import {ShowService} from './show.service.ts';
import {ShowsDetailComponent} from './shows-detail.component';
// import { MapsAPILoader, NoOpMapsAPILoader, MouseEvent, GOOGLE_MAPS_PROVIDERS, GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';


@Component({
    selector: 'helloworld-app',
    templateUrl: 'app/map.component.html',
/*    directives: [GOOGLE_MAPS_DIRECTIVES],*/
    styleUrls:  ['app/list_style.css'],
    directives: [ShowsDetailComponent, NavigationComponent, GOOGLE_MAPS_DIRECTIVES],

})

export class Map{

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
