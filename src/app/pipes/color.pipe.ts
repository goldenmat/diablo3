import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(text: string): string {
    switch(text) {
      case "Barbarian":
        return "<span class='barbarian'>Barbarian</span>"
      case "Crusader":
        return "<span class='crusader'>Crusader</span>"
      case "Demon Hunter":
        return "<span class='demonhunter'>Demon Hunter</span>"
      case "Monk":
        return "<span class='monk'>Monk</span>"
      case "Necromancer":
        return "<span class='necromancer'>Necromancer</span>"
      case "Witch Doctor":
        return "<span class='witchdoctor'>Witch Doctor</span>"
      case "Wizard":
        return "<span class='wizard'>Wizard</span>"
      default:
        return text;
    }
  }

}
