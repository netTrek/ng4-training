import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { UserAdressComponent } from '../user-adress/user-adress.component';
import { UserHeaderComponent } from '../user-header/user-header.component';

@Component ( {
  selector   : 'gfn-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]
} )
export class UserComponent implements OnInit, AfterViewInit {

  @ViewChild ( UserHeaderComponent )
  userHeader: UserHeaderComponent;

  @ViewChild ( UserAdressComponent )
  userAdress: UserAdressComponent;

  @ViewChild ( 'myContainer' )
  myContainer: ElementRef;

  @ViewChildren ( UserAdressComponent )
  userAdressList: QueryList<UserAdressComponent>;

  username = 'Saban';
  adress   = 'Germany';

  color = 'green';
  width = 50;

  htmlDesc = `<h1>Saban</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt incidunt, <strong>modi</strong> nobis quam quasi reprehenderit. Alias at cumque dolore, eaque <script>alert('helll');</script> eveniet facilis ipsum laudantium nam necessitatibus placeat possimus praesentium reprehenderit?</p>`;

  catUrl = 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=940&h=650&auto=compress&cs=tinysrgb';

  constructor ( /*$elem: ElementRef*/ ) {
    /* BAD .... NO .....
    console.log ( 'elem', $elem.nativeElement );
    $elem.nativeElement.getElementsByTagName( 'gfn-user-adress' );
    */
  }

  chgAdress () {
    this.adress = 'Kosovo';
  }

  getAddressWithTopLevel ( msg?: string ): string {

    let out = '';

    switch ( this.adress ) {
      case 'Germany':
        out = 'de';
        break;
      default:
        out = 'ks';
        break;
    }

    return `${msg} ${this.adress} ${out}`;

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
