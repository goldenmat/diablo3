import { Component } from '@angular/core';
import { countMissing, Item } from './entities/item';

import { HELMS as BARBARIANHELMS, SHOULDERS as BARBARIANSHOULDERS, CHESTARMORS as BARBARIANCHESTARMORS, GLOVES as BARBARIANGLOVES, PANTS as BARBARIANPANTS, BOOTS as BARBARIANBOOTS, BRACERS as BARBARIANBRACERS, BELTS as BARBARIANBELTS, MIGHTYBELTS as BARBARIANMIGHTYBELTS, RINGS as BARBARIANRINGS, AMULETS as BARBARIANAMULETS, BOWS as BARBARIANBOWS, DAGGERS as BARBARIANDAGGERS, MACES as BARBARIANMACES, MIGHTYWEAPONS as BARBARIANMIGHTYWEAPONS, SPEARS as BARBARIANSPEARS, SWORDS as BARBARIANSWORDS, TWOHANDEDMIGHTYWEAPONS as BARBARIANTWOHANDEDMIGHTYWEAPONS, SHIELDS as BARBARIANSHIELDS, RELICS as BARBARIANRELICS } from './entities/barbarian';
import { HELMS as CRUSADERHELMS, SHOULDERS as CRUSADERSHOULDERS, CHESTARMORS as CRUSADERCHESTARMORS, GLOVES as CRUSADERGLOVES, PANTS as CRUSADERPANTS, BOOTS as CRUSADERBOOTS, BRACERS as CRUSADERBRACERS, BELTS as CRUSADERBELTS, RINGS as CRUSADERRINGS, AMULETS as CRUSADERAMULETS, BOWS as CRUSADERBOWS, DAGGERS as CRUSADERDAGGERS, FLAILS as CRUSADERFLAILS, SWORDS as CRUSADERSWORDS, TWOHANDEDFLAILS as CRUSADERTWOHANDEDFLAILS, TWOHANDEDMACES as CRUSADERTWOHANDEDMACES, CRUSADERSHIELDS as CRUSADERCRUSADERSHIELDS, SHIELDS as CRUSADERSHIELDS, RELICS as CRUSADERRELICS } from './entities/crusader';
import { HELMS as DEMONHUNTERHELMS, SHOULDERS as DEMONHUNTERSHOULDERS, CHESTARMORS as DEMONHUNTERCHESTARMORS, CLOAKS as DEMONHUNTERCLOAKS, GLOVES as DEMONHUNTERGLOVES, PANTS as DEMONHUNTERPANTS, BOOTS as DEMONHUNTERBOOTS, BRACERS as DEMONHUNTERBRACERS, BELTS as DEMONHUNTERBELTS, RINGS as DEMONHUNTERRINGS, AMULETS as DEMONHUNTERAMULETS, BOWS as DEMONHUNTERBOWS, DAGGERS as DEMONHUNTERDAGGERS, HANDCROSSBOWS as DEMONHUNTERHANDCROSSBOWS, SWORDS as DEMONHUNTERSWORDS, QUIVERS as DEMONHUNTERQUIVERS, SHIELDS as DEMONHUNTERSHIELDS, RELICS as DEMONHUNTERRELICS } from './entities/demonhunter';
import { HELMS as MONKHELMS, SPIRITSTONES as MONKSPIRITSTONES, SHOULDERS as MONKSHOULDERS, CHESTARMORS as MONKCHESTARMORS, GLOVES as MONKGLOVES, PANTS as MONKPANTS, BOOTS as MONKBOOTS, BRACERS as MONKBRACERS, BELTS as MONKBELTS, RINGS as MONKRINGS, AMULETS as MONKAMULETS, BOWS as MONKBOWS, DAGGERS as MONKDAGGERS, DAIBOS as MONKDAIBOS, FISTWEAPONS as MONKFISTWEAPONS, MACES as MONKMACES, SWORDS as MONKSWORDS, SHIELDS as MONKSHIELDS, RELICS as MONKRELICS } from './entities/monk';
import { HELMS as NECROMANCERHELMS, SHOULDERS as NECROMANCERSHOULDERS, CHESTARMORS as NECROMANCERCHESTARMORS, GLOVES as NECROMANCERGLOVES, PANTS as NECROMANCERPANTS, BOOTS as NECROMANCERBOOTS, BRACERS as NECROMANCERBRACERS, BELTS as NECROMANCERBELTS, RINGS as NECROMANCERRINGS, AMULETS as NECROMANCERAMULETS, BOWS as NECROMANCERBOWS, DAGGERS as NECROMANCERDAGGERS, SCYTHES as NECROMANCERSCYTHES, SWORDS as NECROMANCERSWORDS, PHYLACTERYS as NECROMANCERPHYLACTERYS, SHIELDS as NECROMANCERSHIELDS, RELICS as NECROMANCERRELICS } from './entities/necromancer';
import { HELMS as WITCHDOCTORHELMS, VOODOOMASKS as WITCHDOCTORVOODOOMASKS, SHOULDERS as WITCHDOCTORSHOULDERS, CHESTARMORS as WITCHDOCTORCHESTARMORS, GLOVES as WITCHDOCTORGLOVES, PANTS as WITCHDOCTORPANTS, BOOTS as WITCHDOCTORBOOTS, BRACERS as WITCHDOCTORBRACERS, BELTS as WITCHDOCTORBELTS, RINGS as WITCHDOCTORRINGS, AMULETS as WITCHDOCTORAMULETS, BOWS as WITCHDOCTORBOWS, CEREMONIALKNIFES as WITCHDOCTORCEREMONIALKNIFES, DAGGERS as WITCHDOCTORDAGGERS, SPEARS as WITCHDOCTORSPEARS, SWORDS as WITCHDOCTORSWORDS, MOJOS as WITCHDOCTORMOJOS, SHIELDS as WITCHDOCTORSHIELDS, RELICS as WITCHDOCTORRELICS } from './entities/witchdoctor';
import { HELMS as WIZARDHELMS, WIZARDHATS as WIZARDWIZARDHATS, SHOULDERS as WIZARDSHOULDERS, CHESTARMORS as WIZARDCHESTARMORS, GLOVES as WIZARDGLOVES, PANTS as WIZARDPANTS, BOOTS as WIZARDBOOTS, BRACERS as WIZARDBRACERS, BELTS as WIZARDBELTS, RINGS as WIZARDRINGS, AMULETS as WIZARDAMULETS, BOWS as WIZARDBOWS, DAGGERS as WIZARDDAGGERS, SWORDS as WIZARDSWORDS, WANDS as WIZARDWANDS, SHIELDS as WIZARDSHIELDS, SOURCES as WIZARDSOURCES, RELICS as WIZARDRELICS } from './entities/wizard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'diablo3';
  barbarianMissing: number = 0;
  crusaderMissing: number = 0;
  demonhunterMissing: number = 0;
  monkMissing: number = 0;
  necromancerMissing: number = 0;
  witchdoctorMissing: number = 0;
  wizardMissing: number = 0;

  ngOnInit() {
    this.barbarianMissing += countMissing(BARBARIANHELMS);
    this.barbarianMissing += countMissing(BARBARIANSHOULDERS);
    this.barbarianMissing += countMissing(BARBARIANCHESTARMORS);
    this.barbarianMissing += countMissing(BARBARIANGLOVES);
    this.barbarianMissing += countMissing(BARBARIANPANTS);
    this.barbarianMissing += countMissing(BARBARIANBOOTS);
    this.barbarianMissing += countMissing(BARBARIANBRACERS);
    this.barbarianMissing += countMissing(BARBARIANBELTS);
    this.barbarianMissing += countMissing(BARBARIANMIGHTYBELTS);
    this.barbarianMissing += countMissing(BARBARIANRINGS);
    this.barbarianMissing += countMissing(BARBARIANAMULETS);
    this.barbarianMissing += countMissing(BARBARIANBOWS);
    this.barbarianMissing += countMissing(BARBARIANDAGGERS);
    this.barbarianMissing += countMissing(BARBARIANMACES);
    this.barbarianMissing += countMissing(BARBARIANMIGHTYWEAPONS);
    this.barbarianMissing += countMissing(BARBARIANSPEARS);
    this.barbarianMissing += countMissing(BARBARIANSWORDS);
    this.barbarianMissing += countMissing(BARBARIANTWOHANDEDMIGHTYWEAPONS);
    this.barbarianMissing += countMissing(BARBARIANSHIELDS);
    this.barbarianMissing += countMissing(BARBARIANRELICS);
    
    this.crusaderMissing += countMissing(CRUSADERHELMS);
    this.crusaderMissing += countMissing(CRUSADERSHOULDERS);
    this.crusaderMissing += countMissing(CRUSADERCHESTARMORS);
    this.crusaderMissing += countMissing(CRUSADERGLOVES);
    this.crusaderMissing += countMissing(CRUSADERPANTS);
    this.crusaderMissing += countMissing(CRUSADERBOOTS);
    this.crusaderMissing += countMissing(CRUSADERBRACERS);
    this.crusaderMissing += countMissing(CRUSADERBELTS);
    this.crusaderMissing += countMissing(CRUSADERRINGS);
    this.crusaderMissing += countMissing(CRUSADERAMULETS);
    this.crusaderMissing += countMissing(CRUSADERBOWS);
    this.crusaderMissing += countMissing(CRUSADERDAGGERS);
    this.crusaderMissing += countMissing(CRUSADERFLAILS);
    this.crusaderMissing += countMissing(CRUSADERSWORDS);
    this.crusaderMissing += countMissing(CRUSADERTWOHANDEDFLAILS);
    this.crusaderMissing += countMissing(CRUSADERTWOHANDEDMACES);
    this.crusaderMissing += countMissing(CRUSADERCRUSADERSHIELDS);
    this.crusaderMissing += countMissing(CRUSADERSHIELDS);
    this.crusaderMissing += countMissing(CRUSADERRELICS);
    
    this.demonhunterMissing += countMissing(DEMONHUNTERHELMS);
    this.demonhunterMissing += countMissing(DEMONHUNTERSHOULDERS);
    this.demonhunterMissing += countMissing(DEMONHUNTERCHESTARMORS);
    this.demonhunterMissing += countMissing(DEMONHUNTERCLOAKS);
    this.demonhunterMissing += countMissing(DEMONHUNTERGLOVES);
    this.demonhunterMissing += countMissing(DEMONHUNTERPANTS);
    this.demonhunterMissing += countMissing(DEMONHUNTERBOOTS);
    this.demonhunterMissing += countMissing(DEMONHUNTERBRACERS);
    this.demonhunterMissing += countMissing(DEMONHUNTERBELTS);
    this.demonhunterMissing += countMissing(DEMONHUNTERRINGS);
    this.demonhunterMissing += countMissing(DEMONHUNTERAMULETS);
    this.demonhunterMissing += countMissing(DEMONHUNTERBOWS);
    this.demonhunterMissing += countMissing(DEMONHUNTERDAGGERS);
    this.demonhunterMissing += countMissing(DEMONHUNTERHANDCROSSBOWS);
    this.demonhunterMissing += countMissing(DEMONHUNTERSWORDS);
    this.demonhunterMissing += countMissing(DEMONHUNTERQUIVERS);
    this.demonhunterMissing += countMissing(DEMONHUNTERSHIELDS);
    this.demonhunterMissing += countMissing(DEMONHUNTERRELICS);
    
    this.monkMissing += countMissing(MONKHELMS);
    this.monkMissing += countMissing(MONKSPIRITSTONES);
    this.monkMissing += countMissing(MONKSHOULDERS);
    this.monkMissing += countMissing(MONKCHESTARMORS);
    this.monkMissing += countMissing(MONKGLOVES);
    this.monkMissing += countMissing(MONKPANTS);
    this.monkMissing += countMissing(MONKBOOTS);
    this.monkMissing += countMissing(MONKBRACERS);
    this.monkMissing += countMissing(MONKBELTS);
    this.monkMissing += countMissing(MONKRINGS);
    this.monkMissing += countMissing(MONKAMULETS);
    this.monkMissing += countMissing(MONKBOWS);
    this.monkMissing += countMissing(MONKDAGGERS);
    this.monkMissing += countMissing(MONKDAIBOS);
    this.monkMissing += countMissing(MONKFISTWEAPONS);
    this.monkMissing += countMissing(MONKMACES);
    this.monkMissing += countMissing(MONKSWORDS);
    this.monkMissing += countMissing(MONKSHIELDS);
    this.monkMissing += countMissing(MONKRELICS);
    
    this.necromancerMissing += countMissing(NECROMANCERHELMS);
    this.necromancerMissing += countMissing(NECROMANCERSHOULDERS);
    this.necromancerMissing += countMissing(NECROMANCERCHESTARMORS);
    this.necromancerMissing += countMissing(NECROMANCERGLOVES);
    this.necromancerMissing += countMissing(NECROMANCERPANTS);
    this.necromancerMissing += countMissing(NECROMANCERBOOTS);
    this.necromancerMissing += countMissing(NECROMANCERBRACERS);
    this.necromancerMissing += countMissing(NECROMANCERBELTS);
    this.necromancerMissing += countMissing(NECROMANCERRINGS);
    this.necromancerMissing += countMissing(NECROMANCERAMULETS);
    this.necromancerMissing += countMissing(NECROMANCERBOWS);
    this.necromancerMissing += countMissing(NECROMANCERDAGGERS);
    this.necromancerMissing += countMissing(NECROMANCERSCYTHES);
    this.necromancerMissing += countMissing(NECROMANCERSWORDS);
    this.necromancerMissing += countMissing(NECROMANCERPHYLACTERYS);
    this.necromancerMissing += countMissing(NECROMANCERSHIELDS);
    this.necromancerMissing += countMissing(NECROMANCERRELICS);
    
    this.witchdoctorMissing += countMissing(WITCHDOCTORHELMS);
    this.witchdoctorMissing += countMissing(WITCHDOCTORVOODOOMASKS);
    this.witchdoctorMissing += countMissing(WITCHDOCTORSHOULDERS);
    this.witchdoctorMissing += countMissing(WITCHDOCTORCHESTARMORS);
    this.witchdoctorMissing += countMissing(WITCHDOCTORGLOVES);
    this.witchdoctorMissing += countMissing(WITCHDOCTORPANTS);
    this.witchdoctorMissing += countMissing(WITCHDOCTORBOOTS);
    this.witchdoctorMissing += countMissing(WITCHDOCTORBRACERS);
    this.witchdoctorMissing += countMissing(WITCHDOCTORBELTS);
    this.witchdoctorMissing += countMissing(WITCHDOCTORRINGS);
    this.witchdoctorMissing += countMissing(WITCHDOCTORAMULETS);
    this.witchdoctorMissing += countMissing(WITCHDOCTORBOWS);
    this.witchdoctorMissing += countMissing(WITCHDOCTORCEREMONIALKNIFES);
    this.witchdoctorMissing += countMissing(WITCHDOCTORDAGGERS);
    this.witchdoctorMissing += countMissing(WITCHDOCTORSPEARS);
    this.witchdoctorMissing += countMissing(WITCHDOCTORSWORDS);
    this.witchdoctorMissing += countMissing(WITCHDOCTORMOJOS);
    this.witchdoctorMissing += countMissing(WITCHDOCTORSHIELDS);
    this.witchdoctorMissing += countMissing(WITCHDOCTORRELICS);
    
    this.wizardMissing += countMissing(WIZARDHELMS);
    this.wizardMissing += countMissing(WIZARDWIZARDHATS);
    this.wizardMissing += countMissing(WIZARDSHOULDERS);
    this.wizardMissing += countMissing(WIZARDCHESTARMORS);
    this.wizardMissing += countMissing(WIZARDGLOVES);
    this.wizardMissing += countMissing(WIZARDPANTS);
    this.wizardMissing += countMissing(WIZARDBOOTS);
    this.wizardMissing += countMissing(WIZARDBRACERS);
    this.wizardMissing += countMissing(WIZARDBELTS);
    this.wizardMissing += countMissing(WIZARDRINGS);
    this.wizardMissing += countMissing(WIZARDAMULETS);
    this.wizardMissing += countMissing(WIZARDBOWS);
    this.wizardMissing += countMissing(WIZARDDAGGERS);
    this.wizardMissing += countMissing(WIZARDSWORDS);
    this.wizardMissing += countMissing(WIZARDWANDS);
    this.wizardMissing += countMissing(WIZARDSHIELDS);
    this.wizardMissing += countMissing(WIZARDSOURCES);
    this.wizardMissing += countMissing(WIZARDRELICS);
  }

  countMissing(items: Item[]): number {
    return countMissing(items);
  }
}
