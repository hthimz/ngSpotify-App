import { Component } from '@angular/core';
import {SpotifyService} from '../../service/spotify.service';
import {Artist} from '../../../artist';
@Component({
  selector: 'search',
  template: `
  <h1>NEED MUSIC ?</h1>
  <p class ="lead">Use this ng2Spotify App to browse new release and find your favourite songs.
  </p>

  <form>
    <div class="form-group">
    <input class="form-control" type="text" placeholder="Search Artists...." [(ngModel)]="searchStr" name="searchStr" (keyup)="searchMusic()">
    </div>

  </form>

  <div *ngIf="searchRes">
    <div *ngFor="let res of searchRes">
    <div class="row">
      <div class="col-md-12">
          <div class="search-res well">
              <h4><a routerLink="/artist/{{res.id}}">{{res.name}}</a></h4>
              <div>
              <strong>Genres: </strong>
              <span *ngFor="let genre of res.genres">{{genres}}</span>
              </div>

          </div>

      </div>

    </div>
    </div>

  </div>
  `,
})

export class SearchComponent  {

searchStr:string;
searchRes :Artist[];


constructor(private _spotifyService:SpotifyService)
{

}
searchMusic(){
this._spotifyService.searchMusic(this.searchStr).subscribe(res => {
  this.searchRes = res.artist.items;
        });
    }

}
