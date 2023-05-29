import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ifnull'
})
export class IfnullPipe implements PipeTransform {

  transform(data:any): string {

    if(data == null)
    {
      return ("لا يوجد");
    }
    else{
      return(data);

    }

  }

}
