import { Component, Input } from 'angular2/core';
import { Show } from './show';



@Component({
    selector: 'my-show-detail',
    template: `
            <div *ngIf="show">
                <h2>{{show.name}} details!</h2>
            <div><label>id: </label>{{show.id}}</div>
            <div>
                <label>name: </label>
            <input [(ngModel)]="show.name" placeholder="name"/>
            </div>
            </div>
    `
})

export class ShowsDetailComponent {
    @Input()
    show: Show;
}