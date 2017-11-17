import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'gfn-countdown',
  templateUrl: './countdown.component.html',
  styleUrls  : [ './countdown.component.scss' ]
} )
export class CountdownComponent implements OnInit {

  percent = 100;

  private intervalId: any;
  private totaltime   = 5;
  private currentTime = 0;

  constructor () {
  }

  ngOnInit () {
    this.intervalId = setInterval ( () => {
      if ( this.currentTime ++ === this.totaltime ) {
        this.dispose ();
        return;
      }
      this.percent = Math.floor( ( 1 -  this.currentTime / this.totaltime ) * 100 ) ;
    }, 1000 );
  }

  private dispose () {
    clearInterval ( this.intervalId );
  }
}
