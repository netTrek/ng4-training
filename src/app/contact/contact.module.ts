import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( [
      {
        path: '',
        component: ContactComponent
      }
    ])
  ],
  declarations: [ContactComponent],
  exports: [ContactComponent]
})
export class ContactModule { }
