
import { Component, OnInit } from '@angular/core';

import { Show } from './show';
// import { NavigationComponent } from './nav.component';
import { ShowService } from './show.service.ts';
import { ShowsDetailComponent } from './shows-detail.component';

@Component({
    selector: 'helloworld-app',
    templateUrl: 'app/shows.component.html',
    styleUrls:  ['app/list_style.css'],
    // Angular doesn't know about the my-hero-detail tag, so we have to tell Angular to use the new directive
    directives: [ShowsDetailComponent],
    providers: [ShowService] // tell Angular to inject the HeroService

})


export class AppComponent implements OnInit {
    private title : string;
    shows: Show[];
    selectedShow: Show;
    addingShow = false;
    error: any;

    constructor(private showService: ShowService) {
        this.title = 'Shows for you';
    }

    getShows() {
        this.showService.getShows().then(shows => this.shows = shows);
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

    ngOnInit() {
        this.getShows();
    }

    onSelect(show: Show) {
        this.selectedShow = show;
        console.log(this.selectedShow);
    }
}

