import { Directive, ElementRef, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[gfnDoHover]'
})
export class DoHoverDirective implements OnChanges {


  @Input()
  @HostBinding ('style.color')
  gfnDoHover = 'red';

  constructor( /*private elemRef: ElementRef */) {
    /*
    console.log ( 'hello dir', elemRef.nativeElement );

    elemRef.nativeElement.style.color = 'red';
*/
  }

  ngOnChanges ( changes: SimpleChanges ): void {
    if ( !!changes.gfnDoHover && changes.gfnDoHover.currentValue === '' ) {
      this.gfnDoHover = 'red';
    }
  }

}
