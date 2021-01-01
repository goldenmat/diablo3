import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

import { getSliderInfo, isSlidable, isWeapon, Item, Stat } from '../entities/item'

import { AMULETS, BELTS, BOOTS, BRACERS, CHESTARMORS, GLOVES, HELMS, PANTS, RINGS, SHOULDERS, SOURCES, SWORDS, WANDS, WIZARDHATS } from '../entities/wizard'

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent {

  @ViewChild('helmsAccordion') helmsAccordion!: MatAccordion;
  @ViewChild('wizardhatsAccordion') wizardhatsAccordion!: MatAccordion;
  @ViewChild('shouldersAccordion') shouldersAccordion!: MatAccordion;
  @ViewChild('chestarmorsAccordion') chestarmorsAccordion!: MatAccordion;
  @ViewChild('glovesAccordion') glovesAccordion!: MatAccordion;
  @ViewChild('pantsAccordion') pantsAccordion!: MatAccordion;
  @ViewChild('bootsAccordion') bootsAccordion!: MatAccordion;
  @ViewChild('bracersAccordion') bracersAccordion!: MatAccordion;
  @ViewChild('beltsAccordion') beltsAccordion!: MatAccordion;
  @ViewChild('ringsAccordion') ringsAccordion!: MatAccordion;
  @ViewChild('amuletsAccordion') amuletsAccordion!: MatAccordion;
  @ViewChild('swordsAccordion') swordsAccordion!: MatAccordion;
  @ViewChild('wandsAccordion') wandsAccordion!: MatAccordion;
  @ViewChild('sourcesAccordion') sourcesAccordion!: MatAccordion;

  downloadJSON() {
    let data : string = "";

    data += `import { Item } from './item'

`;

    // Helms
    data += `export const HELMS : Item[] = `;
    data += JSON.stringify(this.helms, null, 2);
    data += `

`;

    // Wizard Hats
    data += `export const WIZARDHATS : Item[] = `;
    data += JSON.stringify(this.wizardhats, null, 2);
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

    // Swords
    data += `export const SWORDS : Item[] = `;
    data += JSON.stringify(this.swords, null, 2);
    data += `

`;

    // Wands
    data += `export const WANDS : Item[] = `;
    data += JSON.stringify(this.wands, null, 2);
    data += `

`;

    // Sources
    data += `export const SOURCES : Item[] = `;
    data += JSON.stringify(this.sources, null, 2);
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
    this.wizardhatsAccordion.openAll();
    this.shouldersAccordion.openAll();
    this.chestarmorsAccordion.openAll();
    this.glovesAccordion.openAll();
    this.pantsAccordion.openAll();
    this.bootsAccordion.openAll();
    this.bracersAccordion.openAll();
    this.beltsAccordion.openAll();
    this.ringsAccordion.openAll();
    this.amuletsAccordion.openAll();
    this.swordsAccordion.openAll();
    this.wandsAccordion.openAll();
    this.sourcesAccordion.openAll();
  }

  closeAll() {
    this.helmsAccordion.closeAll();
    this.wizardhatsAccordion.closeAll();
    this.shouldersAccordion.closeAll();
    this.chestarmorsAccordion.closeAll();
    this.glovesAccordion.closeAll();
    this.pantsAccordion.closeAll();
    this.bootsAccordion.closeAll();
    this.bracersAccordion.closeAll();
    this.beltsAccordion.closeAll();
    this.ringsAccordion.closeAll();
    this.amuletsAccordion.closeAll();
    this.swordsAccordion.closeAll();
    this.wandsAccordion.closeAll();
    this.sourcesAccordion.closeAll();
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

  isSlidable(name: string, type: string) {
    return isSlidable(name, type);
  }

  isWeapon(name: string) {
    return isWeapon(name);
  }

  toggleEnchantable(stat: Stat, item: Item) {
    stat.enchantable = stat.enchantable? false : true;
    item.locked = item.locked? false : true;
  }

  helms = HELMS;
  wizardhats = WIZARDHATS;
  shoulders = SHOULDERS;
  chestarmors = CHESTARMORS;
  gloves = GLOVES;
  pants = PANTS;
  boots = BOOTS;
  bracers = BRACERS;
  belts = BELTS;
  rings = RINGS;
  amulets = AMULETS;
  swords = SWORDS;
  wands = WANDS;
  sources = SOURCES;

}