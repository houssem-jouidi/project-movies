import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(words:string): string {
    return words.split(" ").slice(0,30).join(" ")
  }

}
