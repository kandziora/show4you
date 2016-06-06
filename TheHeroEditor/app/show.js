System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Show;
    return {
        setters:[],
        execute: function() {
            Show = (function () {
                function Show(id, name, genre, support) {
                    this.id = id;
                    this.name = name;
                    this.genre = genre;
                    this.support = support;
                }
                return Show;
            }());
            exports_1("Show", Show);
        }
    }
});
//# sourceMappingURL=show.js.map