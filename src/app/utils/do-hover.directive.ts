import { Directive, HostBinding, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[gfnDoHover]'
})
export class DoHoverDirective implements OnChanges {

  @Input()
  @HostBinding ('style.color')
  gfnDoHover = 'red';

  private _useColor: string;

  constructor( ) {}

  @HostListener ('mouseenter')
  onEnter () {
    this.gfnDoHover = this._useColor;
  }
  @HostListener ('mouseleave')
  onLeave () {
    this.gfnDoHover = null;
  }

  ngOnChanges ( changes: SimpleChanges ): void {
    if ( !!changes.gfnDoHover && changes.gfnDoHover.currentValue === '' ) {
      this._useColor = this.gfnDoHover = 'red';
    } else {
      this._useColor = this.gfnDoHover;
    }
  }

}
