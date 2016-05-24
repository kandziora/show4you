import {Component} from 'angular2/core';
import { ShowsDetailComponent } from './shows-detail.component';
import { Show } from './show';
import {SHOWS} from "./mock-shows";
import { ShowService } from '.show.service';
import {OnInit} from '@angular2/core'
import {OnInit} from "../../FirstApp/node_modules/angular2/src/core/metadata/lifecycle_hooks";



export class AppComponent implements OnInit{

    title = 'Your Shows';
    shows = SHOWS;
    constructor (private showService: ShowService){
    }

    getShows (){
        this.shows = this.showService.getShows();
    }

    ngOnInit(){
        this.getShows();
    }

}
@Component({
    selector: 'helloworld-app',
    templateUrl: 'app/shows.component.html',
    styleUrls:  ['app/list_style.css'],
    providers: [ShowService]
})




