System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Show, AppComponent, SHOWS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Show = (function () {
                function Show() {
                }
                return Show;
            }());
            exports_1("Show", Show);
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Your Shows';
                    this.shows = SHOWS;
                }
                AppComponent = __decorate([
                    core_1.Component({
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
                        template: "\n    <h1>{{title}}</h1>\n    <h2>My Shows</h2>\n    <ul class=\"shows\">\n      <li *ngFor=\"let show of shows\"\n        [class.selected]=\"show === selectedShow\"\n        (click)=\"onSelect(show)\">\n        <span class=\"badge\">{{show.id}}</span> {{show.name}}\n      </li>\n    </ul>\n    <div *ngIf=\"selectedShow\">\n      <h2>{{selectedShow.name}} details!</h2>\n      <div><label>id: </label>{{selectedShow.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"selectedShow.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n  ",
                        styles: ["\n          .selected {\n            background-color: #CFD8DC !important;\n            color: white;\n          }\n          .shows {\n            margin: 0 0 2em 0;\n            list-style-type: none;\n            padding: 0;\n            width: 15em;\n          }\n          .shows li {\n            cursor: pointer;\n            position: relative;\n            left: 0;\n            background-color: #EEE;\n            margin: .5em;\n            padding: .3em 0;\n            height: 1.6em;\n            border-radius: 4px;\n          }\n          .shows li.selected:hover {\n            background-color: #BBD8DC !important;\n            color: white;\n          }\n          .shows li:hover {\n            color: #607D8B;\n            background-color: #DDD;\n            left: .1em;\n          }\n          .shows .text {\n            position: relative;\n            top: -3px;\n          }\n          .shows .badge {\n            display: inline-block;\n            font-size: small;\n            color: white;\n            padding: 0.8em 0.7em 0 0.7em;\n            background-color: #607D8B;\n            line-height: 1em;\n            position: relative;\n            left: -1px;\n            top: -4px;\n            height: 1.8em;\n            margin-right: .8em;\n            border-radius: 4px 0 0 4px;\n          }\n        "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            SHOWS = [
                { "id": 11, "name": "Zakk Wylde", "genre": "Rock", "support": "" },
                { "id": 12, "name": "Municipal Waste", "genre": "Thrash Metal", "support": "Reactory" },
                { "id": 13, "name": "Devil Driver", "genre": "Modern Metal", "support": "" },
                { "id": 14, "name": "Napalm Death", "genre": "Grind Core", "support": "Hammercult" },
                { "id": 15, "name": "Mastodon", "genre": "Progressive Metal", "support": "" },
                { "id": 16, "name": "Overkill", "genre": "Metal", "support": "Crowbar" }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map