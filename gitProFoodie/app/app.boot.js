System.register(['@angular/platform-browser-dynamic', './appHome.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, appHome_module_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (appHome_module_1_1) {
                appHome_module_1 = appHome_module_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(appHome_module_1.AppHomeModule);
        }
    }
});
//# sourceMappingURL=app.boot.js.map