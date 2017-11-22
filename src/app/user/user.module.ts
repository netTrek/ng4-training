import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserAdressComponent } from './user-adress/user-adress.component';
import { CountdownModule } from '../countdown/countdown.module';
import { UtilsModule } from '../utils/utils.module';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserViewComponent } from './user-view/user-view.component';

@NgModule({
  imports: [
    CommonModule,
    CountdownModule,
    UtilsModule,
    HttpClientModule
  ],
  providers: [ UserService ], // provide Service to Application
  declarations: [UserComponent, UserListComponent, UserHeaderComponent, UserAdressComponent, UserViewComponent],
  exports: [UserComponent, UserListComponent, UserHeaderComponent, UserAdressComponent, UserViewComponent]
})
export class UserModule { }
