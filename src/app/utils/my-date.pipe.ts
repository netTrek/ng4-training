import { Pipe, PipeTransform } from '@angular/core';

@Pipe ( {
  name: 'myDate'
} )
export class MyDatePipe implements PipeTransform {

  transform ( value: Date, type: string = 'short'): any {

    const weekdays: string[] = [
      'Sontag',
      'Montag',
      'Dienstag',
      'Mittwoch',
      'Donnerstag',
      'Freitag',
      'Samstag'
    ];

    const shortweekdays: string[] = [
      'So',
      'Mo',
      'Di',
      'Mi',
      'Do',
      'Fr',
      'Sa'
    ];

    const day: string = (type === 'short' ? shortweekdays : weekdays ) [value.getDay()];
    let dd: number | string = value.getDate();
    if ( dd < 10 ) {
      dd = '0' + dd;
    }
    let mm: number | string = value.getMonth() + 1;
    if ( mm < 10 ) {
      mm = '0' + mm;
    }
    const yy: number = value.getFullYear();

    return `${day} ${dd}.${mm}.${yy}`;
  }

}
