import { Component, Input } from '@angular/core';
import { Show } from './show';
import { ShowDetailView } from './shows-detail-view.component';
import { ShowDetailEdit } from './shows-detail-edit.component';



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
        </div>
`,
    directives: [ShowDetailView, ShowDetailEdit]
})

export class ShowsDetailComponent {
    @Input()
    show: Show;
}