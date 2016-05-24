"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var ShowsDetailComponent = (function () {
    function ShowsDetailComponent() {
    }
    __decorate([
        core_1.Input()
    ], ShowsDetailComponent.prototype, "show");
    ShowsDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-show-detail',
            template: "\n            <div *ngIf=\"show\">\n                <h2>{{show.name}} details!</h2>\n                <div><label>id: </label>{{show.id}}</div>\n                <div>\n                <label>name: </label>\n            <input [(ngModel)]=\"show.name\" placeholder=\"name\"/>\n            </div>\n            </div>\n    "
        })
    ], ShowsDetailComponent);
    return ShowsDetailComponent;
}());
exports.ShowsDetailComponent = ShowsDetailComponent;
//# sourceMappingURL=shows-detail.component.js.map