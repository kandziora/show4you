import { Component, OnInit }    from '@angular/core';
// import { MapsAPILoader, NoOpMapsAPILoader, MouseEvent, GOOGLE_MAPS_PROVIDERS, GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';


@Component({
    selector: 'helloworld-app',
    templateUrl: 'app/map.component.html',
/*    directives: [GOOGLE_MAPS_DIRECTIVES],*/
    styleUrls:  ['app/list_style.css']

})

export class Map{


 /*   // google maps zoom level
    zoom: number = 8;

    // initial center position for the map
    lat: number = 51.673858;
    lng: number = 7.815982;

    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
    }

    mapClicked($event: MouseEvent) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng
        });
    }

    markerDragEnd(m: marker, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
    }

    markers: marker[] = [
        {
            lat: 51.673858,
            lng: 7.815982,
            label: 'A',
            draggable: true
        },
        {
            lat: 51.373858,
            lng: 7.215982,
            label: 'B',
            draggable: false
        },
        {
            lat: 51.723858,
            lng: 7.895982,
            label: 'C',
            draggable: true
        }
    ]*/
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
