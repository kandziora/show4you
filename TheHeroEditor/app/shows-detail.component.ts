import { Component, Input } from '@angular/core';
import { Show } from './show';



@Component({
    selector: 'my-show-detail',
    template: `
        <div *ngIf="selectedShow">
            <h2>{{selectedShow.name}} details!</h2>
            <div><label>id: </label>{{selectedShow.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="selectedShow.name" placeholder="name"/>
            </div>
            <div>
                <label>genre: </label>
                <input [(ngModel)]="selectedShow.genre" placeholder="genre"/>
            </div>
            <div>
                <label>support: </label>
                <input [(ngModel)]="selectedShow.support" placeholder="support"/>
            </div>
        </div>
`
})

export class ShowsDetailComponent {
    @Input()
    show: Show;
}