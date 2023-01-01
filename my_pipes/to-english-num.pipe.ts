import { Pipe, PipeTransform } from '@angular/core';
import starkString from "starkstring";

@Pipe({
  name: 'toEnglishNum'
})
export class ToEnglishNumPipe implements PipeTransform {

  transform(_data:string): any {
    return  starkString(_data).englishNumber();
  }

}
