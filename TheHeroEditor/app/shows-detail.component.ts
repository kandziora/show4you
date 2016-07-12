import { Component, EventEmitter, Input, OnInit, Output, Pipe, HostListener, ElementRef } from '@angular/core';
import {Control} from '@angular/common';
import {Observable} from 'rxjs/Rx';
import { Show } from './show';
import {ShowService} from "./show.service";
import {ShowDetailView} from "./shows-detail-view.component";
import {ShowDetailEdit} from "./shows-detail-edit.component";

//import {StatusSelector} from "./status.selector";

@Component({
    selector: 'my-show-detail',
    styleUrls:  ['app/shows-detail.component.css'],
    templateUrl: 'app/shows-detail.component.html',
    directives: [ShowDetailView, ShowDetailEdit]
})

export class ShowsDetailComponent implements OnInit {
    @Input()
    show: Show;

    @Input() status;

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
}