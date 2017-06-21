"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var spotify_service_1 = require("../../service/spotify.service");
var SearchComponent = (function () {
    function SearchComponent(_spotifyService) {
        this._spotifyService = _spotifyService;
    }
    SearchComponent.prototype.searchMusic = function () {
        var _this = this;
        this._spotifyService.searchMusic(this.searchStr).subscribe(function (res) {
            _this.searchRes = res.artist.items;
        });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search',
        template: "\n  <h1>NEED MUSIC ?</h1>\n  <p class =\"lead\">Use this ng2Spotify App to browse new release and find your favourite songs.\n  </p>\n\n  <form>\n    <div class=\"form-group\">\n    <input class=\"form-control\" type=\"text\" placeholder=\"Search Artists....\" [(ngModel)]=\"searchStr\" name=\"searchStr\" (keyup)=\"searchMusic()\">\n    </div>\n\n  </form>\n\n  <div *ngIf=\"searchRes\">\n    <div *ngFor=\"let res of searchRes\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n          <div class=\"search-res well\">\n              <h4><a routerLink=\"/artist/{{res.id}}\">{{res.name}}</a></h4>\n              <div>\n              <strong>Genres: </strong>\n              <span *ngFor=\"let genre of res.genres\">{{genres}}</span>\n              </div>\n\n          </div>\n\n      </div>\n\n    </div>\n    </div>\n\n  </div>\n  ",
    }),
    __metadata("design:paramtypes", [spotify_service_1.SpotifyService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map