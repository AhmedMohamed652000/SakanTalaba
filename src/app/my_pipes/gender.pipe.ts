import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(data:string): any {

    const gender_fromId=Number( data.slice(12,13));
    if(gender_fromId % 2 == 0)
    {
      return ("انثي");
    }
    else{
      return('ذكر');

    }

  }

  }


