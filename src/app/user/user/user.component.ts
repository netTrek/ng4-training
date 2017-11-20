import {
  AfterViewInit, Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output, QueryList, ViewChild,
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
export class UserComponent implements OnInit, AfterViewInit {

  @Input ()
  ind = 0;

  @HostBinding ('class.selected')
  isSelected = true;

  get selectedInd (): number {
    return this._selectedInd;
  }

  @Input()
  set selectedInd ( value: number ) {
    this._selectedInd = value;
    console.log (  this._selectedInd , this.ind );
    this.isSelected = this._selectedInd === this.ind;
  }

  private _selectedInd: number;

  @HostListener ( 'click' , ['$event'] )
  selectMe ( event: Event ) {
    this.selected.next ( this.ind );
  }

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

  htmlDesc = `<h1>Saban</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt incidunt, <strong>modi</strong> nobis quam quasi reprehenderit. Alias at cumque dolore, eaque <script>alert('helll');</script> eveniet facilis ipsum laudantium nam necessitatibus placeat possimus praesentium reprehenderit?</p>`;

  catUrl = 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=940&h=650&auto=compress&cs=tinysrgb';


  @Input ()
  user: User;
  /*
  @Input()
  selectedInd: number;
  */

  @Output ()
  selected: EventEmitter<number> = new EventEmitter ();

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

  ngOnInit () {
    console.log ( 'UserUserComponent initialized' );
  }

  ngAfterViewInit (): void {
    // console.log ( this.userAdress, this.userHeader,
    //   this.userAdressList.toArray() );

    // console.log ( this.myContainer.nativeElement );
  }

}
