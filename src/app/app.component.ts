import { Component } from '@angular/core';
import { UserService } from './user/user.service';

@Component ( {
  selector   : 'gfn-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {

  constructor ( public $user: UserService ) {}

  title       = 'gfn';

  over ( event: Event ) {
    console.log ( 'over', event );
  }
}
