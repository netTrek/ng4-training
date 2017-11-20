import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { User } from '../model/user';

@Component({
  selector: 'gfn-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterContentInit {

  @Input()
  list: Array<User>;

  @Input()
  selectedInd = 0;

  @ContentChildren ( UserComponent )
  users: QueryList<UserComponent>;

  constructor() { }

  setSelected ( id: number ) {
    this.selectedInd = id;
  }

  ngOnInit() {
    // console.log ( 'UserListComponent initialized' );
  }

  ngAfterContentInit (): void {
    // console.log ( this.users );
    // console.log ( this.users.toArray() );
  }

}
