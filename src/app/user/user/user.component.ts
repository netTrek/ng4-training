import {
  AfterViewInit, Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output, QueryList, SimpleChanges,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { UserAdressComponent } from '../user-adress/user-adress.component';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { Address } from '../model/address';
import { User } from '../model/user';

@Component ( {
  selector   : 'gfn-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]
} )
export class UserComponent implements OnInit, AfterViewInit, OnChanges {

  date: Date = new Date ();

  @HostBinding ('class.selected')
  isSelected = true;

  @Input()
  selectedUsr: User;

  @ViewChild ( UserHeaderComponent )
  userHeader: UserHeaderComponent;

  @ViewChild ( UserAdressComponent )
  userAdress: UserAdressComponent;

  @ViewChild ( 'myContainer' )
  myContainer: ElementRef;

  @ViewChildren ( UserAdressComponent )
  userAdressList: QueryList<UserAdressComponent>;

  color = 'green';
  width = 50;

  textAlignment = 'align-right';

  // tslint:disable-next-line
  htmlDesc = `<h1>Saban</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt incidunt, <strong>modi</strong> nobis quam quasi reprehenderit. Alias at cumque dolore, eaque <script>alert('helll');</script> eveniet facilis ipsum laudantium nam necessitatibus placeat possimus praesentium reprehenderit?</p>`;

  catUrl = 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=940&h=650&auto=compress&cs=tinysrgb';


  @Input ()
  user: User;
  /*
  @Input()
  selectedInd: number;
  */

  @Output ()
  selectUsr: EventEmitter<User> = new EventEmitter ();

  @Output ()
  delByUsr: EventEmitter<User> = new EventEmitter ();

  @Output ()
  updateUsr: EventEmitter<User> = new EventEmitter ();

  constructor ( /*$elem: ElementRef*/ ) {
    /* BAD .... NO .....
    console.log ( 'elem', $elem.nativeElement );
    $elem.nativeElement.getElementsByTagName( 'gfn-user-adress' );
    */
  }


/*
  @HostListener ( 'window:resize' , ['$event'] )
  resize ( event: Event ) {
    console.log ( event );
  }
  */

  chgAligment ( newAlignClass: string ) {
    this.textAlignment = newAlignClass;
  }

  getAddressWithTopLevel ( msg: string = '' ): string {

    let out = '';

    switch ( this.user.adress.country ) {
      case 'Germany':
        out = 'de';
        break;
      default:
        out = 'ks';
        break;
    }

    return `${msg} ${this.user.adress.zip} ${out} ${this.user.adress.country}`;

  }

  @HostListener ( 'click' , ['$event'] )
  selectMe ( event: Event ) {
    this.selectUsr.next ( this.user );
  }

  deleteMe () {
    this.delByUsr.next( this.user );
  }

  updateMe ( ) {
    this.updateUsr.next( { ...this.user, name: this.user.name + 'abc' } );
  }

  ngOnChanges ( changes: SimpleChanges ): void {
    // console.log ( changes );
    if ( !! changes.selectedUsr && !! changes.ind ) {
      this.isSelected = changes.selectedUsr.currentValue === changes.user.currentValue;
    } else if ( !! changes.selectedUsr ) {
      this.isSelected = changes.selectedUsr.currentValue === this.user;
    }
  }

  ngOnInit () {
    // console.log ( 'UserUserComponent initialized' );
  }

  ngAfterViewInit (): void {
    // console.log ( this.userAdress, this.userHeader,
    //   this.userAdressList.toArray() );
    // console.log ( this.myContainer.nativeElement );
  }

}
