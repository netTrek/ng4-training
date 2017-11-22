import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { ContactComponent } from './contact/contact/contact.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserResolveService } from './user/user-resolve.service';

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
    component: UserViewComponent
  },
  {
    path: 'user/:id',
    component: UserDetailsComponent,
    resolve: {
      user: UserResolveService
    }
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
