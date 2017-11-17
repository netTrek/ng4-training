import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserAdressComponent } from './user-adress/user-adress.component';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [UserService],
  declarations: [UserComponent, UserListComponent, UserHeaderComponent, UserAdressComponent],
  exports: [UserComponent, UserListComponent, UserHeaderComponent, UserAdressComponent]
})
export class UserModule { }