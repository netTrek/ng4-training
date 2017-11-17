import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BallComponent } from './ball.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BallComponent],
  exports: [BallComponent]
})
export class BallModule { }
