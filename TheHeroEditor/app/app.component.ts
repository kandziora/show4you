import {Component} from 'angular2/core';

export class Show {
    id: number;
    name: string;
    genre: string;
    support: string;
}

@Component({
    selector: 'helloworld-app',
/*    template:`
    <h1>{{title}}</h1>
    <h2>My Shows</h2>
    <ul class="shows">
        <li *ngFor="let show of shows; let i = index">
            {{i}}. {{show.name}}
      </li>
    </ul>
        <div><label>id: </label>{{show.id}}</div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="show.name" placeholder="name">
        </div>
    `,*/
    template:`
    <h1>{{title}}</h1>
    <h2>My Shows</h2>
    <ul class="shows">
      <li *ngFor="let show of shows"
        [class.selected]="show === selectedShow"
        (click)="onSelect(show)">
        <span class="badge">{{show.id}}</span> {{show.name}}
      </li>
    </ul>
    <div *ngIf="selectedShow">
      <h2>{{selectedShow.name}} details!</h2>
      <div><label>id: </label>{{selectedShow.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedShow.name" placeholder="name"/>
      </div>
    </div>
  `,
    styles:[`
          .selected {
            background-color: #CFD8DC !important;
            color: white;
          }
          .shows {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
          }
          .shows li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
          }
          .shows li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
          }
          .shows li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
          }
          .shows .text {
            position: relative;
            top: -3px;
          }
          .shows .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
          }
        `]
})

export class AppComponent {
    title = 'Your Shows';
    shows = SHOWS;

}

var SHOWS: Show[] = [
    { "id": 11, "name": "Zakk Wylde", "genre": "Rock", "support": "" },
    { "id": 12, "name": "Municipal Waste", "genre": "Thrash Metal", "support": "Reactory" },
    { "id": 13, "name": "Devil Driver", "genre": "Modern Metal", "support": "" },
    { "id": 14, "name": "Napalm Death", "genre": "Grind Core", "support": "Hammercult" },
    { "id": 15, "name": "Mastodon", "genre": "Progressive Metal", "support": "" },
    { "id": 16, "name": "Overkill", "genre": "Metal", "support": "Crowbar" }
];