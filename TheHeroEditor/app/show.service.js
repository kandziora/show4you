System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var ShowService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            ShowService = (function () {
                function ShowService(http) {
                    this.http = http;
                    this.showsUrl = 'app/shows'; // URL to web api
                }
                ShowService.prototype.getShows = function () {
                    return this.http.get(this.showsUrl)
                        .toPromise()
                        .then(function (response) { return response.json().data; })
                        .catch(this.handleError);
                };
                ShowService.prototype.getShow = function (id) {
                    return this.getShows()
                        .then(function (shows) { return shows.filter(function (show) { return show.id === id; })[0]; });
                };
                ShowService.prototype.save = function (show) {
                    if (show.id) {
                        return this.put(show);
                    }
                    return this.post(show);
                };
                ShowService.prototype.delete = function (show) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var url = this.showsUrl + "/" + show.id;
                    return this.http
                        .delete(url, headers)
                        .toPromise()
                        .catch(this.handleError);
                };
                // Add new Show
                ShowService.prototype.post = function (show) {
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json' });
                    return this.http
                        .post(this.showsUrl, JSON.stringify(show), { headers: headers })
                        .toPromise()
                        .then(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                // Update existing Show
                ShowService.prototype.put = function (show) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var url = this.showsUrl + "/" + show.id;
                    return this.http
                        .put(url, JSON.stringify(show), { headers: headers })
                        .toPromise()
                        .then(function () { return show; })
                        .catch(this.handleError);
                };
                ShowService.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                    return Promise.reject(error.message || error);
                };
                ShowService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ShowService);
                return ShowService;
            }());
            exports_1("ShowService", ShowService);
        }
    }
});
//# sourceMappingURL=show.service.js.map