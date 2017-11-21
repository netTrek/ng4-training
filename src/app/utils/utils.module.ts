import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoHoverDirective } from './do-hover.directive';
import { MyUppercasePipe } from './my-uppercase.pipe';
import { MyDatePipe } from './my-date.pipe';
import { NumOfUsersComponent } from './num-of-users/num-of-users.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DoHoverDirective, MyUppercasePipe, MyDatePipe, NumOfUsersComponent],
  exports: [DoHoverDirective, MyUppercasePipe, MyDatePipe, NumOfUsersComponent]
})
export class UtilsModule { }
