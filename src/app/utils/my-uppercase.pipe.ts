import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUppercase'
})
export class MyUppercasePipe implements PipeTransform {

  transform(value: any, prefix: string = '' ): any {
    return prefix + String(value).toUpperCase();
  }

}
