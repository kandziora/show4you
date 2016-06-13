import {Component} from '@angular/core';
import { ShowsDetailComponent } from './shows-detail.component';
import { Show } from './show';


@Component({
    selector: 'helloworld-app',
    templateUrl: 'app/shows.component.html',
    styleUrls:  ['app/list_style.css'],
    // Angular doesn't know about the my-hero-detail tag, so we have to tell Angular to use the new directive
    directives: [ShowsDetailComponent]
})



export class AppComponent {
    title = 'Your Shows';
    selectedShow : Show;
    public shows = SHOWS;

    onSelect(show: Show) {
        this.selectedShow = show;
        console.log(this.selectedShow);
    }
}



var SHOWS: Show[] = [
    { "id": 11, "name": "Zakk ee ade", "genre": "Rock", "support": "" },
    { "id": 12, "name": "Municipal Waste", "genre": "Thrash Metal", "support": "Reactory" },
    { "id": 13, "name": "Devil Driver", "genre": "Modern Metal", "support": "" },
    { "id": 14, "name": "Napalm Death", "genre": "Grind Core", "support": "Hammercult" },
    { "id": 15, "name": "Mastodon", "genre": "Progressive Metal", "support": "" },
    { "id": 16, "name": "Overkill", "genre": "Metal", "support": "Crowbar" }
];


