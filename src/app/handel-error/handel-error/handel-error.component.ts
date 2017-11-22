import { Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../../user/user.service';

@Component ( {
  selector   : 'gfn-handel-error',
  templateUrl: './handel-error.component.html',
  styleUrls  : [ './handel-error.component.scss' ]
} )
export class HandelErrorComponent implements OnInit, OnChanges {


  @HostBinding ( 'style.display' )
  private display = 'none';

  @Input ()
  errormessage: string;

  constructor ( private $user: UserService ) {
  }

  ngOnInit () {
  }

  close () {
    this.$user.errorMsg$.next( null );
  }

  ngOnChanges ( changes: SimpleChanges ): void {
    if ( !! changes.errormessage &&
      changes.errormessage.currentValue !== null && changes.errormessage.currentValue !== ''
    ) {
      this.display = 'block';
    } else {
      this.display = 'none';
    }
  }

}
