import { Component, EventEmitter, Input, OnInit, Output, Pipe, HostListener, ElementRef } from '@angular/core';
import { Show } from './show';
import {ShowService} from "./show.service";
import {StringToDatePipe} from './string-to-date.pipe';
import {Venue } from './venues';


@Component({
    selector: 'my-show-detail',
    styleUrls:  ['app/shows-detail.component.css'],
    templateUrl: 'app/shows-detail.component.html',
    directives: [ShowsDetailComponent],
    providers: [ShowService],
    pipes: [StringToDatePipe]
})

export class ShowsDetailComponent implements OnInit {

    changeShow: boolean = true;
    shows:Show[];
    selectedShow:Show;
    @Input()
    show: Show;

    @Input()
    status;

    @Output()
    close = new EventEmitter();

    error: any;
    navigated = false; // true if navigated here

    constructor(
        private showService: ShowService) {
    }

    ngOnInit() {
        if (this.show !== undefined) {
            let id = +this.show.id;
            this.navigated = true;

        } else {
            this.navigated = false;
            this.show = new Show();
        }
    }

    save() {
        this.showService
            .save(this.show)
            .then(show => {
                this.show = show; // saved show, w/ id if new
                this.close.emit(show);
                console.log(this.show);
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    goBack(savedShow: Show = null) {
        this.close.emit(savedShow);
        if (this.navigated) { window.history.back(); }
    }

    change(){
        this.changeShow = !this.changeShow;
    }

    delete(show:Show, event:any) {
        console.log("delete!!");
        event.stopPropagation();
        this.showService
            .delete(show)
            .then(res => {
                this.shows = this.shows.filter(h => h !== show);
                if (this.selectedShow === show) {
                    this.selectedShow = null;
                }
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

}