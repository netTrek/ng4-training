import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gfn-user-adress',
  templateUrl: './user-adress.component.html',
  styleUrls: ['./user-adress.component.scss']
})
export class UserAdressComponent implements OnInit {

  name = 'saban';


  constructor() { }

  ngOnInit() {
    // console.log ( 'UserAdressComponent initialized' );
  }

}
