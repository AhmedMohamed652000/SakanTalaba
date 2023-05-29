import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullToZero'
})
export class NullToZeroPipe implements PipeTransform {

  transform(_data:any): any {

    if(_data.length > 0)
    return's'
  }
}
