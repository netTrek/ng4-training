import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';
import { UserAdressComponent } from '../user-adress/user-adress.component';

@Component ( {
  selector   : 'gfn-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]
} )
export class UserComponent implements OnInit, AfterContentInit  {


  @ContentChild ( UserAdressComponent )
  userAdress: UserAdressComponent;

  constructor ( $elemnt: ElementRef ) {
  }

  ngOnInit () {
    console.log ( 'UserUserComponent initialized' );
  }

  ngAfterContentInit (): void {
    if ( !! this.userAdress ) {
      console.log ( 'this follwoing user-adress comp was found',
        this.userAdress );
    } else {
      console.log ( 'this user comp has no adress inf' );
    }
  }

}
