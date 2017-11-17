import { Component, OnDestroy, OnInit } from '@angular/core';

@Component ( {
  selector   : 'gfn-ball',
  templateUrl: './ball.component.html',
  styleUrls  : [ './ball.component.scss' ]
} )
export class BallComponent implements OnInit, OnDestroy {

  private id: number;

  constructor () {
  }

  left = 0;

  ngOnInit () {
  }

  ngOnDestroy (): void {
    clearInterval ( this.id );
  }

  move () {
    this.id = window.setInterval ( () => {
      this.left += 5;
    }, 40 );
  }

}
