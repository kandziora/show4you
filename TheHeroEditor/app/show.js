System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Show;
    return {
        setters:[],
        execute: function() {
            Show = (function () {
                function Show(id, name, genre, support, date) {
                    if (id === void 0) { id = 0; }
                    if (name === void 0) { name = "new Show"; }
                    if (genre === void 0) { genre = "misc."; }
                    if (support === void 0) { support = ""; }
                    if (date === void 0) { date = new Date(2016, 6, 12); }
                    this.id = id;
                    this.name = name;
                    this.genre = genre;
                    this.support = support;
                    this.date = date;
                }
                return Show;
            }());
            exports_1("Show", Show);
        }
    }
});
//# sourceMappingURL=show.js.map