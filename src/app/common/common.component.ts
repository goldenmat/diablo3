import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

import { HELMS as BARBARIANHELMS, SHOULDERS as BARBARIANSHOULDERS, CHESTARMORS as BARBARIANCHESTARMORS, GLOVES as BARBARIANGLOVES, PANTS as BARBARIANPANTS, BOOTS as BARBARIANBOOTS, BRACERS as BARBARIANBRACERS, BELTS as BARBARIANBELTS, RINGS as BARBARIANRINGS, AMULETS as BARBARIANAMULETS, BOWS as BARBARIANBOWS, DAGGERS as BARBARIANDAGGERS, MACES as BARBARIANMACES, SWORDS as BARBARIANSWORDS, SHIELDS as BARBARIANSHIELDS, RELICS as BARBARIANRELICS } from '../entities/barbarian';
import { HELMS as CRUSADERHELMS, SHOULDERS as CRUSADERSHOULDERS, CHESTARMORS as CRUSADERCHESTARMORS, GLOVES as CRUSADERGLOVES, PANTS as CRUSADERPANTS, BOOTS as CRUSADERBOOTS, BRACERS as CRUSADERBRACERS, BELTS as CRUSADERBELTS, RINGS as CRUSADERRINGS, AMULETS as CRUSADERAMULETS, BOWS as CRUSADERBOWS, DAGGERS as CRUSADERDAGGERS, SWORDS as CRUSADERSWORDS, TWOHANDEDMACES as CRUSADERTWOHANDEDMACES, SHIELDS as CRUSADERSHIELDS, RELICS as CRUSADERRELICS } from '../entities/crusader';
import { HELMS as DEMONHUNTERHELMS, SHOULDERS as DEMONHUNTERSHOULDERS, CHESTARMORS as DEMONHUNTERCHESTARMORS, GLOVES as DEMONHUNTERGLOVES, PANTS as DEMONHUNTERPANTS, BOOTS as DEMONHUNTERBOOTS, BRACERS as DEMONHUNTERBRACERS, BELTS as DEMONHUNTERBELTS, RINGS as DEMONHUNTERRINGS, AMULETS as DEMONHUNTERAMULETS, BOWS as DEMONHUNTERBOWS, DAGGERS as DEMONHUNTERDAGGERS, SWORDS as DEMONHUNTERSWORDS, SHIELDS as DEMONHUNTERSHIELDS, RELICS as DEMONHUNTERRELICS } from '../entities/demonhunter';
import { HELMS as MONKHELMS, SHOULDERS as MONKSHOULDERS, CHESTARMORS as MONKCHESTARMORS, GLOVES as MONKGLOVES, PANTS as MONKPANTS, BOOTS as MONKBOOTS, BRACERS as MONKBRACERS, BELTS as MONKBELTS, RINGS as MONKRINGS, AMULETS as MONKAMULETS, BOWS as MONKBOWS, DAGGERS as MONKDAGGERS, MACES as MONKMACES, SWORDS as MONKSWORDS, SHIELDS as MONKSHIELDS, RELICS as MONKRELICS } from '../entities/monk';
import { HELMS as NECROMANCERHELMS, SHOULDERS as NECROMANCERSHOULDERS, CHESTARMORS as NECROMANCERCHESTARMORS, GLOVES as NECROMANCERGLOVES, PANTS as NECROMANCERPANTS, BOOTS as NECROMANCERBOOTS, BRACERS as NECROMANCERBRACERS, BELTS as NECROMANCERBELTS, RINGS as NECROMANCERRINGS, AMULETS as NECROMANCERAMULETS, BOWS as NECROMANCERBOWS, DAGGERS as NECROMANCERDAGGERS, SWORDS as NECROMANCERSWORDS, SHIELDS as NECROMANCERSHIELDS, RELICS as NECROMANCERRELICS } from '../entities/necromancer';
import { HELMS as WITCHDOCTORHELMS, SHOULDERS as WITCHDOCTORSHOULDERS, CHESTARMORS as WITCHDOCTORCHESTARMORS, GLOVES as WITCHDOCTORGLOVES, PANTS as WITCHDOCTORPANTS, BOOTS as WITCHDOCTORBOOTS, BRACERS as WITCHDOCTORBRACERS, BELTS as WITCHDOCTORBELTS, RINGS as WITCHDOCTORRINGS, AMULETS as WITCHDOCTORAMULETS, BOWS as WITCHDOCTORBOWS, DAGGERS as WITCHDOCTORDAGGERS, SWORDS as WITCHDOCTORSWORDS, SHIELDS as WITCHDOCTORSHIELDS, RELICS as WITCHDOCTORRELICS } from '../entities/witchdoctor';
import { HELMS as WIZARDHELMS, SHOULDERS as WIZARDSHOULDERS, CHESTARMORS as WIZARDCHESTARMORS, GLOVES as WIZARDGLOVES, PANTS as WIZARDPANTS, BOOTS as WIZARDBOOTS, BRACERS as WIZARDBRACERS, BELTS as WIZARDBELTS, RINGS as WIZARDRINGS, AMULETS as WIZARDAMULETS, BOWS as WIZARDBOWS, DAGGERS as WIZARDDAGGERS, SWORDS as WIZARDSWORDS, SHIELDS as WIZARDSHIELDS, RELICS as WIZARDRELICS } from '../entities/wizard';

