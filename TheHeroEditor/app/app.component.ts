import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import {Component }                  from '@angular/core';
import {GOOGLE_MAPS_DIRECTIVES}      from 'angular2-google-maps/core';
import {ShowService}                 from './show.service';
import {ShowsDetailComponent}        from './shows-detail.component';
import {ShowListComponent}           from './show-list.component';
import {Map}                         from './map.component';
import {Calendar}                    from './calendar.component';
import {AddShowComponent}            from './add.show.component';
import {VenueComponent}              from './venue.component';



@Component({
    selector: 'helloworld-app',
    templateUrl: 'app/html/show.component.html',
    providers: [ ShowService],

    styleUrls: ['app/css/app.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

@Routes([
    {path: '/', component: ShowListComponent},
    {path: '/event-list', component: ShowListComponent},
    {path: '/map', component: Map},
    {path: '/calendar', component: Calendar},
    {path: '/addShow', component: AddShowComponent},
    {path: '/venues', component: VenueComponent}
])

export class AppComponent {

    title = 'Shows 4 You';

}