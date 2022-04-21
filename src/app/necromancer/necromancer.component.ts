import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

import { countMissingBuild, enoughMissing, gemDown, gemUp, getDifficulty, getSliderInfo, isForged, isFollower, isHellfire, isPassive, isSlidable, isWeapon, itemsMissing, toggleEnchantable, Gem, Item, Stat } from '../entities/item'

import { AMULETS, BELTS, BOWS, BOOTS, BRACERS, CHESTARMORS, DAGGERS, GEMS, GLOVES, HELMS, PANTS, PHYLACTERYS, RELICS, RINGS, SCYTHES, SHIELDS, SHOULDERS, SWORDS } from '../entities/necromancer'

@Component({
  selector: 'app-necromancer',
  templateUrl: './necromancer.component.html',
  styleUrls: ['./necromancer.component.css']
})
export class NecromancerComponent {

  @ViewChild('helmsAccordion') helmsAccordion!: MatAccordion;
  @ViewChild('shouldersAccordion') shouldersAccordion!: MatAccordion;
  @ViewChild('chestarmorsAccordion') chestarmorsAccordion!: MatAccordion;
  @ViewChild('glovesAccordion') glovesAccordion!: MatAccordion;
  @ViewChild('pantsAccordion') pantsAccordion!: MatAccordion;
  @ViewChild('bootsAccordion') bootsAccordion!: MatAccordion;
  @ViewChild('bracersAccordion') bracersAccordion!: MatAccordion;
  @ViewChild('beltsAccordion') beltsAccordion!: MatAccordion;
  @ViewChild('ringsAccordion') ringsAccordion!: MatAccordion;
  @ViewChild('amuletsAccordion') amuletsAccordion!: MatAccordion;
  @ViewChild('bowsAccordion') bowsAccordion!: MatAccordion;
  @ViewChild('daggersAccordion') daggersAccordion!: MatAccordion;
  @ViewChild('scythesAccordion') scythesAccordion!: MatAccordion;
  @ViewChild('swordsAccordion') swordsAccordion!: MatAccordion;
  @ViewChild('phylacterysAccordion') phylacterysAccordion!: MatAccordion;
  @ViewChild('shieldsAccordion') shieldsAccordion!: MatAccordion;
  @ViewChild('relicsAccordion') relicsAccordion!: MatAccordion;

  public showFollower: boolean = true;
  public showForged: boolean = true;
  public followerButtonName: string = 'Hide Followers';
  public forgedButtonName: string = 'Hide Forged';
  public highlighted: number = 0;
  public missingCount: number = 0;

  public build1Missing: number = 0;
  public build2Missing: number = 0;
  public build3Missing: number = 0;
  public build4Missing: number = 0;
  public build5Missing: number = 0;
  public build6Missing: number = 0;
  public build7Missing: number = 0;
  public build8Missing: number = 0;
  public build9Missing: number = 0;
  public build10Missing: number = 0;
  public build11Missing: number = 0;
  public build12Missing: number = 0;
  
  public fourMissing: number = 0;
  public threeMissing: number = 0;
  public twoMissing: number = 0;
  public oneMissing: number = 0;

  ngOnInit() {
    this.build1Missing = this.countMissing(this.build1Missing, 1);
    this.build2Missing = this.countMissing(this.build2Missing, 2);
    this.build3Missing = this.countMissing(this.build3Missing, 3);
    this.build4Missing = this.countMissing(this.build4Missing, 4);
    this.build5Missing = this.countMissing(this.build5Missing, 5);
    this.build6Missing = this.countMissing(this.build6Missing, 6);
    this.build7Missing = this.countMissing(this.build7Missing, 7);
    this.build8Missing = this.countMissing(this.build8Missing, 8);
    this.build9Missing = this.countMissing(this.build9Missing, 9);
    this.build10Missing = this.countMissing(this.build10Missing, 10);
    this.build11Missing = this.countMissing(this.build11Missing, 11);
    this.build12Missing = this.countMissing(this.build12Missing, 12);

    this.fourMissing = this.itemsMissing(4);
    this.threeMissing = this.itemsMissing(3);
    this.twoMissing = this.itemsMissing(2);
    this.oneMissing = this.itemsMissing(1);
  }
  
