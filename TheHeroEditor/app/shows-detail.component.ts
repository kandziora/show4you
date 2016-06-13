import { Component, Input } from '@angular/core';
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
            <div>
                <label>genre: </label>
                <input [(ngModel)]="show.genre" placeholder="genre"/>
            </div>
            <div>
                <label>support: </label>
                <input [(ngModel)]="show.support" placeholder="support"/>
            </div>
        </div>
`
})

export class ShowsDetailComponent {
    @Input()
    show: Show;
}