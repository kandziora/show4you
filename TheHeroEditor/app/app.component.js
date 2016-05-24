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
    var AppComponent, SHOWS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Your Shows';
                    this.shows = SHOWS;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'helloworld-app',
                        templateUrl: 'app/shows.component.html',
                        styleUrls: ['app/list_style.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            SHOWS = [
                { "id": 11, "name": "Zakk ee ade", "genre": "Rock", "support": "" },
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