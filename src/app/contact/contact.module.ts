import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { buildPath } from 'selenium-webdriver/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( [
      {
        path: '',
        component: ContactComponent,
        children: [
          {
            path: 'map',
            component: GoogleMapsComponent
          }
        ]
      }
    ])
  ],
  declarations: [ContactComponent, GoogleMapsComponent],
  exports: [ContactComponent, GoogleMapsComponent]
})
export class ContactModule { }
