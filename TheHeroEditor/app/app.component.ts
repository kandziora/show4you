import { Component, OnInit } from '@angular/core';
import { Show } from './show';
import { ShowsDetailComponent } from './shows-detail.component';
import { NavigationComponent } from './nav.component';
import { ShowService } from './show.service.ts';




@Component({
    selector: 'helloworld-app',
    templateUrl: 'app/shows.component.html',
    styleUrls:  ['app/list_style.css'],
    directives: [ShowsDetailComponent, NavigationComponent],
    providers: [ShowService]
})




export class AppComponent {

    private title : string;
    private selectedShow : Show;
    private shows : Show[];


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

}





