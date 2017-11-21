import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'gfn-num-of-users',
  templateUrl: './num-of-users.component.html',
  styleUrls: ['./num-of-users.component.scss']
})
export class NumOfUsersComponent implements OnInit {

  constructor( public $user: UserService ) { }

  ngOnInit() {
  }

}
