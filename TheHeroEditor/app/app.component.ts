import { Component, OnInit } from '@angular/core';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';

import { Show } from './show';
import { NavigationComponent } from './nav.component';
import { ShowService } from './show.service.ts';
import { ShowsDetailComponent } from './shows-detail.component';

@Component({
    selector: 'helloworld-app',
    templateUrl: 'app/shows.component.html',
    styleUrls:  ['app/list_style.css'],
    directives: [ShowsDetailComponent, NavigationComponent, GOOGLE_MAPS_DIRECTIVES],
    providers: [ShowService]

})


export class AppComponent implements OnInit {
    private title : string;
    shows: Show[];
    selectedShow: Show;
    addingShow = false;
    error: any;
    
    lat: number = 52.505753;
    lng: number = 13.364878;

    constructor (private showService: ShowService) {
        this.title = 'Shows for you';
    }
    
    onSelect(show: Show) {
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

    close(savedShow: Show) {
        this.addingShow = false;
        if (savedShow) { this.getShows(); }
    }

    delete(show: Show, event: any) {
        event.stopPropagation();
        this.showService
            .delete(show)
            .then(res => {
                this.shows = this.shows.filter(h => h !== show);
                if (this.selectedShow === show) { this.selectedShow = null; }
            })
            .catch(error => this.error = error); // TODO: Display error message
    }
    
}

