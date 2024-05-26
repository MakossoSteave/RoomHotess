import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genremovie',
  standalone: true
})
export class GenremoviePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
