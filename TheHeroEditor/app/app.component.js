"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Your Shows';
        this.shows = SHOWS;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'helloworld-app',
            templateUrl: 'app/shows.component.html',
            styleUrls: ['app/list_style.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var SHOWS = [
    { "id": 11, "name": "Zakk Wylde", "genre": "Rock", "support": "" },
    { "id": 12, "name": "Municipal Waste", "genre": "Thrash Metal", "support": "Reactory" },
    { "id": 13, "name": "Devil Driver", "genre": "Modern Metal", "support": "" },
    { "id": 14, "name": "Napalm Death", "genre": "Grind Core", "support": "Hammercult" },
    { "id": 15, "name": "Mastodon", "genre": "Progressive Metal", "support": "" },
    { "id": 16, "name": "Overkill", "genre": "Metal", "support": "Crowbar" }
];
//# sourceMappingURL=app.component.js.map