  countMissing(count: number, build: number): number {
    count += countMissingBuild(HELMS, build);
    count += countMissingBuild(SHOULDERS, build);
    count += countMissingBuild(CHESTARMORS, build);
    count += countMissingBuild(GLOVES, build);
    count += countMissingBuild(PANTS, build);
    count += countMissingBuild(BOOTS, build);
    count += countMissingBuild(BRACERS, build);
    count += countMissingBuild(BELTS, build);
    count += countMissingBuild(RINGS, build);
    count += countMissingBuild(AMULETS, build);
    count += countMissingBuild(BOWS, build);
    count += countMissingBuild(DAGGERS, build);
    count += countMissingBuild(SCYTHES, build);
    count += countMissingBuild(SWORDS, build);
    count += countMissingBuild(PHYLACTERYS, build);
    count += countMissingBuild(SHIELDS, build);
    count += countMissingBuild(RELICS, build);
    return count;
  }

  itemsMissing(threshold: number): number {
    let items = HELMS.concat(SHOULDERS).concat(CHESTARMORS).concat(GLOVES).concat(PANTS).concat(BOOTS)
      .concat(BRACERS).concat(BELTS).concat(RINGS).concat(AMULETS)
      .concat(BOWS).concat(DAGGERS).concat(SCYTHES).concat(SWORDS).concat(PHYLACTERYS).concat(SHIELDS).concat(RELICS);
    return itemsMissing(items, threshold);
  }

  downloadJSON() {
    let data : string = "";

    data += `import { Gem, Item } from './item'

`;

    // Helms
    data += `export const HELMS : Item[] = `;
    data += JSON.stringify(this.helms, null, 2);
    data += `

`;

    // Shoulders
    data += `export const SHOULDERS : Item[] = `;
    data += JSON.stringify(this.shoulders, null, 2);
    data += `

`;

    // Chest Armors
    data += `export const CHESTARMORS : Item[] = `;
    data += JSON.stringify(this.chestarmors, null, 2);
    data += `

`;

    // Gloves
    data += `export const GLOVES : Item[] = `;
    data += JSON.stringify(this.gloves, null, 2);
    data += `

`;

    // Pants
    data += `export const PANTS : Item[] = `;
    data += JSON.stringify(this.pants, null, 2);
    data += `

`;

    // Boots
    data += `export const BOOTS : Item[] = `;
    data += JSON.stringify(this.boots, null, 2);
    data += `

`;

    // Bracers
    data += `export const BRACERS : Item[] = `;
    data += JSON.stringify(this.bracers, null, 2);
    data += `

`;

    // Belts
    data += `export const BELTS : Item[] = `;
    data += JSON.stringify(this.belts, null, 2);
    data += `

`;

    // Rings
    data += `export const RINGS : Item[] = `;
    data += JSON.stringify(this.rings, null, 2);
    data += `

`;

    // Amulets
    data += `export const AMULETS : Item[] = `;
    data += JSON.stringify(this.amulets, null, 2);
    data += `

`;

    // Bows
    data += `export const BOWS : Item[] = `;
    data += JSON.stringify(this.bows, null, 2);
    data += `

`;

    // Daggers
    data += `export const DAGGERS : Item[] = `;
    data += JSON.stringify(this.daggers, null, 2);
    data += `

`;

    // Scythes
    data += `export const SCYTHES : Item[] = `;
    data += JSON.stringify(this.scythes, null, 2);
    data += `

`;

    // Swords
    data += `export const SWORDS : Item[] = `;
    data += JSON.stringify(this.swords, null, 2);
    data += `

`;

    // Phylacterys
    data += `export const PHYLACTERYS : Item[] = `;
    data += JSON.stringify(this.phylacterys, null, 2);
    data += `

`;

    // Shields
    data += `export const SHIELDS : Item[] = `;
    data += JSON.stringify(this.shields, null, 2);
    data += `

`;

    // Relics
    data += `export const RELICS : Item[] = `;
    data += JSON.stringify(this.relics, null, 2);
    data += `

`;

    // Gems
    data += `export const GEMS : Gem[] = `;
    data += JSON.stringify(this.gems, null, 2);
    data += `

`;

    this.downloadFile(data, 'json');
  }

  downloadFile(data: any, type: string) {
    var blob = new Blob([data], { type: type.toString() });
    var url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");
  }

  openAll() {
    this.helmsAccordion.openAll();
    this.shouldersAccordion.openAll();
    this.chestarmorsAccordion.openAll();
    this.glovesAccordion.openAll();
    this.pantsAccordion.openAll();
    this.bootsAccordion.openAll();
    this.bracersAccordion.openAll();
    this.beltsAccordion.openAll();
    this.ringsAccordion.openAll();
    this.amuletsAccordion.openAll();
    this.bowsAccordion.openAll();
    this.daggersAccordion.openAll();
    this.scythesAccordion.openAll();
    this.swordsAccordion.openAll();
    this.phylacterysAccordion.openAll();
    this.shieldsAccordion.openAll();
    this.relicsAccordion.openAll();
  }

