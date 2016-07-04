import { Component, Input } from '@angular/core';
import { Show }             from './show';
import {NameComponent}      from './name.component';


@Component({
    selector: 'my-show-detail',
    template: `  <div id="showdetails">
                    <h2>{{show.name}} details:</h2>
                    <ul class="items">
                        <li class="item">
                            <span class="badge">ID</span>
                            {{show.id}}
                        </li>
                        <li class="item">
                            <span class="badge">NAME</span>
                            <input [(ngModel)]="show.name" placeholder="name">
                        </li>
                        <li class="item">
                            <span class="badge">GENRE</span>
                            <input [(ngModel)]="show.genre" placeholder="Rock">
                        </li>
                        <li class="item">
                            <span class="badge">Support</span>
                            <input [(ngModel)]="show.support" placeholder="TBA">
                        </li>
                    </ul>
                </div>
    `,
    directives: [NameComponent]
})


export class ShowDetailComponent {
    @Input()
    private show: Show;

}

