import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component ( {
  selector   : 'gfn-hello-world',
  // encapsulation: ViewEncapsulation.Native,
  templateUrl: './hello-world.component.html',
  // template : `<p>{{username}}</p>`,
  styleUrls  : [ './hello-world.component.scss' ]

  // styles     : [ `aside { color: blue; }` ]
} )
export class HelloWorldComponent implements OnInit {

  username = 'Saban';
  counter  = 0;

  constructor () {
  }

  ngOnInit () {

    console.log ( 'hello-world comp is initialized' );

  }

  increment () {
    this.counter ++;
  }

}
