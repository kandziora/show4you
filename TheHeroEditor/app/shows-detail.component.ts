import { Component, Input } from 'angular2/core';
import { Show } from './show';



@Component({
    selector: 'my-show-detail',
    template: `
        <div>
            <h2>{{selectedHero.name}} details!</h2>
            <div><label>id: </label>{{selectedHero.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="selectedHero.name" placeholder="name"/>
            </div>
        </div>
`
})

export class ShowsDetailComponent {
    @Input()
    show: Show;
}