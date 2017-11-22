import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../model/user';
import { Address } from '../model/address';
import { Router } from '@angular/router';
import 'rxjs/add/operator/first';
@Component ( {
  selector   : 'gfn-user-add',
  templateUrl: './user-add.component.html',
  styleUrls  : [ './user-add.component.scss' ]
} )
export class UserAddComponent implements OnInit {

  user: User = <User> {
    name  : '',
    adress: <Address> {
      zip    : 0,
      country: ''
    }
  };

  constructor ( public $user: UserService, private router: Router ) {
  }

  ngOnInit () {
  }

  create () {
    this.$user.create ( this.user )
        .first () // autounsubscripe after first response
        .subscribe( newUser => {
      this.router.navigate( ['/user', newUser.id ] );
    });
  }

}
