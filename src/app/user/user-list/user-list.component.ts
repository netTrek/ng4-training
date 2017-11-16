import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'gfn-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterContentInit {

  @ContentChildren ( UserComponent )
  users: QueryList<UserComponent>;

  constructor() { }

  ngOnInit() {
    console.log ( 'UserListComponent initialized' );
  }

  ngAfterContentInit (): void {
    console.log ( this.users );
    console.log ( this.users.toArray() );
  }

}
