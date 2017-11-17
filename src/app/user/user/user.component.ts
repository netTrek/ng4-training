import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { UserAdressComponent } from '../user-adress/user-adress.component';
import { UserHeaderComponent } from '../user-header/user-header.component';

@Component ( {
  selector   : 'gfn-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]
} )
export class UserComponent implements OnInit, AfterViewInit {

  @ViewChild( UserHeaderComponent )
  userHeader: UserHeaderComponent;

  @ViewChild( UserAdressComponent )
  userAdress: UserAdressComponent;

  @ViewChild ('myContainer')
  myContainer: ElementRef;

  @ViewChildren ( UserAdressComponent )
  userAdressList: QueryList<UserAdressComponent>;

  username = 'Saban';
  adress   = 'Germany';

  constructor ( /*$elem: ElementRef*/ ) {
    /* BAD .... NO .....
    console.log ( 'elem', $elem.nativeElement );
    $elem.nativeElement.getElementsByTagName( 'gfn-user-adress' );
    */
  }

  ngOnInit () {
    console.log ( 'UserUserComponent initialized' );
  }

  ngAfterViewInit (): void {
    // console.log ( this.userAdress, this.userHeader,
    //   this.userAdressList.toArray() );
    
    console.log ( this.myContainer.nativeElement );
  }

}
