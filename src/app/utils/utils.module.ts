import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoHoverDirective } from './do-hover.directive';
import { MyUppercasePipe } from './my-uppercase.pipe';
import { MyDatePipe } from './my-date.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DoHoverDirective, MyUppercasePipe, MyDatePipe],
  exports: [DoHoverDirective, MyUppercasePipe, MyDatePipe]
})
export class UtilsModule { }
