import { Component, OnInit } from '@angular/core';
import { AnalyzeResult, CommonItem, countMissing, isSlidable, Item, Stat } from '../entities/item';
import { MatMenuModule } from '@angular/material/menu';

import { HELMS as BARBARIANHELMS, SHOULDERS as BARBARIANSHOULDERS, CHESTARMORS as BARBARIANCHESTARMORS, GLOVES as BARBARIANGLOVES, PANTS as BARBARIANPANTS, BOOTS as BARBARIANBOOTS, BRACERS as BARBARIANBRACERS, BELTS as BARBARIANBELTS, MIGHTYBELTS as BARBARIANMIGHTYBELTS, RINGS as BARBARIANRINGS, AMULETS as BARBARIANAMULETS, BOWS as BARBARIANBOWS, DAGGERS as BARBARIANDAGGERS, MACES as BARBARIANMACES, MIGHTYWEAPONS as BARBARIANMIGHTYWEAPONS, SPEARS as BARBARIANSPEARS, SWORDS as BARBARIANSWORDS, TWOHANDEDMIGHTYWEAPONS as BARBARIANTWOHANDEDMIGHTYWEAPONS, SHIELDS as BARBARIANSHIELDS, RELICS as BARBARIANRELICS } from '../entities/barbarian';
import { HELMS as CRUSADERHELMS, SHOULDERS as CRUSADERSHOULDERS, CHESTARMORS as CRUSADERCHESTARMORS, GLOVES as CRUSADERGLOVES, PANTS as CRUSADERPANTS, BOOTS as CRUSADERBOOTS, BRACERS as CRUSADERBRACERS, BELTS as CRUSADERBELTS, RINGS as CRUSADERRINGS, AMULETS as CRUSADERAMULETS, BOWS as CRUSADERBOWS, DAGGERS as CRUSADERDAGGERS, FLAILS as CRUSADERFLAILS, SWORDS as CRUSADERSWORDS, TWOHANDEDFLAILS as CRUSADERTWOHANDEDFLAILS, TWOHANDEDMACES as CRUSADERTWOHANDEDMACES, CRUSADERSHIELDS as CRUSADERCRUSADERSHIELDS, SHIELDS as CRUSADERSHIELDS, RELICS as CRUSADERRELICS } from '../entities/crusader';
import { HELMS as DEMONHUNTERHELMS, SHOULDERS as DEMONHUNTERSHOULDERS, CHESTARMORS as DEMONHUNTERCHESTARMORS, CLOAKS as DEMONHUNTERCLOAKS, GLOVES as DEMONHUNTERGLOVES, PANTS as DEMONHUNTERPANTS, BOOTS as DEMONHUNTERBOOTS, BRACERS as DEMONHUNTERBRACERS, BELTS as DEMONHUNTERBELTS, RINGS as DEMONHUNTERRINGS, AMULETS as DEMONHUNTERAMULETS, BOWS as DEMONHUNTERBOWS, DAGGERS as DEMONHUNTERDAGGERS, HANDCROSSBOWS as DEMONHUNTERHANDCROSSBOWS, SWORDS as DEMONHUNTERSWORDS, QUIVERS as DEMONHUNTERQUIVERS, SHIELDS as DEMONHUNTERSHIELDS, RELICS as DEMONHUNTERRELICS } from '../entities/demonhunter';
import { HELMS as MONKHELMS, SPIRITSTONES as MONKSPIRITSTONES, SHOULDERS as MONKSHOULDERS, CHESTARMORS as MONKCHESTARMORS, GLOVES as MONKGLOVES, PANTS as MONKPANTS, BOOTS as MONKBOOTS, BRACERS as MONKBRACERS, BELTS as MONKBELTS, RINGS as MONKRINGS, AMULETS as MONKAMULETS, BOWS as MONKBOWS, DAGGERS as MONKDAGGERS, DAIBOS as MONKDAIBOS, FISTWEAPONS as MONKFISTWEAPONS, MACES as MONKMACES, SWORDS as MONKSWORDS, SHIELDS as MONKSHIELDS, RELICS as MONKRELICS } from '../entities/monk';
import { HELMS as NECROMANCERHELMS, SHOULDERS as NECROMANCERSHOULDERS, CHESTARMORS as NECROMANCERCHESTARMORS, GLOVES as NECROMANCERGLOVES, PANTS as NECROMANCERPANTS, BOOTS as NECROMANCERBOOTS, BRACERS as NECROMANCERBRACERS, BELTS as NECROMANCERBELTS, RINGS as NECROMANCERRINGS, AMULETS as NECROMANCERAMULETS, BOWS as NECROMANCERBOWS, DAGGERS as NECROMANCERDAGGERS, SCYTHES as NECROMANCERSCYTHES, SWORDS as NECROMANCERSWORDS, PHYLACTERYS as NECROMANCERPHYLACTERYS, SHIELDS as NECROMANCERSHIELDS, RELICS as NECROMANCERRELICS } from '../entities/necromancer';
import { HELMS as WITCHDOCTORHELMS, VOODOOMASKS as WITCHDOCTORVOODOOMASKS, SHOULDERS as WITCHDOCTORSHOULDERS, CHESTARMORS as WITCHDOCTORCHESTARMORS, GLOVES as WITCHDOCTORGLOVES, PANTS as WITCHDOCTORPANTS, BOOTS as WITCHDOCTORBOOTS, BRACERS as WITCHDOCTORBRACERS, BELTS as WITCHDOCTORBELTS, RINGS as WITCHDOCTORRINGS, AMULETS as WITCHDOCTORAMULETS, BOWS as WITCHDOCTORBOWS, CEREMONIALKNIFES as WITCHDOCTORCEREMONIALKNIFES, DAGGERS as WITCHDOCTORDAGGERS, SPEARS as WITCHDOCTORSPEARS, SWORDS as WITCHDOCTORSWORDS, MOJOS as WITCHDOCTORMOJOS, SHIELDS as WITCHDOCTORSHIELDS, RELICS as WITCHDOCTORRELICS } from '../entities/witchdoctor';
import { HELMS as WIZARDHELMS, WIZARDHATS as WIZARDWIZARDHATS, SHOULDERS as WIZARDSHOULDERS, CHESTARMORS as WIZARDCHESTARMORS, GLOVES as WIZARDGLOVES, PANTS as WIZARDPANTS, BOOTS as WIZARDBOOTS, BRACERS as WIZARDBRACERS, BELTS as WIZARDBELTS, RINGS as WIZARDRINGS, AMULETS as WIZARDAMULETS, BOWS as WIZARDBOWS, DAGGERS as WIZARDDAGGERS, SWORDS as WIZARDSWORDS, WANDS as WIZARDWANDS, SHIELDS as WIZARDSHIELDS, SOURCES as WIZARDSOURCES, RELICS as WIZARDRELICS } from '../entities/wizard';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.css']
})
export class InspectorComponent implements OnInit {
  myForm!: FormGroup;

