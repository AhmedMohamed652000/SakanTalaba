import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date2'
})
export class DatePipe implements PipeTransform {

  transform(data:string): any {
    let years=Number( data.slice(0,1));
    let year=data.slice(1,3);
    let month=  data.slice(3,5);
    let day=  data.slice(5,7);

    if(years == 3)
    {
      years=20
      return (`${years}${year}/${month}/${day}`).toString()
    }
    else(years == 2)
    {
      years=19
      return (`${years}${year}/${month}/${day}`).toString()
    }

    }

}
