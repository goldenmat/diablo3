import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { DomSanitizer } from '@angular/platform-browser';

import { AMULETS, AXES, BELTS, BOOTS, BRACERS, CHESTARMORS, GLOVES, HELMS, MACES, MIGHTYBELTS, MIGHTYWEAPONS, PANTS, RINGS, SHOULDERS, SWORDS, TWOHANDEDMIGHTYWEAPONS } from '../entities/barbarian'

@Component({
  selector: 'app-barbarian',
  templateUrl: './barbarian.component.html',
  styleUrls: ['./barbarian.component.css']
})
export class BarbarianComponent implements OnInit {

  @ViewChild('helmsAccordion') helmsAccordion!: MatAccordion;
  @ViewChild('shouldersAccordion') shouldersAccordion!: MatAccordion;
  @ViewChild('chestarmorsAccordion') chestarmorsAccordion!: MatAccordion;
  @ViewChild('glovesAccordion') glovesAccordion!: MatAccordion;
  @ViewChild('pantsAccordion') pantsAccordion!: MatAccordion;
  @ViewChild('bootsAccordion') bootsAccordion!: MatAccordion;
  @ViewChild('bracersAccordion') bracersAccordion!: MatAccordion;
  @ViewChild('beltsAccordion') beltsAccordion!: MatAccordion;
  @ViewChild('mightybeltsAccordion') mightybeltsAccordion!: MatAccordion;
  @ViewChild('ringsAccordion') ringsAccordion!: MatAccordion;
  @ViewChild('amuletsAccordion') amuletsAccordion!: MatAccordion;
  @ViewChild('axesAccordion') axesAccordion!: MatAccordion;
  @ViewChild('macesAccordion') macesAccordion!: MatAccordion;
  @ViewChild('mightyweaponsAccordion') mightyweaponsAccordion!: MatAccordion;
  @ViewChild('swordsAccordion') swordsAccordion!: MatAccordion;
  @ViewChild('twohandedmightyweaponsAccordion') twohandedmightyweaponsAccordion!: MatAccordion;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  downloadJSON() {
    let data : string = "";

    data += `import { Item } from './item'

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

    // Mighty Belts
    data += `export const MIGHTYBELTS : Item[] = `;
    data += JSON.stringify(this.mightybelts, null, 2);
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

    // Axes
    data += `export const AXES : Item[] = `;
    data += JSON.stringify(this.axes, null, 2);
    data += `

`;

    // Maces
    data += `export const MACES : Item[] = `;
    data += JSON.stringify(this.maces, null, 2);
    data += `

`;

    // Mighty Weapons
    data += `export const MIGHTYWEAPONS : Item[] = `;
    data += JSON.stringify(this.mightyweapons, null, 2);
    data += `

`;

    // Swords
    data += `export const SWORDS : Item[] = `;
    data += JSON.stringify(this.swords, null, 2);
    data += `

`;

    // Two Handed Mighty Weapons
    data += `export const TWOHANDEDMIGHTYWEAPONS : Item[] = `;
    data += JSON.stringify(this.twohandedmightyweapons, null, 2);
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
    this.mightybeltsAccordion.openAll();
    this.ringsAccordion.openAll();
    this.amuletsAccordion.openAll();
    this.axesAccordion.openAll();
    this.macesAccordion.openAll();
    this.mightyweaponsAccordion.openAll();
    this.swordsAccordion.openAll();
    this.twohandedmightyweaponsAccordion.openAll();
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
    this.mightybeltsAccordion.closeAll();
    this.ringsAccordion.closeAll();
    this.amuletsAccordion.closeAll();
    this.axesAccordion.closeAll();
    this.macesAccordion.closeAll();
    this.mightyweaponsAccordion.closeAll();
    this.swordsAccordion.closeAll();
    this.twohandedmightyweaponsAccordion.closeAll();
  }

  helms = HELMS;
  shoulders = SHOULDERS;
  chestarmors = CHESTARMORS;
  gloves = GLOVES;
  pants = PANTS;
  boots = BOOTS;
  bracers = BRACERS;
  belts = BELTS;
  mightybelts = MIGHTYBELTS;
  rings = RINGS;
  amulets = AMULETS;
  axes = AXES;
  maces = MACES;
  mightyweapons = MIGHTYWEAPONS;
  swords = SWORDS;
  twohandedmightyweapons = TWOHANDEDMIGHTYWEAPONS;
}