  typePicked: string = "Item";
  namePicked: Item = {
    builds: [],
    ancient: false,
    primal: false,
    augmented: false,
    locked: false,
    type: "",
    rarity: "",
    image: "",
    stats: [],
    name: "Name"
  };
  resultString: string = "";

  showName: boolean = false;
  showStats: boolean = false;
  showStat1: boolean = false;
  showStat2: boolean = false;
  showStat3: boolean = false;
  showStat4: boolean = false;
  showStat5: boolean = false;
  showResult: boolean = false;

  items: CommonItem[] = [];
  types: string[] = [];
  names: Item[] = [];
  stats: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initialize();

    this.types = this.getTypes(this.items);
    this.stats = this.getStats(this.items);

    this.myForm = new FormGroup({
      ancient: new FormControl(false),
      statValue1: new FormControl(0),
      statValue2: new FormControl(0),
      statValue3: new FormControl(0),
      statValue4: new FormControl(0),
      statValue5: new FormControl(0),
      statPicked1: new FormControl('Stat'),
      statPicked2: new FormControl('Stat'),
      statPicked3: new FormControl('Stat'),
      statPicked4: new FormControl('Stat'),
      statPicked5: new FormControl('Stat'),
    })
  }

  analyzeItem(item: Item, items: CommonItem[]) : AnalyzeResult {
    let result = new AnalyzeResult();
    result.item = new CommonItem();
    result.item.item = new Item();
    result.item.item.ancient = false;
    result.item.item.locked = false;
    result.difference = 0;

    items.forEach(i => { // Per ogni oggetto
      if(item.name == i.item.name) { // Per ogni equivalente
        let difference : number = 0;
        i.item.stats.forEach(s => { // Per ogni statistica
          if((s.guaranteed !== false && item.stats.some(x => x.name == s.name))) { // La statistica c'è nel nuovo oggetto
            if(!s.present) { // Non c'è nell'oggetto originale
              difference = ++difference;
            }
            else if(isSlidable(s.name, i.item.type)) { // C'è nell'oggetto originale ed è confrontabile per valore
              if((item.stats.filter(x => x.name == s.name)[0].value ?? 0) < (s.value ?? 0)) // Oggetto presente meglio di oggetto nuovo
              {
                difference = --difference;
              }
              if((item.stats.filter(x => x.name == s.name)[0].value ?? 0) > (s.value ?? 0)) // Oggetto nuovo meglio di oggetto presente
              {
                difference = ++difference;
              }
            }
          }
          else if(s.passive && item.stats.some(x => x.name == "Passive")) { // Passiva
            if((item.stats.filter(x => x.name == "Passive")[0].value ?? 0) < (s.value ?? 0)) // Oggetto presente meglio di oggetto nuovo
            {
              difference = --difference;
            }
            if((item.stats.filter(x => x.name == "Passive")[0].value ?? 0) > (s.value ?? 0)) // Oggetto nuovo meglio di oggetto presente
            {
              difference = ++difference;
            }
          }
          else if(this.isSkill(s) && item.stats.some(x => x.name == "Skill")) { // Skill
            if((item.stats.filter(x => x.name == "Skill")[0].value ?? 0) < (s.value ?? 0)) // Oggetto presente meglio di oggetto nuovo
            {
              difference = --difference;
            }
            if((item.stats.filter(x => x.name == "Skill")[0].value ?? 0) > (s.value ?? 0)) // Oggetto nuovo meglio di oggetto presente
            {
              difference = ++difference;
            }
          }
          else if (s.guaranteed !== false && s.present) { // La statistica non c'è nel nuovo oggetto ma c'è nel vecchio
            difference = --difference;
          }
        });

        
        if(difference > result.difference
          || difference == result.difference && !result.item!.item.ancient && item.ancient
          || difference == result.difference && !result.item!.item.ancient && result.item!.item.locked
          || difference == result.difference - 1 && result.item!.item.ancient && item.ancient && result.item!.item.locked
          ) {
          result.item = i;
          result.difference = difference;
        }
      }
    });

    if(result.item.item.name === undefined) {
      result.item = undefined;
    }

    return result;
  }

  isSkill(stat: Stat): boolean {
    return stat.name.includes("%") && stat.name !== "Arcane%" && stat.name !== "Cold%" && stat.name !== "Fire%"
      && stat.name !== "Holy%" && stat.name !== "Lightning%" && stat.name !== "Physical%" && stat.name !== "Damage%"
      && stat.name !== "Poison%" && stat.name !== "Block%" && stat.name !== "Elite%" && stat.name !== "Life%"
  }

  chooseType(type: string) {
    this.typePicked = type;
    this.names = this.getNames(type, this.items);
    this.showName = true;
  }

  chooseName(name: Item) {
    this.namePicked = name;
    this.showStats = true;
  }

  pickStat1() {
    this.showStat1 = true;
  }

  pickStat2() {
    this.showStat2 = true;
  }

  pickStat3() {
    this.showStat3 = true;
  }

  pickStat4() {
    this.showStat4 = true;
  }

  pickStat5() {
    this.showStat5 = true;
  }

  getTypes(items: CommonItem[]) : string[] {
    let result: string[] = [];
    items.forEach(i => {
      if (!result.includes(i.item.type)) {
        result.push(i.item.type);
      }
    });
    result.sort();
    result.shift();
    return result;
  }

  getNames(type: string, items: CommonItem[]) : Item[] {
    let result: Item[] = [];
    items.forEach(i => {
      if (!result.some(x => x.name == i.item.name) && i.item.type == type) {
        result.push(i.item);
      }
    });
    result.sort((a, b) => {
      if (a.rarity == "set" && b.rarity == "legendary")
        return -1;
      else if (a.rarity == "legendary" && b.rarity == "set")
        return 1;
      else {
        return a.name.localeCompare(b.name);
      }
    });
    return result;
  }

  getStats(items: CommonItem[]) : string[] {
    let result: string[] = [];
    items.forEach(i => {
      i.item.stats.forEach(s => {
        if (s.passive === undefined && s.hellfire === undefined && s.guaranteed !== false && !result.includes(s.name)) {
          result.push(s.name);
        }
      });
    });
    result = result.filter(x => !x.includes("%") || x === "<span>Arcane%</span>" || x === "<span>Cold%</span>" || x === "<span>Damage%</span>"
      || x === "<span>Fire%</span>" || x === "<span>Holy%</span>" || x === "<span>Lightning%</span>" || x === "<span>Block%</span>" || x === "<span>Life%</span>"
      || x === "<span>Physical%</span>" || x === "<span>Poison%</span>" || x === "<span>Skill%</span>" || x === "<span>Elite%</span>"
      );
    result.push("Skill")
    result.push("Passive")
    return result.sort();
  }

  initialize() {
    BARBARIANHELMS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Barbarian";
      this.items.push(newItem);
    });
    BARBARIANSHOULDERS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Barbarian";
      this.items.push(newItem);
    });
    BARBARIANCHESTARMORS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Barbarian";
      this.items.push(newItem);
    });
    BARBARIANGLOVES.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Barbarian";
      this.items.push(newItem);
    });
    BARBARIANPANTS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Barbarian";
      this.items.push(newItem);
    });
    BARBARIANBOOTS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Barbarian";
      this.items.push(newItem);
    });
    BARBARIANBRACERS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Barbarian";
      this.items.push(newItem);
    });
    BARBARIANBELTS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Barbarian";
      this.items.push(newItem);
    });
    BARBARIANMIGHTYBELTS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Barbarian";
      this.items.push(newItem);
    });
    BARBARIANRINGS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Barbarian";
      this.items.push(newItem);
    });
    BARBARIANAMULETS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Barbarian";
      this.items.push(newItem);
    });
    BARBARIANBOWS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Barbarian";
      this.items.push(newItem);
    });
    BARBARIANDAGGERS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Barbarian";
      this.items.push(newItem);
    });
    BARBARIANMACES.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Barbarian";
      this.items.push(newItem);
    });
    BARBARIANMIGHTYWEAPONS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Barbarian";
      this.items.push(newItem);
    });
    BARBARIANSPEARS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Barbarian";
      this.items.push(newItem);
    });
    BARBARIANSWORDS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Barbarian";
      this.items.push(newItem);
    });
    BARBARIANTWOHANDEDMIGHTYWEAPONS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Barbarian";
      this.items.push(newItem);
    });
    BARBARIANSHIELDS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Barbarian";
      this.items.push(newItem);
    });
    BARBARIANRELICS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Barbarian";
      this.items.push(newItem);
    });
    
    CRUSADERHELMS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Crusader";
      this.items.push(newItem);
    });
    CRUSADERSHOULDERS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Crusader";
      this.items.push(newItem);
    });
    CRUSADERCHESTARMORS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Crusader";
      this.items.push(newItem);
    });
    CRUSADERGLOVES.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Crusader";
      this.items.push(newItem);
    });
    CRUSADERPANTS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Crusader";
      this.items.push(newItem);
    });
    CRUSADERBOOTS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Crusader";
      this.items.push(newItem);
    });
    CRUSADERBRACERS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Crusader";
      this.items.push(newItem);
    });
    CRUSADERBELTS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Crusader";
      this.items.push(newItem);
    });
    CRUSADERRINGS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Crusader";
      this.items.push(newItem);
    });
    CRUSADERAMULETS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Crusader";
      this.items.push(newItem);
    });
    CRUSADERBOWS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Crusader";
      this.items.push(newItem);
    });
    CRUSADERDAGGERS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Crusader";
      this.items.push(newItem);
    });
    CRUSADERFLAILS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Crusader";
      this.items.push(newItem);
    });
    CRUSADERSWORDS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Crusader";
      this.items.push(newItem);
    });
    CRUSADERTWOHANDEDFLAILS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Crusader";
      this.items.push(newItem);
    });
    CRUSADERTWOHANDEDMACES.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Crusader";
      this.items.push(newItem);
    });
    CRUSADERCRUSADERSHIELDS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Crusader";
      this.items.push(newItem);
    });
    CRUSADERSHIELDS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Crusader";
      this.items.push(newItem);
    });
    CRUSADERRELICS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Crusader";
      this.items.push(newItem);
    });
    
    DEMONHUNTERHELMS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Demon Hunter";
      this.items.push(newItem);
    });
    DEMONHUNTERSHOULDERS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Demon Hunter";
      this.items.push(newItem);
    });
    DEMONHUNTERCHESTARMORS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Demon Hunter";
      this.items.push(newItem);
    });
    DEMONHUNTERCLOAKS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Demon Hunter";
      this.items.push(newItem);
    });
    DEMONHUNTERGLOVES.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Demon Hunter";
      this.items.push(newItem);
    });
    DEMONHUNTERPANTS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Demon Hunter";
      this.items.push(newItem);
    });
    DEMONHUNTERBOOTS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Demon Hunter";
      this.items.push(newItem);
    });
    DEMONHUNTERBRACERS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Demon Hunter";
      this.items.push(newItem);
    });
    DEMONHUNTERBELTS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Demon Hunter";
      this.items.push(newItem);
    });
    DEMONHUNTERRINGS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Demon Hunter";
      this.items.push(newItem);
    });
    DEMONHUNTERAMULETS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Demon Hunter";
      this.items.push(newItem);
    });
    DEMONHUNTERBOWS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Demon Hunter";
      this.items.push(newItem);
    });
    DEMONHUNTERDAGGERS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Demon Hunter";
      this.items.push(newItem);
    });
    DEMONHUNTERHANDCROSSBOWS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Demon Hunter";
      this.items.push(newItem);
    });
    DEMONHUNTERSWORDS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Demon Hunter";
      this.items.push(newItem);
    });
    DEMONHUNTERQUIVERS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Demon Hunter";
      this.items.push(newItem);
    });
    DEMONHUNTERSHIELDS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Demon Hunter";
      this.items.push(newItem);
    });
    DEMONHUNTERRELICS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Demon Hunter";
      this.items.push(newItem);
    });
    
    MONKHELMS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Monk";
      this.items.push(newItem);
    });
    MONKSPIRITSTONES.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Monk";
      this.items.push(newItem);
    });
    MONKSHOULDERS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Monk";
      this.items.push(newItem);
    });
    MONKCHESTARMORS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Monk";
      this.items.push(newItem);
    });
    MONKGLOVES.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Monk";
      this.items.push(newItem);
    });
    MONKPANTS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Monk";
      this.items.push(newItem);
    });
    MONKBOOTS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Monk";
      this.items.push(newItem);
    });
    MONKBRACERS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Monk";
      this.items.push(newItem);
    });
    MONKBELTS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Monk";
      this.items.push(newItem);
    });
    MONKRINGS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Monk";
      this.items.push(newItem);
    });
    MONKAMULETS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Monk";
      this.items.push(newItem);
    });
    MONKBOWS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Monk";
      this.items.push(newItem);
    });
    MONKDAGGERS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Monk";
      this.items.push(newItem);
    });
    MONKDAIBOS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Monk";
      this.items.push(newItem);
    });
    MONKFISTWEAPONS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Monk";
      this.items.push(newItem);
    });
    MONKMACES.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Monk";
      this.items.push(newItem);
    });
    MONKSWORDS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Monk";
      this.items.push(newItem);
    });
    MONKSHIELDS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Monk";
      this.items.push(newItem);
    });
    MONKRELICS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Monk";
      this.items.push(newItem);
    });
    
    NECROMANCERHELMS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Necromancer";
      this.items.push(newItem);
    });
    NECROMANCERSHOULDERS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Necromancer";
      this.items.push(newItem);
    });
    NECROMANCERCHESTARMORS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Necromancer";
      this.items.push(newItem);
    });
    NECROMANCERGLOVES.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Necromancer";
      this.items.push(newItem);
    });
    NECROMANCERPANTS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Necromancer";
      this.items.push(newItem);
    });
    NECROMANCERBOOTS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Necromancer";
      this.items.push(newItem);
    });
    NECROMANCERBRACERS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Necromancer";
      this.items.push(newItem);
    });
    NECROMANCERBELTS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Necromancer";
      this.items.push(newItem);
    });
    NECROMANCERRINGS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Necromancer";
      this.items.push(newItem);
    });
    NECROMANCERAMULETS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Necromancer";
      this.items.push(newItem);
    });
    NECROMANCERBOWS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Necromancer";
      this.items.push(newItem);
    });
    NECROMANCERDAGGERS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Necromancer";
      this.items.push(newItem);
    });
    NECROMANCERSCYTHES.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Necromancer";
      this.items.push(newItem);
    });
    NECROMANCERSWORDS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Necromancer";
      this.items.push(newItem);
    });
    NECROMANCERPHYLACTERYS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Necromancer";
      this.items.push(newItem);
    });
    NECROMANCERSHIELDS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Necromancer";
      this.items.push(newItem);
    });
    NECROMANCERRELICS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Necromancer";
      this.items.push(newItem);
    });
    
    WITCHDOCTORHELMS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Witch Doctor";
      this.items.push(newItem);
    });
    WITCHDOCTORVOODOOMASKS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Witch Doctor";
      this.items.push(newItem);
    });
    WITCHDOCTORSHOULDERS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Witch Doctor";
      this.items.push(newItem);
    });
    WITCHDOCTORCHESTARMORS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Witch Doctor";
      this.items.push(newItem);
    });
    WITCHDOCTORGLOVES.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Witch Doctor";
      this.items.push(newItem);
    });
    WITCHDOCTORPANTS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Witch Doctor";
      this.items.push(newItem);
    });
    WITCHDOCTORBOOTS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Witch Doctor";
      this.items.push(newItem);
    });
    WITCHDOCTORBRACERS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Witch Doctor";
      this.items.push(newItem);
    });
    WITCHDOCTORBELTS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Witch Doctor";
      this.items.push(newItem);
    });
    WITCHDOCTORRINGS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Witch Doctor";
      this.items.push(newItem);
    });
    WITCHDOCTORAMULETS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Witch Doctor";
      this.items.push(newItem);
    });
    WITCHDOCTORBOWS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Witch Doctor";
      this.items.push(newItem);
    });
    WITCHDOCTORCEREMONIALKNIFES.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Witch Doctor";
      this.items.push(newItem);
    });
    WITCHDOCTORDAGGERS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Witch Doctor";
      this.items.push(newItem);
    });
    WITCHDOCTORSPEARS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Witch Doctor";
      this.items.push(newItem);
    });
    WITCHDOCTORSWORDS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Witch Doctor";
      this.items.push(newItem);
    });
    WITCHDOCTORMOJOS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Witch Doctor";
      this.items.push(newItem);
    });
    WITCHDOCTORSHIELDS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Witch Doctor";
      this.items.push(newItem);
    });
    WITCHDOCTORRELICS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Witch Doctor";
      this.items.push(newItem);
    });
    
    WIZARDHELMS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Wizard";
      this.items.push(newItem);
    });
    WIZARDWIZARDHATS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Wizard";
      this.items.push(newItem);
    });
    WIZARDSHOULDERS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Wizard";
      this.items.push(newItem);
    });
    WIZARDCHESTARMORS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Wizard";
      this.items.push(newItem);
    });
    WIZARDGLOVES.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Wizard";
      this.items.push(newItem);
    });
    WIZARDPANTS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Wizard";
      this.items.push(newItem);
    });
    WIZARDBOOTS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Wizard";
      this.items.push(newItem);
    });
    WIZARDBRACERS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Wizard";
      this.items.push(newItem);
    });
    WIZARDBELTS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Wizard";
      this.items.push(newItem);
    });
    WIZARDRINGS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Wizard";
      this.items.push(newItem);
    });
    WIZARDAMULETS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Wizard";
      this.items.push(newItem);
    });
    WIZARDBOWS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Wizard";
      this.items.push(newItem);
    });
    WIZARDDAGGERS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Wizard";
      this.items.push(newItem);
    });
    WIZARDSWORDS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Wizard";
      this.items.push(newItem);
    });
    WIZARDWANDS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Wizard";
      this.items.push(newItem);
    });
    WIZARDSHIELDS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Wizard";
      this.items.push(newItem);
    });
    WIZARDSOURCES.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Wizard";
      this.items.push(newItem);
    });
    WIZARDRELICS.forEach(item => {
      let newItem = new CommonItem();
      newItem.item = item;
      newItem.class = "Wizard";
      this.items.push(newItem);
    });
  }

  onSubmit(form: FormGroup) {
    var submittedItem = new Item();
    submittedItem.name = this.namePicked.name;
    submittedItem.stats = [];
    submittedItem.ancient = form.value.ancient;

    var stat1 = new Stat();
    stat1.name = form.value.statPicked1;
    stat1.value = form.value.statValue1;
    if(stat1.value !== 0 || !isSlidable(stat1.name, submittedItem.type)) {
      submittedItem.stats.push(stat1);
    }
    var stat2 = new Stat();
    stat2.name = form.value.statPicked2;
    stat2.value = form.value.statValue2;
    if(stat2.value !== 0 || !isSlidable(stat2.name, submittedItem.type)) {
      submittedItem.stats.push(stat2);
    }
    var stat3 = new Stat();
    stat3.name = form.value.statPicked3;
    stat3.value = form.value.statValue3;
    if(stat3.value !== 0 || !isSlidable(stat3.name, submittedItem.type)) {
      submittedItem.stats.push(stat3);
    }
    var stat4 = new Stat();
    stat4.name = form.value.statPicked4;
    stat4.value = form.value.statValue4;
    if(stat4.value !== 0 || !isSlidable(stat4.name, submittedItem.type)) {
      submittedItem.stats.push(stat4);
    }
    var stat5 = new Stat();
    stat5.name = form.value.statPicked5;
    stat5.value = form.value.statValue5;
    if(stat5.value !== 0 || !isSlidable(stat5.name, submittedItem.type)) {
      submittedItem.stats.push(stat5);
    }

    var analyzeResult = this.analyzeItem(submittedItem, this.items);

    this.showItemResult(analyzeResult);
  }

  showItemResult(analyzeResult: AnalyzeResult) {
    this.showResult = true;

    if(analyzeResult.item === undefined) {
      this.resultString = "No worse item has been found";
    }
    else {
      this.resultString = "Consider changing <span class='"+ analyzeResult.item.item.rarity +"'>" + analyzeResult.item.item.name + "</span> " + 
      " of class <span class='"+ analyzeResult.item.class.toLowerCase().replace(" ", "") +"BG'>" + analyzeResult.item.class + "</span>";
      if(analyzeResult.item.item.follower !== undefined) {
        this.resultString += ", follower <span class='"+ analyzeResult.item.item.follower.toLowerCase() +"BG'>" + analyzeResult.item.item.follower + "</span>,";
      }
      this.resultString += " with difference " + analyzeResult.difference;
    }
  } 
}

