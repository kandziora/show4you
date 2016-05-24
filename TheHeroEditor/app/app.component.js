"use strict";
var mock_shows_1 = require("./mock-shows");
var AppComponent = (function () {
    function AppComponent(showService) {
        this.showService = showService;
        this.title = 'Your Shows';
        this.shows = mock_shows_1.SHOWS;
    }
    AppComponent.prototype.getShows = function () {
        this.shows = this.showService.getShows();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getShows();
    };
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map