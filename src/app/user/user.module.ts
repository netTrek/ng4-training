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
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule } from '@angular/router';
import { UserResolveService } from './user-resolve.service';
import { UserGuard } from './user.guard';
import { UserAdminGuard } from './user-admin.guard';
import { UserAddComponent } from './user-add/user-add.component';
import { FormsModule } from '@angular/forms';

@NgModule ( {
  imports     : [
    CommonModule,
    CountdownModule,
    UtilsModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers   : [ UserService,
                  UserResolveService,
                  UserGuard,
                  UserAdminGuard
  ], // provide Service to Application
  declarations: [ UserComponent,
                  UserListComponent,
                  UserHeaderComponent,
                  UserAdressComponent,
                  UserViewComponent,
                  UserDetailsComponent,
                  UserAddComponent
  ],
  exports     : [ UserComponent,
                  UserListComponent,
                  UserHeaderComponent,
                  UserAdressComponent,
                  UserViewComponent,
                  UserAddComponent
  ]
} )
export class UserModule {
}