  closeAll() {
    this.helmsAccordion.closeAll();
    this.shouldersAccordion.closeAll();
    this.chestarmorsAccordion.closeAll();
    this.glovesAccordion.closeAll();
    this.pantsAccordion.closeAll();
    this.bootsAccordion.closeAll();
    this.bracersAccordion.closeAll();
    this.beltsAccordion.closeAll();
    this.ringsAccordion.closeAll();
    this.amuletsAccordion.closeAll();
    this.bowsAccordion.closeAll();
    this.daggersAccordion.closeAll();
    this.scythesAccordion.closeAll();
    this.swordsAccordion.closeAll();
    this.phylacterysAccordion.closeAll();
    this.shieldsAccordion.closeAll();
    this.relicsAccordion.closeAll();
  }

  enoughMissing(item: Item) {
    return enoughMissing(item, this.missingCount);
  }

  gemDown(gem: Gem) {
    return gemDown(gem);
  }

  gemUp(gem: Gem) {
    return gemUp(gem);
  }

  getDifficulty(item: Item) {
    return getDifficulty(item);
  }

  getSliderInfoStep(name: string, string: string, ancient: boolean, itemName: string): number {
    return getSliderInfo(name, string, ancient, itemName).step;
  }

  getSliderInfoMin(name: string, string: string, ancient: boolean, itemName: string): number {
    return getSliderInfo(name, string, ancient, itemName).min;
  }

  getSliderInfoMax(name: string, string: string, ancient: boolean, itemName: string): number {
    return getSliderInfo(name, string, ancient, itemName).max;
  }

  getSliderInfoDamageStep(string: string, ancient: boolean, itemName: string): number {
    return getSliderInfo("Damage2", string, ancient, itemName).step;
  }

  getSliderInfoDamageMin(string: string, ancient: boolean, itemName: string): number {
    return getSliderInfo("Damage2", string, ancient, itemName).min;
  }

  getSliderInfoDamageMax(string: string, ancient: boolean, itemName: string): number {
    return getSliderInfo("Damage2", string, ancient, itemName).max;
  }

  highlight(build: number) {
    if(this.highlighted === build) {
      this.highlighted = 0;
    }
    else {
      this.highlighted = build;
    }
  }

  isForged(item: Item) {
    return isForged(item);
  }

  isFollower(item: Item) {
    return isFollower(item);
  }

  isHellfire(stat: Stat) {
    return isHellfire(stat);
  }

  isPassive(stat: Stat) {
    return isPassive(stat);
  }

  isSlidable(name: string, type: string) {
    return isSlidable(name, type);
  }

  isWeapon(name: string) {
    return isWeapon(name);
  }

  showMissing(missing: number) {
    if(this.missingCount === missing) {
      this.missingCount = 0;
    }
    else {
      this.missingCount = missing;
    }
  }

  toggleAugmented(item: Item) {
    item.augmented = item.augmented? false : true;
  }

  toggleEnchantable(stat: Stat, item: Item) {
    return toggleEnchantable(stat, item);
  }

  toggleForged() {
    this.showForged = !this.showForged;

    if(this.showForged) {
      this.forgedButtonName = 'Hide Forged';
    }
    else {
      this.forgedButtonName = 'Show Forged';
    }
  }

  toggleFollower() {
    this.showFollower = !this.showFollower;

    if(this.showFollower) {
      this.followerButtonName = 'Hide Followers';
    }
    else {
      this.followerButtonName = 'Show Followers';
    }
  }

  toggleHellfire(stat: Stat, item: Item) {
    if(stat.enchantable) {
      stat.enchantable = false;
    }
    else {
      item.stats.forEach(passive => {
        if(isHellfire(passive)) {
          passive.enchantable = false;
        }
      });
      stat.enchantable = true;
    }
  }

  helms = HELMS;
  shoulders = SHOULDERS;
  chestarmors = CHESTARMORS;
  gloves = GLOVES;
  pants = PANTS;
  boots = BOOTS;
  bracers = BRACERS;
  belts = BELTS;
  rings = RINGS;
  amulets = AMULETS;
  bows = BOWS;
  daggers = DAGGERS;
  scythes = SCYTHES;
  swords = SWORDS;
  phylacterys = PHYLACTERYS;
  shields = SHIELDS;
  relics = RELICS;
  gems = GEMS;

}