import { Component } from '@angular/core';
import{SpotifyService} from './service/spotify.service';

@Component({
  selector: 'my-app',
  template: `

  <navbar></navbar>
  <div class="main">
    <div class="container">
      <router-outlet></router-outlet>

    </div>

  </div>

  `,
  providers :[SpotifyService]
})
export class AppComponent  {  }
