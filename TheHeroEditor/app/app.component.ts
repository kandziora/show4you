import {Component }                  from '@angular/core';
import {ShowService}                 from './show.service';
import {Show }                       from './show';
import {Routes, ROUTER_DIRECTIVES}   from '@angular/router';
import {EventListComponent}          from './event-list.component';
import {Map}                        from './map.component';
import {ShowDetailView}              from './shows-detail-view.component';



@Component({
    selector: 'helloworld-app',
    templateUrl: 'app/show.component.html',
    providers: [ ShowService],
    styleUrls: ['app/css/nav.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

@Routes([
    {path: '/event-list', component: EventListComponent},
    {path: '/map', component: Map},
    {path: '/show/:id', component: ShowDetailView }
])

export class AppComponent {

    title = 'Shows 4 You';

}