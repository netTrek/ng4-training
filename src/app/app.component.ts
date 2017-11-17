import { Component } from '@angular/core';

@Component ( {
  selector   : 'gfn-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {

  title = 'gfn';

  selectedInd = 0;

  setSelected ( id: number ) {
    this.selectedInd = id;
  }
}
