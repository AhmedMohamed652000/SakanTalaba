import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullToZero'
})
export class NullToZeroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
