import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../model/user';
import { Address } from '../model/address';
import { ActivatedRoute, Data, Router } from '@angular/router';
import 'rxjs/add/operator/first';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Component ( {
  selector   : 'gfn-user-add',
  templateUrl: './user-add.component.html',
  styleUrls  : [ './user-add.component.scss' ]
} )
export class UserAddComponent implements OnInit {

  title: string;
  mode = 'add';

  user: User = <User> {
    name  : '',
    adress: <Address> {
      zip    : 0,
      country: ''
    }
  };

  constructor ( public $user: UserService, private router: Router, private route: ActivatedRoute ) {
  }

  ngOnInit () {
    this.route.url
      .first()
      .subscribe( next => {
        switch (next[0].path) {
          case 'edit':
            this.title = 'update User';
            const user: User = (<BehaviorSubject<Data>>this.route.parent.data).getValue().user;
            this.user = <User>{...user, adress: {...user.adress}  };
            this.mode = 'edit';
            break;
          default:
            this.title = 'create new User';
            this.mode = 'add';
            break;
        }
      });
  }

  create () {
    switch (this.mode) {
      case 'edit':
        this.$user.update( this.user );
        (<BehaviorSubject<Data>>this.route.parent.data).getValue().user = this.user;
        const dataSub: BehaviorSubject<Data> = (<BehaviorSubject<Data>>this.route.parent.data);
        const data: Data = dataSub.getValue();
        data['user'] = this.user;
        dataSub.next( data );
        this.router.navigate( ['/user', this.user.id ] );
        break;
      default:
        this.$user.create ( this.user )
            .first () // autounsubscripe after first response
            .subscribe( newUser => {
          this.router.navigate( ['/user', newUser.id ] );
        });
        break;
    }
  }

}
