import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Show } from './show';
import {ShowService} from "./show.service";



@Component({
    selector: 'show-detail-view',
    styleUrls:  ['app/shows-detail.component.css'],
    template: `
        <div *ngIf="show" id="detail_show">
            <h2>{{show.name}} details!</h2>
            
            <div><label>id: </label>{{show.id}}</div>
            <div>
                <label>name: </label>
                {{show.name}}
            </div>
            <div>
                <label>genre: </label>
                {{show.genre}}
            </div>
            <div>
                <label>support: </label>
                {{show.support}}
            </div>
            <div>
                <label>date: </label>
                {{show.date}}
            </div>
        </div>
`
})

export class ShowDetailView implements OnInit {
    @Input()
    show: Show;

    @Output()
    close = new EventEmitter();

    error: any;
    navigated = false; // true if navigated here

    constructor(
        private showService: ShowService) {
    }

    ngOnInit() {
        if (this.show.id !== null) {
            let id = +this.show.id;
            this.navigated = true;
            this.showService.getShow(id)
                .then(show => this.show = show);
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
                this.goBack(show);
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    goBack(savedShow: Show = null) {
        this.close.emit(savedShow);
        if (this.navigated) { window.history.back(); }
    }
}