import { Component, OnInit } from '@angular/core';
import { FormModel } from '../../user/model/form-model';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'gfn-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginFormData: FormModel = <FormModel>{ username: '', password: ''};

  constructor( public $user: UserService ) { }

  ngOnInit() {
  }

  login() {
    this.$user.login( this.loginFormData );
  }

}
