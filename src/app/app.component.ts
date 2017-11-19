import { Component } from '@angular/core';
import { Address } from './user/model/address';

@Component ( {
  selector   : 'gfn-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {

  title = 'gfn';
  selectedInd = 0;

  add1: Address = <Address>{
    zip: 1234,
    country: 'Germany',
  };
  add2: Address = <Address>{
    zip: 700,
    country: 'Bond',
  };

  setSelected ( id: number ) {
    this.selectedInd = id;
  }

  over ( event: Event ) {
    console.log ( 'over', event );
  }
}
