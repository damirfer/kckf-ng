import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'century'
})
export class CenturyPipe implements PipeTransform {

  transform(value: number): string {
    const century = Math.ceil(value / 100);
    return `${century}th century`;
  }

}
