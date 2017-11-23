import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../model/user';
import { Address } from '../model/address';
import { ActivatedRoute, Data, Router } from '@angular/router';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/first';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component ( {
  selector   : 'gfn-user-add',
  templateUrl: './user-add.component.html',
  styleUrls  : [ './user-add.component.scss' ]
} )
export class UserAddComponent implements OnInit {
  mode: string;

  user: User = <User> {
    name  : '',
    adress: <Address> {
      zip    : 0,
      country: ''
    }
  };

  get data (): BehaviorSubject<Data> {
    return <BehaviorSubject<Data>>this.route.parent.data;
  }

  constructor ( public $user: UserService, private router: Router, private route: ActivatedRoute ) {
  }

  ngOnInit () {

    this.route.url
        .first ()
        .subscribe ( next => {
          switch ( next[ 0 ].path ) {
            case 'edit':
              this.mode        = 'edit';
              const user: User = this.data.getValue ()[ UserDetailsComponent.USER ];
              this.user        = { ...user, adress: { ...user.adress } };
              break;
            default:
              this.mode = 'add';
              break;
          }
        } );

  }

  del () {
    this.$user.delete( this.user );
    this.router.navigate ( [ '/user'] );
  }

  create () {
    switch ( this.mode ) {
      case 'edit':
        this.$user.update( this.user );
        const crr: Data = this.data.getValue();
        crr[UserDetailsComponent.USER] = this.user;
        this.data.next( crr );
        this.router.navigate ( [ '/user',
                                 this.user.id
        ] );
        break;
      default:
        this.$user.create ( this.user )
            .first () // autounsubscripe after first response
            .subscribe ( newUser => {
              this.router.navigate ( [ '/user',
                                       newUser.id
              ] );
            } );
        break;
    }
  }

}
