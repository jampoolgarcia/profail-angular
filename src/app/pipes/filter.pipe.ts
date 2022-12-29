import { Pipe, PipeTransform } from '@angular/core';
import { ProjectIdxI } from '../interfaces/project';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any[], filterBy: string, properties: string[]): any[] {
    if(values.length <= 2 || !filterBy )
       return values;

    let arr: any[] = [];

    values.filter(value => {
      for (let property of properties) {
        if (value[property].toLowerCase().includes(filterBy.toLowerCase()) && arr.indexOf(value) === -1) {
          arr.push(value);
        }
      }
    });

    return arr;
  }

}