import { CommonItem, commonItems, getDifficulty, getSliderInfo, isForged, isFollower, isPassive, isSlidable, isWeapon, toggleEnchantable, Item, Stat } from '../entities/item';

import { ColorPipe } from '../pipes/color.pipe';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CommonComponent implements OnInit {

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
  @ViewChild('macesAccordion') macesAccordion!: MatAccordion;
  @ViewChild('swordsAccordion') swordsAccordion!: MatAccordion;
  @ViewChild('twohandedmacesAccordion') twohandedmacesAccordion!: MatAccordion;
  @ViewChild('shieldsAccordion') shieldsAccordion!: MatAccordion;
  @ViewChild('relicsAccordion') relicsAccordion!: MatAccordion;

  public showFollower: boolean = true;
  public showForged: boolean = true;
  public followerButtonName: string = 'Hide Followers';
  public forgedButtonName: string = 'Hide Forged';
  public highlighted: string = "";
  
  ngOnInit(): void {

    this.helms = [];
    this.shoulders = [];
    this.chestarmors = [];
    this.gloves = [];
    this.pants = [];
    this.boots = [];
    this.bracers = [];
    this.belts = [];
    this.rings = [];
    this.amulets = [];
    this.bows = [];
    this.daggers = [];
    this.maces = [];
    this.swords = [];
    this.twohandedmaces = [];
    this.shields = [];
    this.relics = [];

    // Helms
    BARBARIANHELMS.forEach(helm => {
      if(commonItems.includes(helm.name)) {
        let newHelm = new CommonItem();
        newHelm.item = helm;
        newHelm.class = "Barbarian";
        this.helms.push(newHelm);
      }
    });
    CRUSADERHELMS.forEach(helm => {
      if(commonItems.includes(helm.name)) {
        let newHelm = new CommonItem();
        newHelm.item = helm;
        newHelm.class = "Crusader";
        this.helms.push(newHelm);
      }
    });
    DEMONHUNTERHELMS.forEach(helm => {
      if(commonItems.includes(helm.name)) {
        let newHelm = new CommonItem();
        newHelm.item = helm;
        newHelm.class = "Demon Hunter";
        this.helms.push(newHelm);
      }
    });
    MONKHELMS.forEach(helm => {
      if(commonItems.includes(helm.name)) {
        let newHelm = new CommonItem();
        newHelm.item = helm;
        newHelm.class = "Monk";
        this.helms.push(newHelm);
      }
    });
    NECROMANCERHELMS.forEach(helm => {
      if(commonItems.includes(helm.name)) {
        let newHelm = new CommonItem();
        newHelm.item = helm;
        newHelm.class = "Necromancer";
        this.helms.push(newHelm);
      }
    });
    WITCHDOCTORHELMS.forEach(helm => {
      if(commonItems.includes(helm.name)) {
        let newHelm = new CommonItem();
        newHelm.item = helm;
        newHelm.class = "Witch Doctor";
        this.helms.push(newHelm);
      }
    });
    WIZARDHELMS.forEach(helm => {
      if(commonItems.includes(helm.name)) {
        let newHelm = new CommonItem();
        newHelm.item = helm;
        newHelm.class = "Wizard";
        this.helms.push(newHelm);
      }
    });

    // Shoulders
    BARBARIANSHOULDERS.forEach(shoulder => {
      if(commonItems.includes(shoulder.name)) {
        let newShoulder = new CommonItem();
        newShoulder.item = shoulder;
        newShoulder.class = "Barbarian";
        this.shoulders.push(newShoulder);
      }
    });
    CRUSADERSHOULDERS.forEach(shoulder => {
      if(commonItems.includes(shoulder.name)) {
        let newShoulder = new CommonItem();
        newShoulder.item = shoulder;
        newShoulder.class = "Crusader";
        this.shoulders.push(newShoulder);
      }
    });
    DEMONHUNTERSHOULDERS.forEach(shoulder => {
      if(commonItems.includes(shoulder.name)) {
        let newShoulder = new CommonItem();
        newShoulder.item = shoulder;
        newShoulder.class = "Demon Hunter";
        this.shoulders.push(newShoulder);
      }
    });
    MONKSHOULDERS.forEach(shoulder => {
      if(commonItems.includes(shoulder.name)) {
        let newShoulder = new CommonItem();
        newShoulder.item = shoulder;
        newShoulder.class = "Monk";
        this.shoulders.push(newShoulder);
      }
    });
    NECROMANCERSHOULDERS.forEach(shoulder => {
      if(commonItems.includes(shoulder.name)) {
        let newShoulder = new CommonItem();
        newShoulder.item = shoulder;
        newShoulder.class = "Necromancer";
        this.shoulders.push(newShoulder);
      }
    });
    WITCHDOCTORSHOULDERS.forEach(shoulder => {
      if(commonItems.includes(shoulder.name)) {
        let newShoulder = new CommonItem();
        newShoulder.item = shoulder;
        newShoulder.class = "Witch Doctor";
        this.shoulders.push(newShoulder);
      }
    });
    WIZARDSHOULDERS.forEach(shoulder => {
      if(commonItems.includes(shoulder.name)) {
        let newShoulder = new CommonItem();
        newShoulder.item = shoulder;
        newShoulder.class = "Wizard";
        this.shoulders.push(newShoulder);
      }
    });

    // Chest Armors
    BARBARIANCHESTARMORS.forEach(chestarmor => {
      if(commonItems.includes(chestarmor.name)) {
        let newChestarmor = new CommonItem();
        newChestarmor.item = chestarmor;
        newChestarmor.class = "Barbarian";
        this.chestarmors.push(newChestarmor);
      }
    });
    CRUSADERCHESTARMORS.forEach(chestarmor => {
      if(commonItems.includes(chestarmor.name)) {
        let newChestarmor = new CommonItem();
        newChestarmor.item = chestarmor;
        newChestarmor.class = "Crusader";
        this.chestarmors.push(newChestarmor);
      }
    });
    DEMONHUNTERCHESTARMORS.forEach(chestarmor => {
      if(commonItems.includes(chestarmor.name)) {
        let newChestarmor = new CommonItem();
        newChestarmor.item = chestarmor;
        newChestarmor.class = "Demon Hunter";
        this.chestarmors.push(newChestarmor);
      }
    });
    MONKCHESTARMORS.forEach(chestarmor => {
      if(commonItems.includes(chestarmor.name)) {
        let newChestarmor = new CommonItem();
        newChestarmor.item = chestarmor;
        newChestarmor.class = "Monk";
        this.chestarmors.push(newChestarmor);
      }
    });
    NECROMANCERCHESTARMORS.forEach(chestarmor => {
      if(commonItems.includes(chestarmor.name)) {
        let newChestarmor = new CommonItem();
        newChestarmor.item = chestarmor;
        newChestarmor.class = "Necromancer";
        this.chestarmors.push(newChestarmor);
      }
    });
    WITCHDOCTORCHESTARMORS.forEach(chestarmor => {
      if(commonItems.includes(chestarmor.name)) {
        let newChestarmor = new CommonItem();
        newChestarmor.item = chestarmor;
        newChestarmor.class = "Witch Doctor";
        this.chestarmors.push(newChestarmor);
      }
    });
    WIZARDCHESTARMORS.forEach(chestarmor => {
      if(commonItems.includes(chestarmor.name)) {
        let newChestarmor = new CommonItem();
        newChestarmor.item = chestarmor;
        newChestarmor.class = "Wizard";
        this.chestarmors.push(newChestarmor);
      }
    });

    // Gloves
    BARBARIANGLOVES.forEach(glove => {
      if(commonItems.includes(glove.name)) {
        let newGlove = new CommonItem();
        newGlove.item = glove;
        newGlove.class = "Barbarian";
        this.gloves.push(newGlove);
      }
    });
    CRUSADERGLOVES.forEach(glove => {
      if(commonItems.includes(glove.name)) {
        let newGlove = new CommonItem();
        newGlove.item = glove;
        newGlove.class = "Crusader";
        this.gloves.push(newGlove);
      }
    });
    DEMONHUNTERGLOVES.forEach(glove => {
      if(commonItems.includes(glove.name)) {
        let newGlove = new CommonItem();
        newGlove.item = glove;
        newGlove.class = "Demon Hunter";
        this.gloves.push(newGlove);
      }
    });
    MONKGLOVES.forEach(glove => {
      if(commonItems.includes(glove.name)) {
        let newGlove = new CommonItem();
        newGlove.item = glove;
        newGlove.class = "Monk";
        this.gloves.push(newGlove);
      }
    });
    NECROMANCERGLOVES.forEach(glove => {
      if(commonItems.includes(glove.name)) {
        let newGlove = new CommonItem();
        newGlove.item = glove;
        newGlove.class = "Necromancer";
        this.gloves.push(newGlove);
      }
    });
    WITCHDOCTORGLOVES.forEach(glove => {
      if(commonItems.includes(glove.name)) {
        let newGlove = new CommonItem();
        newGlove.item = glove;
        newGlove.class = "Witch Doctor";
        this.gloves.push(newGlove);
      }
    });
    WIZARDGLOVES.forEach(glove => {
      if(commonItems.includes(glove.name)) {
        let newGlove = new CommonItem();
        newGlove.item = glove;
        newGlove.class = "Wizard";
        this.gloves.push(newGlove);
      }
    });

    // Pants
    BARBARIANPANTS.forEach(pant => {
      if(commonItems.includes(pant.name)) {
        let newPant = new CommonItem();
        newPant.item = pant;
        newPant.class = "Barbarian";
        this.pants.push(newPant);
      }
    });
    CRUSADERPANTS.forEach(pant => {
      if(commonItems.includes(pant.name)) {
        let newPant = new CommonItem();
        newPant.item = pant;
        newPant.class = "Crusader";
        this.pants.push(newPant);
      }
    });
    DEMONHUNTERPANTS.forEach(pant => {
      if(commonItems.includes(pant.name)) {
        let newPant = new CommonItem();
        newPant.item = pant;
        newPant.class = "Demon Hunter";
        this.pants.push(newPant);
      }
    });
    MONKPANTS.forEach(pant => {
      if(commonItems.includes(pant.name)) {
        let newPant = new CommonItem();
        newPant.item = pant;
        newPant.class = "Monk";
        this.pants.push(newPant);
      }
    });
    NECROMANCERPANTS.forEach(pant => {
      if(commonItems.includes(pant.name)) {
        let newPant = new CommonItem();
        newPant.item = pant;
        newPant.class = "Necromancer";
        this.pants.push(newPant);
      }
    });
    WITCHDOCTORPANTS.forEach(pant => {
      if(commonItems.includes(pant.name)) {
        let newPant = new CommonItem();
        newPant.item = pant;
        newPant.class = "Witch Doctor";
        this.pants.push(newPant);
      }
    });
    WIZARDPANTS.forEach(pant => {
      if(commonItems.includes(pant.name)) {
        let newPant = new CommonItem();
        newPant.item = pant;
        newPant.class = "Wizard";
        this.pants.push(newPant);
      }
    });

    // Boots
    BARBARIANBOOTS.forEach(boot => {
      if(commonItems.includes(boot.name)) {
        let newBoot = new CommonItem();
        newBoot.item = boot;
        newBoot.class = "Barbarian";
        this.boots.push(newBoot);
      }
    });
    CRUSADERBOOTS.forEach(boot => {
      if(commonItems.includes(boot.name)) {
        let newBoot = new CommonItem();
        newBoot.item = boot;
        newBoot.class = "Crusader";
        this.boots.push(newBoot);
      }
    });
    DEMONHUNTERBOOTS.forEach(boot => {
      if(commonItems.includes(boot.name)) {
        let newBoot = new CommonItem();
        newBoot.item = boot;
        newBoot.class = "Demon Hunter";
        this.boots.push(newBoot);
      }
    });
    MONKBOOTS.forEach(boot => {
      if(commonItems.includes(boot.name)) {
        let newBoot = new CommonItem();
        newBoot.item = boot;
        newBoot.class = "Monk";
        this.boots.push(newBoot);
      }
    });
    NECROMANCERBOOTS.forEach(boot => {
      if(commonItems.includes(boot.name)) {
        let newBoot = new CommonItem();
        newBoot.item = boot;
        newBoot.class = "Necromancer";
        this.boots.push(newBoot);
      }
    });
    WITCHDOCTORBOOTS.forEach(boot => {
      if(commonItems.includes(boot.name)) {
        let newBoot = new CommonItem();
        newBoot.item = boot;
        newBoot.class = "Witch Doctor";
        this.boots.push(newBoot);
      }
    });
    WIZARDBOOTS.forEach(boot => {
      if(commonItems.includes(boot.name)) {
        let newBoot = new CommonItem();
        newBoot.item = boot;
        newBoot.class = "Wizard";
        this.boots.push(newBoot);
      }
    });

    // Bracers
    BARBARIANBRACERS.forEach(bracer => {
      if(commonItems.includes(bracer.name)) {
        let newBracer = new CommonItem();
        newBracer.item = bracer;
        newBracer.class = "Barbarian";
        this.bracers.push(newBracer);
      }
    });
    CRUSADERBRACERS.forEach(bracer => {
      if(commonItems.includes(bracer.name)) {
        let newBracer = new CommonItem();
        newBracer.item = bracer;
        newBracer.class = "Crusader";
        this.bracers.push(newBracer);
      }
    });
    DEMONHUNTERBRACERS.forEach(bracer => {
      if(commonItems.includes(bracer.name)) {
        let newBracer = new CommonItem();
        newBracer.item = bracer;
        newBracer.class = "Demon Hunter";
        this.bracers.push(newBracer);
      }
    });
    MONKBRACERS.forEach(bracer => {
      if(commonItems.includes(bracer.name)) {
        let newBracer = new CommonItem();
        newBracer.item = bracer;
        newBracer.class = "Monk";
        this.bracers.push(newBracer);
      }
    });
    NECROMANCERBRACERS.forEach(bracer => {
      if(commonItems.includes(bracer.name)) {
        let newBracer = new CommonItem();
        newBracer.item = bracer;
        newBracer.class = "Necromancer";
        this.bracers.push(newBracer);
      }
    });
    WITCHDOCTORBRACERS.forEach(bracer => {
      if(commonItems.includes(bracer.name)) {
        let newBracer = new CommonItem();
        newBracer.item = bracer;
        newBracer.class = "Witch Doctor";
        this.bracers.push(newBracer);
      }
    });
    WIZARDBRACERS.forEach(bracer => {
      if(commonItems.includes(bracer.name)) {
        let newBracer = new CommonItem();
        newBracer.item = bracer;
        newBracer.class = "Wizard";
        this.bracers.push(newBracer);
      }
    });

    // Belts
    BARBARIANBELTS.forEach(belt => {
      if(commonItems.includes(belt.name)) {
        let newBelt = new CommonItem();
        newBelt.item = belt;
        newBelt.class = "Barbarian";
        this.belts.push(newBelt);
      }
    });
    CRUSADERBELTS.forEach(belt => {
      if(commonItems.includes(belt.name)) {
        let newBelt = new CommonItem();
        newBelt.item = belt;
        newBelt.class = "Crusader";
        this.belts.push(newBelt);
      }
    });
    DEMONHUNTERBELTS.forEach(belt => {
      if(commonItems.includes(belt.name)) {
        let newBelt = new CommonItem();
        newBelt.item = belt;
        newBelt.class = "Demon Hunter";
        this.belts.push(newBelt);
      }
    });
    MONKBELTS.forEach(belt => {
      if(commonItems.includes(belt.name)) {
        let newBelt = new CommonItem();
        newBelt.item = belt;
        newBelt.class = "Monk";
        this.belts.push(newBelt);
      }
    });
    NECROMANCERBELTS.forEach(belt => {
      if(commonItems.includes(belt.name)) {
        let newBelt = new CommonItem();
        newBelt.item = belt;
        newBelt.class = "Necromancer";
        this.belts.push(newBelt);
      }
    });
    WITCHDOCTORBELTS.forEach(belt => {
      if(commonItems.includes(belt.name)) {
        let newBelt = new CommonItem();
        newBelt.item = belt;
        newBelt.class = "Witch Doctor";
        this.belts.push(newBelt);
      }
    });
    WIZARDBELTS.forEach(belt => {
      if(commonItems.includes(belt.name)) {
        let newBelt = new CommonItem();
        newBelt.item = belt;
        newBelt.class = "Wizard";
        this.belts.push(newBelt);
      }
    });

    // Rings
    BARBARIANRINGS.forEach(ring => {
      if(commonItems.includes(ring.name)) {
        let newRing = new CommonItem();
        newRing.item = ring;
        newRing.class = "Barbarian";
        this.rings.push(newRing);
      }
    });
    CRUSADERRINGS.forEach(ring => {
      if(commonItems.includes(ring.name)) {
        let newRing = new CommonItem();
        newRing.item = ring;
        newRing.class = "Crusader";
        this.rings.push(newRing);
      }
    });
    DEMONHUNTERRINGS.forEach(ring => {
      if(commonItems.includes(ring.name)) {
        let newRing = new CommonItem();
        newRing.item = ring;
        newRing.class = "Demon Hunter";
        this.rings.push(newRing);
      }
    });
    MONKRINGS.forEach(ring => {
      if(commonItems.includes(ring.name)) {
        let newRing = new CommonItem();
        newRing.item = ring;
        newRing.class = "Monk";
        this.rings.push(newRing);
      }
    });
    NECROMANCERRINGS.forEach(ring => {
      if(commonItems.includes(ring.name)) {
        let newRing = new CommonItem();
        newRing.item = ring;
        newRing.class = "Necromancer";
        this.rings.push(newRing);
      }
    });
    WITCHDOCTORRINGS.forEach(ring => {
      if(commonItems.includes(ring.name)) {
        let newRing = new CommonItem();
        newRing.item = ring;
        newRing.class = "Witch Doctor";
        this.rings.push(newRing);
      }
    });
    WIZARDRINGS.forEach(ring => {
      if(commonItems.includes(ring.name)) {
        let newRing = new CommonItem();
        newRing.item = ring;
        newRing.class = "Wizard";
        this.rings.push(newRing);
      }
    });

    // Amulets
    BARBARIANAMULETS.forEach(amulet => {
      if(commonItems.includes(amulet.name)) {
        let newAmulet = new CommonItem();
        newAmulet.item = amulet;
        newAmulet.class = "Barbarian";
        this.amulets.push(newAmulet);
      }
    });
    CRUSADERAMULETS.forEach(amulet => {
      if(commonItems.includes(amulet.name)) {
        let newAmulet = new CommonItem();
        newAmulet.item = amulet;
        newAmulet.class = "Crusader";
        this.amulets.push(newAmulet);
      }
    });
    DEMONHUNTERAMULETS.forEach(amulet => {
      if(commonItems.includes(amulet.name)) {
        let newAmulet = new CommonItem();
        newAmulet.item = amulet;
        newAmulet.class = "Demon Hunter";
        this.amulets.push(newAmulet);
      }
    });
    MONKAMULETS.forEach(amulet => {
      if(commonItems.includes(amulet.name)) {
        let newAmulet = new CommonItem();
        newAmulet.item = amulet;
        newAmulet.class = "Monk";
        this.amulets.push(newAmulet);
      }
    });
    NECROMANCERAMULETS.forEach(amulet => {
      if(commonItems.includes(amulet.name)) {
        let newAmulet = new CommonItem();
        newAmulet.item = amulet;
        newAmulet.class = "Necromancer";
        this.amulets.push(newAmulet);
      }
    });
    WITCHDOCTORAMULETS.forEach(amulet => {
      if(commonItems.includes(amulet.name)) {
        let newAmulet = new CommonItem();
        newAmulet.item = amulet;
        newAmulet.class = "Witch Doctor";
        this.amulets.push(newAmulet);
      }
    });
    WIZARDAMULETS.forEach(amulet => {
      if(commonItems.includes(amulet.name)) {
        let newAmulet = new CommonItem();
        newAmulet.item = amulet;
        newAmulet.class = "Wizard";
        this.amulets.push(newAmulet);
      }
    });

    // Bows
    BARBARIANBOWS.forEach(bow => {
      if(commonItems.includes(bow.name)) {
        let newBow = new CommonItem();
        newBow.item = bow;
        newBow.class = "Barbarian";
        this.bows.push(newBow);
      }
    });
    CRUSADERBOWS.forEach(bow => {
      if(commonItems.includes(bow.name)) {
        let newBow = new CommonItem();
        newBow.item = bow;
        newBow.class = "Crusader";
        this.bows.push(newBow);
      }
    });
    DEMONHUNTERBOWS.forEach(bow => {
      if(commonItems.includes(bow.name)) {
        let newBow = new CommonItem();
        newBow.item = bow;
        newBow.class = "Demon Hunter";
        this.bows.push(newBow);
      }
    });
    MONKBOWS.forEach(bow => {
      if(commonItems.includes(bow.name)) {
        let newBow = new CommonItem();
        newBow.item = bow;
        newBow.class = "Monk";
        this.bows.push(newBow);
      }
    });
    NECROMANCERBOWS.forEach(bow => {
      if(commonItems.includes(bow.name)) {
        let newBow = new CommonItem();
        newBow.item = bow;
        newBow.class = "Necromancer";
        this.bows.push(newBow);
      }
    });
    WITCHDOCTORBOWS.forEach(bow => {
      if(commonItems.includes(bow.name)) {
        let newBow = new CommonItem();
        newBow.item = bow;
        newBow.class = "Witch Doctor";
        this.bows.push(newBow);
      }
    });
    WIZARDBOWS.forEach(bow => {
      if(commonItems.includes(bow.name)) {
        let newBow = new CommonItem();
        newBow.item = bow;
        newBow.class = "Wizard";
        this.bows.push(newBow);
      }
    });

    // Daggers
    BARBARIANDAGGERS.forEach(dagger => {
      if(commonItems.includes(dagger.name)) {
        let newDagger = new CommonItem();
        newDagger.item = dagger;
        newDagger.class = "Barbarian";
        this.daggers.push(newDagger);
      }
    });
    CRUSADERDAGGERS.forEach(dagger => {
      if(commonItems.includes(dagger.name)) {
        let newDagger = new CommonItem();
        newDagger.item = dagger;
        newDagger.class = "Crusader";
        this.daggers.push(newDagger);
      }
    });
    DEMONHUNTERDAGGERS.forEach(dagger => {
      if(commonItems.includes(dagger.name)) {
        let newDagger = new CommonItem();
        newDagger.item = dagger;
        newDagger.class = "Demon Hunter";
        this.daggers.push(newDagger);
      }
    });
    MONKDAGGERS.forEach(dagger => {
      if(commonItems.includes(dagger.name)) {
        let newDagger = new CommonItem();
        newDagger.item = dagger;
        newDagger.class = "Monk";
        this.daggers.push(newDagger);
      }
    });
    NECROMANCERDAGGERS.forEach(dagger => {
      if(commonItems.includes(dagger.name)) {
        let newDagger = new CommonItem();
        newDagger.item = dagger;
        newDagger.class = "Necromancer";
        this.daggers.push(newDagger);
      }
    });
    WITCHDOCTORDAGGERS.forEach(dagger => {
      if(commonItems.includes(dagger.name)) {
        let newDagger = new CommonItem();
        newDagger.item = dagger;
        newDagger.class = "Witch Doctor";
        this.daggers.push(newDagger);
      }
    });
    WIZARDDAGGERS.forEach(dagger => {
      if(commonItems.includes(dagger.name)) {
        let newDagger = new CommonItem();
        newDagger.item = dagger;
        newDagger.class = "Wizard";
        this.daggers.push(newDagger);
      }
    });

    // Maces
    BARBARIANMACES.forEach(mace => {
      if(commonItems.includes(mace.name)) {
        let newMace = new CommonItem();
        newMace.item = mace;
        newMace.class = "Barbarian";
        this.maces.push(newMace);
      }
    });
    MONKMACES.forEach(mace => {
      if(commonItems.includes(mace.name)) {
        let newMace = new CommonItem();
        newMace.item = mace;
        newMace.class = "Monk";
        this.maces.push(newMace);
      }
    });

    // Swords
    BARBARIANSWORDS.forEach(sword => {
      if(commonItems.includes(sword.name)) {
        let newSword = new CommonItem();
        newSword.item = sword;
        newSword.class = "Barbarian";
        this.swords.push(newSword);
      }
    });
    CRUSADERSWORDS.forEach(sword => {
      if(commonItems.includes(sword.name)) {
        let newSword = new CommonItem();
        newSword.item = sword;
        newSword.class = "Crusader";
        this.swords.push(newSword);
      }
    });
    DEMONHUNTERSWORDS.forEach(sword => {
      if(commonItems.includes(sword.name)) {
        let newSword = new CommonItem();
        newSword.item = sword;
        newSword.class = "Demon Hunter";
        this.swords.push(newSword);
      }
    });
    MONKSWORDS.forEach(sword => {
      if(commonItems.includes(sword.name)) {
        let newSword = new CommonItem();
        newSword.item = sword;
        newSword.class = "Monk";
        this.swords.push(newSword);
      }
    });
    NECROMANCERSWORDS.forEach(sword => {
      if(commonItems.includes(sword.name)) {
        let newSword = new CommonItem();
        newSword.item = sword;
        newSword.class = "Necromancer";
        this.swords.push(newSword);
      }
    });
    WITCHDOCTORSWORDS.forEach(sword => {
      if(commonItems.includes(sword.name)) {
        let newSword = new CommonItem();
        newSword.item = sword;
        newSword.class = "Witch Doctor";
        this.swords.push(newSword);
      }
    });
    WIZARDSWORDS.forEach(sword => {
      if(commonItems.includes(sword.name)) {
        let newSword = new CommonItem();
        newSword.item = sword;
        newSword.class = "Wizard";
        this.swords.push(newSword);
      }
    });

    // Two Handed Maces
    CRUSADERTWOHANDEDMACES.forEach(twohandedmace => {
      if(commonItems.includes(twohandedmace.name)) {
        let newTwohandedmace = new CommonItem();
        newTwohandedmace.item = twohandedmace;
        newTwohandedmace.class = "Crusader";
        this.twohandedmaces.push(newTwohandedmace);
      }
    });

    // Shields
    BARBARIANSHIELDS.forEach(shield => {
      if(commonItems.includes(shield.name)) {
        let newShield = new CommonItem();
        newShield.item = shield;
        newShield.class = "Barbarian";
        this.shields.push(newShield);
      }
    });
    CRUSADERSHIELDS.forEach(shield => {
      if(commonItems.includes(shield.name)) {
        let newShield = new CommonItem();
        newShield.item = shield;
        newShield.class = "Crusader";
        this.shields.push(newShield);
      }
    });
    DEMONHUNTERSHIELDS.forEach(shield => {
      if(commonItems.includes(shield.name)) {
        let newShield = new CommonItem();
        newShield.item = shield;
        newShield.class = "Demon Hunter";
        this.shields.push(newShield);
      }
    });
    MONKSHIELDS.forEach(shield => {
      if(commonItems.includes(shield.name)) {
        let newShield = new CommonItem();
        newShield.item = shield;
        newShield.class = "Monk";
        this.shields.push(newShield);
      }
    });
    NECROMANCERSHIELDS.forEach(shield => {
      if(commonItems.includes(shield.name)) {
        let newShield = new CommonItem();
        newShield.item = shield;
        newShield.class = "Necromancer";
        this.shields.push(newShield);
      }
    });
    WITCHDOCTORSHIELDS.forEach(shield => {
      if(commonItems.includes(shield.name)) {
        let newShield = new CommonItem();
        newShield.item = shield;
        newShield.class = "Witch Doctor";
        this.shields.push(newShield);
      }
    });
    WIZARDSHIELDS.forEach(shield => {
      if(commonItems.includes(shield.name)) {
        let newShield = new CommonItem();
        newShield.item = shield;
        newShield.class = "Wizard";
        this.shields.push(newShield);
      }
    });

    // Relics
    BARBARIANRELICS.forEach(relic => {
      if(commonItems.includes(relic.name)) {
        let newRelic = new CommonItem();
        newRelic.item = relic;
        newRelic.class = "Barbarian";
        this.relics.push(newRelic);
      }
    });
    CRUSADERRELICS.forEach(relic => {
      if(commonItems.includes(relic.name)) {
        let newRelic = new CommonItem();
        newRelic.item = relic;
        newRelic.class = "Crusader";
        this.relics.push(newRelic);
      }
    });
    DEMONHUNTERRELICS.forEach(relic => {
      if(commonItems.includes(relic.name)) {
        let newRelic = new CommonItem();
        newRelic.item = relic;
        newRelic.class = "Demon Hunter";
        this.relics.push(newRelic);
      }
    });
    MONKRELICS.forEach(relic => {
      if(commonItems.includes(relic.name)) {
        let newRelic = new CommonItem();
        newRelic.item = relic;
        newRelic.class = "Monk";
        this.relics.push(newRelic);
      }
    });
    NECROMANCERRELICS.forEach(relic => {
      if(commonItems.includes(relic.name)) {
        let newRelic = new CommonItem();
        newRelic.item = relic;
        newRelic.class = "Necromancer";
        this.relics.push(newRelic);
      }
    });
    WITCHDOCTORRELICS.forEach(relic => {
      if(commonItems.includes(relic.name)) {
        let newRelic = new CommonItem();
        newRelic.item = relic;
        newRelic.class = "Witch Doctor";
        this.relics.push(newRelic);
      }
    });
    WIZARDRELICS.forEach(relic => {
      if(commonItems.includes(relic.name)) {
        let newRelic = new CommonItem();
        newRelic.item = relic;
        newRelic.class = "Wizard";
        this.relics.push(newRelic);
      }
    });

    this.helms.sort(function(a, b) {
      if (a.item.rarity != b.item.rarity) {
        return a.item.rarity === "legendary" ? 1 : -1;
      }
      return a.item.name.localeCompare(b.item.name);
    });

    this.shoulders.sort(function(a, b) {
      if (a.item.rarity != b.item.rarity) {
        return a.item.rarity === "legendary" ? 1 : -1;
      }
      return a.item.name.localeCompare(b.item.name);
    });

    this.chestarmors.sort(function(a, b) {
      if (a.item.rarity != b.item.rarity) {
        return a.item.rarity === "legendary" ? 1 : -1;
      }
      return a.item.name.localeCompare(b.item.name);
    });

    this.gloves.sort(function(a, b) {
      if (a.item.rarity != b.item.rarity) {
        return a.item.rarity === "legendary" ? 1 : -1;
      }
      return a.item.name.localeCompare(b.item.name);
    });

    this.pants.sort(function(a, b) {
      if (a.item.rarity != b.item.rarity) {
        return a.item.rarity === "legendary" ? 1 : -1;
      }
      return a.item.name.localeCompare(b.item.name);
    });

    this.boots.sort(function(a, b) {
      if (a.item.rarity != b.item.rarity) {
        return a.item.rarity === "legendary" ? 1 : -1;
      }
      return a.item.name.localeCompare(b.item.name);
    });

    this.bracers.sort(function(a, b) {
      if (a.item.rarity != b.item.rarity) {
        return a.item.rarity === "legendary" ? 1 : -1;
      }
      return a.item.name.localeCompare(b.item.name);
    });

    this.belts.sort(function(a, b) {
      if (a.item.rarity != b.item.rarity) {
        return a.item.rarity === "legendary" ? 1 : -1;
      }
      return a.item.name.localeCompare(b.item.name);
    });

    this.rings.sort(function(a, b) {
      if (a.item.rarity != b.item.rarity) {
        return a.item.rarity === "legendary" ? 1 : -1;
      }
      return a.item.name.localeCompare(b.item.name);
    });

    this.amulets.sort(function(a, b) {
      if (a.item.rarity != b.item.rarity) {
        return a.item.rarity === "legendary" ? 1 : -1;
      }
      return a.item.name.localeCompare(b.item.name);
    });

    this.bows.sort(function(a, b) {
      if (a.item.rarity != b.item.rarity) {
        return a.item.rarity === "legendary" ? 1 : -1;
      }
      return a.item.name.localeCompare(b.item.name);
    });

    this.daggers.sort(function(a, b) {
      if (a.item.rarity != b.item.rarity) {
        return a.item.rarity === "legendary" ? 1 : -1;
      }
      return a.item.name.localeCompare(b.item.name);
    });

    this.maces.sort(function(a, b) {
      if (a.item.rarity != b.item.rarity) {
        return a.item.rarity === "legendary" ? 1 : -1;
      }
      return a.item.name.localeCompare(b.item.name);
    });

    this.swords.sort(function(a, b) {
      if (a.item.rarity != b.item.rarity) {
        return a.item.rarity === "legendary" ? 1 : -1;
      }
      return a.item.name.localeCompare(b.item.name);
    });

    this.twohandedmaces.sort(function(a, b) {
      if (a.item.rarity != b.item.rarity) {
        return a.item.rarity === "legendary" ? 1 : -1;
      }
      return a.item.name.localeCompare(b.item.name);
    });

    this.shields.sort(function(a, b) {
      if (a.item.rarity != b.item.rarity) {
        return a.item.rarity === "legendary" ? 1 : -1;
      }
      return a.item.name.localeCompare(b.item.name);
    });

    this.relics.sort(function(a, b) {
      if (a.item.rarity != b.item.rarity) {
        return a.item.rarity === "legendary" ? 1 : -1;
      }
      return a.item.name.localeCompare(b.item.name);
    });

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
    this.macesAccordion.openAll();
    this.swordsAccordion.openAll();
    this.twohandedmacesAccordion.openAll();
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
    this.macesAccordion.closeAll();
    this.swordsAccordion.closeAll();
    this.twohandedmacesAccordion.closeAll();
    this.shieldsAccordion.closeAll();
    this.relicsAccordion.closeAll();
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

  highlight(type: string) {
    if(this.highlighted === type) {
      this.highlighted = "";
    }
    else {
      this.highlighted = type;
    }
  }

  isForged(item: Item) {
    return isForged(item);
  }

  isFollower(item: Item) {
    return isFollower(item);
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

  helms! : CommonItem[];
  shoulders! : CommonItem[];
  chestarmors! : CommonItem[];
  gloves! : CommonItem[];
  pants! : CommonItem[];
  boots! : CommonItem[];
  bracers! : CommonItem[];
  belts! : CommonItem[];
  rings! : CommonItem[];
  amulets! : CommonItem[];
  bows! : CommonItem[];
  daggers! : CommonItem[];
  maces! : CommonItem[];
  swords! : CommonItem[];
  twohandedmaces! : CommonItem[];
  shields! : CommonItem[];
  relics! : CommonItem[];

}
