import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { ContactComponent } from './contact/contact/contact.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserResolveService } from './user/user-resolve.service';
import { UserGuard } from './user/user.guard';
import { UserAdminGuard } from './user/user-admin.guard';
import { UserAddComponent } from './user/user-add/user-add.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user',
    component: UserViewComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'user/:id',
    component: UserDetailsComponent,
    resolve: {
      user: UserResolveService
    },
    canActivate: [UserAdminGuard],
    children: [
      {
        path: 'edit',
        component: UserAddComponent,
        canActivate: [UserAdminGuard]
      }
    ]
  },
  {
    path: 'add',
    component: UserAddComponent,
    canActivate: [UserAdminGuard]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
