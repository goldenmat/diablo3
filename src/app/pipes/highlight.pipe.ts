import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, rarity: string): string {
    switch(rarity) {
      case "legendary":
        return "<span class='legendary'>" + value + "</span>"
      case "set":
        return "<span class='set'>" + value + "</span>"
      default:
        return value;
    }
  }

}
