import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gfn-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log ( 'UserHeaderComp initialized' );
  }

}