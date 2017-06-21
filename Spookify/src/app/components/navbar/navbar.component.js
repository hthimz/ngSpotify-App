"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'navbar',
        template: "\n\n  <nav class=\"navbar navbar-inverse \">\n       <div class=\"container\">\n         <div class=\"navbar-header\">\n           <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n             <span class=\"sr-only\">Toggle navigation</span>\n             <span class=\"icon-bar\"></span>\n             <span class=\"icon-bar\"></span>\n             <span class=\"icon-bar\"></span>\n           </button>\n           <a class=\"navbar-brand\" href=\"#\">ngSpotify</a>\n         </div>\n         <div id=\"navbar\" class=\"collapse navbar-collapse\">\n           <ul class=\"nav navbar-nav\">\n             <li class=\"active\"><a routerLink=\"/\">Home</a></li>\n             <li><a routerLink=\"/about\">About</a></li>\n\n           </ul>\n         </div><!--/.nav-collapse -->\n       </div>\n     </nav>\n\n\n  ",
    })
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map