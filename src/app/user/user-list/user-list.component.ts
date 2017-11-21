import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { User } from '../model/user';
import { Address } from '../model/address';
import { UserService } from '../user.service';

@Component ( {
  selector   : 'gfn-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit, AfterContentInit {

  @Input ()
  list: Array<User>;

  @Input () selectedUsr: User;

  @ContentChildren ( UserComponent )
  users: QueryList<UserComponent>;

  constructor ( public $user: UserService ) {
  }

  getClass ( isEven: boolean ): string {
    if ( isEven ) {
      return 'even';
    }
    return 'odd';
  }

  setSelected ( usr: User ) {
    this.selectedUsr = usr;
  }

  delByUsr ( usr: User ) {
    this.list.splice ( this.list.indexOf( usr ), 1 );
  }

  ngOnInit () {
    // console.log ( 'UserListComponent initialized' );
  }

  ngAfterContentInit (): void {
    // console.log ( this.users );
    // console.log ( this.users.toArray() );
  }

}
