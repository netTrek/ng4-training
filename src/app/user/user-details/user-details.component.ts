import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'gfn-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy  {
  private subscription: Subscription;

  userId: number;

  constructor( private $route: ActivatedRoute ) {}

  ngOnInit() {
    this.subscription = this.$route.paramMap
      .map( paramMap => paramMap.get( 'id') )
      .subscribe( id => this.userId = Number(id) );
  }

  ngOnDestroy (): void {
    this.subscription.unsubscribe();
  }

}
