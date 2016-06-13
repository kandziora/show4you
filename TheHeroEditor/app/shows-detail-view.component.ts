import { Component, Input } from '@angular/core';
import { Show } from './show';



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

export class ShowDetailView {
    @Input()
    show: Show;
}