import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouteSegment, Router } from '@angular/router';

import { Show } from './show';
import {ShowService} from "./show.service";
import {ShowDetailView} from "./shows-detail-view.component";
import {ShowDetailEdit} from "./shows-detail-edit.component";
import { ShowDate} from './show-date.component';


@Component({
    selector: 'my-show-detail',
    styleUrls:  ['app/shows-detail.component.css'],
    template: `
        <div *ngIf="show" id="detail_show">
            <h2>{{show.name}} details!</h2>
            <h3>
            edit            
            </h3>
            
            <div><label>id: </label>{{show.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="show.name" placeholder="name"/>
            </div>
            <div>
                <label>genre: </label>
                <input [(ngModel)]="show.genre" placeholder="genre"/>
            </div>
            <div>
                <label>support: </label>
                <input [(ngModel)]="show.support" placeholder="support"/>
            </div>
            <div>
                <label>date: </label>
                <input [(ngModel)]="show.date" placeholder="date"/>
            </div>
            
            <button (click)="save()">Save</button>
        </div>
`,
    directives: [ShowDetailView, ShowDetailEdit]
})

export class ShowsDetailComponent implements OnInit {
    @Input()
    show: Show;

    @Output()
    close = new EventEmitter();

    error: any;
    navigated = false; // true if navigated here

    constructor(
        private showService: ShowService,
        private router:Router,
        private routeParams:RouteSegment) {
    }


    ngOnInit() {
/*        if (this.show !== undefined) {
            let id = +this.show.id;
            this.navigated = true;
            this.showService.getShow(id)
                .then(show => this.show = show);
        } else {
            this.navigated = false;
            this.show = new Show();
        }*/
        let id = +this.routeParams.getParam('id');
        this.showService.getShow(id)
            .then(show => this.show = show);

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