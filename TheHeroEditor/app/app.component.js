System.register(['angular2/core', './show-detail.component.ts', "./show.service"], function(exports_1, context_1) {
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
    var core_1, show_detail_component_ts_1, show_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (show_detail_component_ts_1_1) {
                show_detail_component_ts_1 = show_detail_component_ts_1_1;
            },
            function (show_service_1_1) {
                show_service_1 = show_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(showService) {
                    this.showService = showService;
                    this.title = 'Your Show';
                }
                AppComponent.prototype.getShows = function () {
                    var _this = this;
                    this.showService.getShows().then(function (shows) { return _this.shows = shows; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getShows();
                };
                AppComponent.prototype.getShowSlowly = function () {
                    var _this = this;
                    this.showService.getShowSlowly().then(function (shows) { return _this.shows = shows; });
                };
                AppComponent.prototype.onSelect = function (show) {
                    this.selectedShow = show;
                    console.log(this.selectedShow);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'helloworld-app',
                        templateUrl: 'app/show.component.html',
                        styleUrls: ['app/list_style.css'],
                        directives: [show_detail_component_ts_1.ShowDetailComponent],
                        providers: [show_service_1.ShowService]
                    }), 
                    __metadata('design:paramtypes', [show_service_1.ShowService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map