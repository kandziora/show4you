import {Component, OnInit}   from 'angular2/core';
import {Show}                from './show';
import {ShowDetailComponent} from './show-detail.component.ts';
import {ShowService}         from "./show.service";


@Component({
    selector: 'helloworld-app',
    templateUrl: 'app/show.component.html',
    styleUrls:  ['app/list_style.css'],
    directives: [ShowDetailComponent],
    providers: [ShowService]
})


export class AppComponent implements OnInit{

    private title       : string;
    private shows       : Show[];
    private selectedShow: Show;

    constructor (private showService: ShowService){
        this.title = 'Your Show';
    }


    getShows (){
        this.showService.getShows().then(shows => this.shows = shows);
    }

    ngOnInit(){
        this.getShows();
    }

    getShowSlowly(){
        this.showService.getShowSlowly().then(shows => this.shows = shows);
    }

    onSelect(show: Show) {
        this.selectedShow = show;
        console.log(this.selectedShow);
    }


}

