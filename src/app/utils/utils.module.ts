import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoHoverDirective } from './do-hover.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DoHoverDirective],
  exports: [DoHoverDirective]
})
export class UtilsModule { }
