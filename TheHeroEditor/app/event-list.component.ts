import { Component, OnInit }    from '@angular/core';
import {ShowService}            from './show.service';
import { Show }                 from './show';
import { ShowsDetailComponent } from './shows-detail.component';
import { Router }               from '@angular/router';



@Component({
    selector: 'helloworld-app',
    templateUrl: 'app/show-list.component.html',
    styleUrls:  ['app/list_style.css'],
    providers: [ShowService],
    directives: [ShowsDetailComponent]

})


export class EventListComponent implements OnInit {
    private title : string;
    shows: Show[];
    selectedShow: Show;
    addingShow = false;
    error: any;

    constructor (private showService: ShowService, private router: Router) {
        this.title = 'Shows for you';
    }

   onSelect(show: Show) {
        this.selectedShow = show;
        console.log(this.selectedShow);
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
}

