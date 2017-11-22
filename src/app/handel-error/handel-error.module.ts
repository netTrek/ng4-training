import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandelErrorComponent } from './handel-error/handel-error.component';
import { PlayWithExportOptionComponent } from './play-with-export-option/play-with-export-option.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HandelErrorComponent, PlayWithExportOptionComponent],
  exports: [HandelErrorComponent, PlayWithExportOptionComponent]
})
export class HandelErrorModule { }
