import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

import { HELMS as BARBARIANHELMS, SHOULDERS as BARBARIANSHOULDERS, CHESTARMORS as BARBARIANCHESTARMORS, GLOVES as BARBARIANGLOVES, PANTS as BARBARIANPANTS, BOOTS as BARBARIANBOOTS, BRACERS as BARBARIANBRACERS, BELTS as BARBARIANBELTS, RINGS as BARBARIANRINGS, AMULETS as BARBARIANAMULETS, AXES as BARBARIANAXES, MACES as BARBARIANMACES, SWORDS as BARBARIANSWORDS } from '../entities/barbarian';
import { HELMS as CRUSADERHELMS, SHOULDERS as CRUSADERSHOULDERS, CHESTARMORS as CRUSADERCHESTARMORS, GLOVES as CRUSADERGLOVES, PANTS as CRUSADERPANTS, BOOTS as CRUSADERBOOTS, BRACERS as CRUSADERBRACERS, BELTS as CRUSADERBELTS, RINGS as CRUSADERRINGS, AMULETS as CRUSADERAMULETS } from '../entities/crusader';
import { HELMS as DEMONHUNTERHELMS, SHOULDERS as DEMONHUNTERSHOULDERS, CHESTARMORS as DEMONHUNTERCHESTARMORS, GLOVES as DEMONHUNTERGLOVES, PANTS as DEMONHUNTERPANTS, BOOTS as DEMONHUNTERBOOTS, BRACERS as DEMONHUNTERBRACERS, BELTS as DEMONHUNTERBELTS, RINGS as DEMONHUNTERRINGS, AMULETS as DEMONHUNTERAMULETS } from '../entities/demonhunter';
import { HELMS as MONKHELMS, SHOULDERS as MONKSHOULDERS, CHESTARMORS as MONKCHESTARMORS, GLOVES as MONKGLOVES, PANTS as MONKPANTS, BOOTS as MONKBOOTS, BRACERS as MONKBRACERS, BELTS as MONKBELTS, RINGS as MONKRINGS, AMULETS as MONKAMULETS, MACES as MONKMACES, SWORDS as MONKSWORDS } from '../entities/monk';
import { HELMS as NECROMANCERHELMS, SHOULDERS as NECROMANCERSHOULDERS, CHESTARMORS as NECROMANCERCHESTARMORS, GLOVES as NECROMANCERGLOVES, PANTS as NECROMANCERPANTS, BOOTS as NECROMANCERBOOTS, BRACERS as NECROMANCERBRACERS, BELTS as NECROMANCERBELTS, RINGS as NECROMANCERRINGS, AMULETS as NECROMANCERAMULETS } from '../entities/necromancer';
import { HELMS as WITCHDOCTORHELMS, SHOULDERS as WITCHDOCTORSHOULDERS, CHESTARMORS as WITCHDOCTORCHESTARMORS, GLOVES as WITCHDOCTORGLOVES, PANTS as WITCHDOCTORPANTS, BOOTS as WITCHDOCTORBOOTS, BRACERS as WITCHDOCTORBRACERS, BELTS as WITCHDOCTORBELTS, RINGS as WITCHDOCTORRINGS, AMULETS as WITCHDOCTORAMULETS } from '../entities/witchdoctor';
import { HELMS as WIZARDHELMS, SHOULDERS as WIZARDSHOULDERS, CHESTARMORS as WIZARDCHESTARMORS, GLOVES as WIZARDGLOVES, PANTS as WIZARDPANTS, BOOTS as WIZARDBOOTS, BRACERS as WIZARDBRACERS, BELTS as WIZARDBELTS, RINGS as WIZARDRINGS, AMULETS as WIZARDAMULETS, SWORDS as WIZARDSWORDS } from '../entities/wizard';

import { CommonItem, commonItems, getSliderInfo, isSlidable, isWeapon } from '../entities/item';

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
  @ViewChild('axesAccordion') axesAccordion!: MatAccordion;
  @ViewChild('macesAccordion') macesAccordion!: MatAccordion;
  @ViewChild('swordsAccordion') swordsAccordion!: MatAccordion;
  
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
    this.axes = [];
    this.maces = [];
    this.swords = [];

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

    // Axes
    BARBARIANAXES.forEach(axe => {
      if(commonItems.includes(axe.name)) {
        let newAxe = new CommonItem();
        newAxe.item = axe;
        newAxe.class = "Barbarian";
        this.axes.push(newAxe);
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
    MONKSWORDS.forEach(sword => {
      if(commonItems.includes(sword.name)) {
        let newSword = new CommonItem();
        newSword.item = sword;
        newSword.class = "Monk";
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

    this.axes.sort(function(a, b) {
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
    this.axesAccordion.openAll();
    this.macesAccordion.openAll();
    this.swordsAccordion.openAll();
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
    this.axesAccordion.closeAll();
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
  axes! : CommonItem[];
  maces! : CommonItem[];
  swords! : CommonItem[];

}
