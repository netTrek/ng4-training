import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';

@Component({
  selector: 'gfn-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy  {
  private subscription: Subscription;
  private subscription1: Subscription;
  private subscription2: Subscription;

  userId: number;
  // user$: Observable<User>;
  user: User;

  constructor( private $route: ActivatedRoute, private $user: UserService ) {}

  ngOnInit() {

    this.subscription1 = this.$route.paramMap
      .map( paramMap => paramMap.get( 'id') )
      .subscribe( id => {
        this.userId = Number(id);
        // this.user$ = this.$user.getUserById( this.userId );
      } );

    this.subscription2 = this.$route.data
      .map( data => data['user'] )
      .subscribe( user => this.user = user );


  }

  ngOnDestroy (): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

}
