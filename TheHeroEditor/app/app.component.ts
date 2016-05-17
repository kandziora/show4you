import {Component} from 'angular2/core';
import { ShowsDetailComponent } from './shows-detail.component';
import { Show } from './show';


@Component({
    selector: 'helloworld-app',
    templateUrl: 'app/shows.component.html',
    styleUrls:  ['app/list_style.css']
})

export class AppComponent {
    title = 'Your Shows';
    shows = SHOWS;

}

var SHOWS: Show[] = [
    { "id": 11, "name": "Zakk Wylde", "genre": "Rock", "support": "" },
    { "id": 12, "name": "Municipal Waste", "genre": "Thrash Metal", "support": "Reactory" },
    { "id": 13, "name": "Devil Driver", "genre": "Modern Metal", "support": "" },
    { "id": 14, "name": "Napalm Death", "genre": "Grind Core", "support": "Hammercult" },
    { "id": 15, "name": "Mastodon", "genre": "Progressive Metal", "support": "" },
    { "id": 16, "name": "Overkill", "genre": "Metal", "support": "Crowbar" }
];


