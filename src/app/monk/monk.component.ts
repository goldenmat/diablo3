import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

import { getSliderInfo, isSlidable, isWeapon, Item, Stat } from '../entities/item'

import { AMULETS, BELTS, BOOTS, BRACERS, CHESTARMORS, DAIBOS, FISTWEAPONS, GLOVES, HELMS, MACES, PANTS, RINGS, SHOULDERS, SPIRITSTONES, SWORDS } from '../entities/monk'

@Component({
  selector: 'app-monk',
  templateUrl: './monk.component.html',
  styleUrls: ['./monk.component.css']
})
export class MonkComponent {

  @ViewChild('helmsAccordion') helmsAccordion!: MatAccordion;
  @ViewChild('spiritstonesAccordion') spiritstonesAccordion!: MatAccordion;
  @ViewChild('shouldersAccordion') shouldersAccordion!: MatAccordion;
  @ViewChild('chestarmorsAccordion') chestarmorsAccordion!: MatAccordion;
  @ViewChild('glovesAccordion') glovesAccordion!: MatAccordion;
  @ViewChild('pantsAccordion') pantsAccordion!: MatAccordion;
  @ViewChild('bootsAccordion') bootsAccordion!: MatAccordion;
  @ViewChild('bracersAccordion') bracersAccordion!: MatAccordion;
  @ViewChild('beltsAccordion') beltsAccordion!: MatAccordion;
  @ViewChild('ringsAccordion') ringsAccordion!: MatAccordion;
  @ViewChild('amuletsAccordion') amuletsAccordion!: MatAccordion;
  @ViewChild('daibosAccordion') daibosAccordion!: MatAccordion;
  @ViewChild('fistweaponsAccordion') fistweaponsAccordion!: MatAccordion;
  @ViewChild('macesAccordion') macesAccordion!: MatAccordion;
  @ViewChild('swordsAccordion') swordsAccordion!: MatAccordion;

  downloadJSON() {
    let data : string = "";

    data += `import { Item } from './item'

`;

    // Helms
    data += `export const HELMS : Item[] = `;
    data += JSON.stringify(this.helms, null, 2);
    data += `

`;

    // Spirit Stones
    data += `export const SPIRITSTONES : Item[] = `;
    data += JSON.stringify(this.spiritstones, null, 2);
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

    // Daibos
    data += `export const DAIBOS : Item[] = `;
    data += JSON.stringify(this.daibos, null, 2);
    data += `

`;

    // Fist Weapons
    data += `export const FISTWEAPONS : Item[] = `;
    data += JSON.stringify(this.fistweapons, null, 2);
    data += `

`;

    // Maces
    data += `export const MACES : Item[] = `;
    data += JSON.stringify(this.maces, null, 2);
    data += `

`;

    // Swords
    data += `export const SWORDS : Item[] = `;
    data += JSON.stringify(this.swords, null, 2);
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
    this.spiritstonesAccordion.openAll();
    this.shouldersAccordion.openAll();
    this.chestarmorsAccordion.openAll();
    this.glovesAccordion.openAll();
    this.pantsAccordion.openAll();
    this.bootsAccordion.openAll();
    this.bracersAccordion.openAll();
    this.beltsAccordion.openAll();
    this.ringsAccordion.openAll();
    this.amuletsAccordion.openAll();
    this.daibosAccordion.openAll();
    this.fistweaponsAccordion.openAll();
    this.macesAccordion.openAll();
    this.swordsAccordion.openAll();
  }

  closeAll() {
    this.helmsAccordion.closeAll();
    this.spiritstonesAccordion.closeAll();
    this.shouldersAccordion.closeAll();
    this.chestarmorsAccordion.closeAll();
    this.glovesAccordion.closeAll();
    this.pantsAccordion.closeAll();
    this.bootsAccordion.closeAll();
    this.bracersAccordion.closeAll();
    this.beltsAccordion.closeAll();
    this.ringsAccordion.closeAll();
    this.amuletsAccordion.closeAll();
    this.daibosAccordion.closeAll();
    this.fistweaponsAccordion.closeAll();
    this.macesAccordion.closeAll();
    this.swordsAccordion.closeAll();
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
  spiritstones = SPIRITSTONES;
  shoulders = SHOULDERS;
  chestarmors = CHESTARMORS;
  gloves = GLOVES;
  pants = PANTS;
  boots = BOOTS;
  bracers = BRACERS;
  belts = BELTS;
  rings = RINGS;
  amulets = AMULETS;
  daibos = DAIBOS;
  fistweapons = FISTWEAPONS;
  maces = MACES;
  swords = SWORDS;

}