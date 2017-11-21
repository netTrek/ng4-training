import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive ( {
  selector: '[gfnDoHover]'
} )
export class DoHoverDirective implements OnChanges, OnInit {

  @Input ()
  @HostBinding ( 'style.color' )
  gfnDoHover: string;

  private _useColor: string;
  private _initColor: string | null = null;

  constructor ( elem: ElementRef ) {
    if ( elem.nativeElement.style.color !== '' ) {
      this._initColor = elem.nativeElement.style.color;
    }
  }

  ngOnInit (): void {
    this.gfnDoHover = this._initColor;
  }

  @HostListener ( 'mouseenter' )
  onEnter () {
    this.gfnDoHover = this._useColor;
  }

  @HostListener ( 'mouseleave' )
  onLeave () {
    this.gfnDoHover = this._initColor;
  }

  ngOnChanges ( changes: SimpleChanges ): void {
    if ( ! ! changes.gfnDoHover && changes.gfnDoHover.currentValue === '' ) {
      this._useColor = 'red';
    } else {
      this._useColor = this.gfnDoHover;
    }
  }

}
