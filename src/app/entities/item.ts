export class Item {
    builds!: number[];
    ancient!: boolean;
    primal!: boolean;
    augmented!: boolean;
    locked!: boolean;
    name!: string;
    type!: string;
    rarity!: string;
    image!: string;
    stats!: Stat[];
    follower?: string;
    forged?: boolean;
}

export class Gem {
    builds!: number[];
    name!: string;
    image!: string;
    level!: number;
    maxLevel!: number;
}

export class Stat {
    present!: boolean;
    name!: string;
    value?: number;
    value2?: number;
    enchantable!: boolean;
    passive?: boolean;
    hellfire?: boolean;
    guaranteed?: boolean;
}

export class SliderInfo {
    min!: number;
    max!: number;
    step!: number;
}

export class CommonItem {
    class!: string;
    item!: Item;
}

export class AnalyzeResult {
    item?: CommonItem;
    difference!: number;
}

export const commonItems : string[] = [
    "Andariel's Visage",
    "Blind Faith",
    "Broken Crown",
    "Leoric's Crown",
    "Mempo of Twilight",
    "Pride's Fall",

    "Aughild's Power",
    "Homing Pads",
    "Mantle of Channeling",
    "Pauldrons of the Skeleton King",
    "Spaulders of Zakara",

    "Aughild's Rule",
    "Aquila Cuirass",
    "Cindercoat",
    "Goldskin",
    "Tal Rasha's Relentless Pursuit",

    "Cain's Scrivener",
    "Sage's Purchase",
    "Frostburn",
    "Gloves of Worship",
    "Magefist",
    "St. Archew's Gage",
    "Stone Gauntlets",
    "Tasker and Theo",

    "Blackthorne's Jousting Mail",
    "Cain's Habit",
    "Captain Crimson's Thrust",
    "Depth Diggers",
    "Hexing Pants of Mr. Yan",
    "Swamp Land Waders",

    "Cain's Travelers",
    "Captain Crimson's Waders",
    "Ice Climbers",
    "Illusory Boots",

    "Aughild's Search",
    "Krelm's Buff Bracers",
    "Ancient Parthan Defenders",
    "Lacuni Prowlers",
    "Nemesis Bracers",
    "Strongarm Bracers",
    "Warzechian Armguards",

    "Captain Crimson's Silk Girdle",
    "Krelm's Buff Belt",
    "Sage's Ribbon",
    "Cord of the Sherma",
    "Goldwrap",
    "The Witching Hour",

    "Focus",
    "Litany of the Undaunted",
    "Restraint",
    "The Compass Rose",
    "The Wailing Host",
    "Avarice Band",
    "Convention of Elements",
    "Hellfire Ring",
    "Justice Lantern",
    "Obsidian Ring of the Zodiac",
    "Oculus Ring",
    "Pandemonium Loop",
    "Rechel's Ring of Larceny",
    "Ring of Royal Grandeur",
    "Stone of Jordan",
    "Unity",

    "The Traveler's Pledge",
    "Squirt's Necklace",
    "The Ess of Johan",
    "The Flavor of Time",

    "The Burning Axe of Sankis",

    "Cluckeye",

    "Pig Sticker",

    "Echoing Fury",

    "Little Rogue",
    "The Slanderer",
    "Azurewrath",
    "In-Geom",
    "Thunderfury, Blessed Blade of the Windseeker",

    "The Furnace",

    "Freeze of Deflection",
    "Lidless Wall",

    "Enchanting Favor",
    "Relic of Akarat",
    "Skeleton Key",
    "Ribald Etchings",
    "Smoking Thurible",
    "Hand of the Prophet",
    
    "Dregs of Lies",
    "Essence of Anguish",
    "Fragment of Destruction",
    "Remnant of Pain",
    "Shard of Hatred",
    "Sliver of Terror",
    "Stain of Sin",
];

export function getSliderInfo(name: string, type: string, ancient: boolean, itemName: string): SliderInfo {
    let sliderInfo = new SliderInfo();

    switch(name) {
        case "<span>Strength</span>":
        case "<span>Dexterity</span>":
        case "<span>Intelligence</span>":
            switch(type) {
                case "Shoulders": 
                case "Chest Armor": 
                case "Cloak":
                case "Pants": 
                case "Boots": 
                case "Bracers": 
                case "Belt": 
                case "Mighty Belt": 
                case "Ring":
                    sliderInfo.min = ancient? 550 : 416;
                    sliderInfo.max = ancient? 650 : 500;
                    break;
                case "Two-Handed Axe": 
                case "Two-Handed Mace": 
                case "Daibo": 
                case "Polearm": 
                case "Two-Handed Flail": 
                case "Two-Handed Sword": 
                case "Two-Handed Mighty Weapon":
                case "Soul Shard":
                    sliderInfo.min = ancient? 1237 : 946;
                    sliderInfo.max = ancient? 1465 : 1125;
                    break;
                case "Champion Sword":
                case "Ballista":
                case "Hydra Bow":
                case "Greater Talons":
                case "Archon Staff":
                    sliderInfo.min = 946;
                    sliderInfo.max = 1125;
                    break;
                default:
                    sliderInfo.min = ancient? 825 : 626;
                    sliderInfo.max = ancient? 1000 : 750;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>Vitality</span>":
            switch(type) {
                case "Shoulders": 
                case "Chest Armor": 
                case "Cloak":
                case "Pants": 
                case "Boots": 
                case "Bracers": 
                case "Belt": 
                case "Mighty Belt": 
                case "Ring":
                    sliderInfo.min = ancient? 550 : 416;
                    sliderInfo.max = ancient? 650 : 500;
                    break;
                case "Two-Handed Axe": 
                case "Two-Handed Mace": 
                case "Daibo": 
                case "Polearm": 
                case "Two-Handed Flail": 
                case "Two-Handed Sword": 
                case "Two-Handed Mighty Weapon":
                    sliderInfo.min = ancient? 1237 : 946;
                    sliderInfo.max = ancient? 1465 : 1125;
                    break;
                case "Champion Sword":
                case "Ballista":
                case "Hydra Bow":
                case "Greater Talons":
                case "Archon Staff":
                case "Swirling Crystal":
                    sliderInfo.min = 946;
                    sliderInfo.max = 1125;
                    break;
                default:
                    sliderInfo.min = ancient? 825 : 626;
                    sliderInfo.max = ancient? 1000 : 750;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>Armor</span>":
            switch(type) {
                case "Amulet":
                case "Shield":
                case "Pants":
                case "Relic":
                    sliderInfo.min = ancient? 654 : 559;
                    break;
                case "Ballista":
                case "Cinquedeas":
                    sliderInfo.min = 263;
                    break;
                default:
                    sliderInfo.min = ancient? 436 : 373;
                    break;
            }
            switch(type) {
                case "Helm":
                case "Chest Armor":
                case "Pants":
                case "Amulet":
                case "Shield":
                case "Relic":
                    sliderInfo.max = ancient? 775 : 595;
                    break;
                case "Ballista":
                case "Cinquedeas":
                    sliderInfo.max = 400;
                    break;
                default:
                    sliderInfo.max = ancient? 516 : 397;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>All Resistance</span>":
            sliderInfo.min = ancient? 110 : 91;
            sliderInfo.max = ancient? 130 : 100;
            sliderInfo.step = 1;
            break;
        case "<span>All Stats</span>":
            sliderInfo.min = 750;
            sliderInfo.max = 1000;
            sliderInfo.step = 1;
            break;
        case "<span>Area Damage</span>":
            switch(type) {
                case "Shoulders": 
                case "Gloves": 
                case "Ring": 
                case "Amulet":
                case "Quiver":
                case "Phylactery":
                case "Mojo":
                case "Source":
                case "Crusader Shield":
                    sliderInfo.min = 10;
                    sliderInfo.max = 20;
                    break;
                default:
                    sliderInfo.min = 16;
                    sliderInfo.max = 24;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>Attack Speed</span>":
            switch(type) {
                case "Quiver":
                case "Colossus Blade":
                    sliderInfo.min = 15;
                    sliderInfo.max = 20;
                    break;
                case "Flying Axe":
                case "Caduceus":
                case "Ballista":
                case "Repeating Crossbow":
                case "Hydra Bow":
                case "Cinquedeas":
                case "Grave Wand":
                case "Ancient Blade":
                case "Hyperion Spear":
                case "Legend Spike":
                case "Bone Knife":
                    sliderInfo.min = 12;
                    sliderInfo.max = 15;
                    break;
                default:
                    switch(itemName) {
                        case "Khalim's Will":
                            sliderInfo.min = 12;
                            sliderInfo.max = 15;
                            break;
                            default:
                            sliderInfo.min = 5;
                            sliderInfo.max = 7;
                            break;
                    }
                break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>Critical Hit Chance</span>":
            switch(type) {
                case "Champion Sword":
                case "Colossus Blade":
                case "Caduceus":
                case "Flail":
                case "Greater Talons":
                case "Soul Harvest":
                case "Ancient Blade":
                case "Hyperion Spear":
                case "Scythe":
                    sliderInfo.min = 7;
                    sliderInfo.max = 10;
                    break;
                case "Gloves": 
                case "Amulet": 
                case "Shield": 
                case "Quiver":
                case "Shield":
                case "Crusader Shield":
                case "Mojo":
                case "Phylactery":
                case "Source":
                    sliderInfo.min = 8;
                    sliderInfo.max = 10;
                    break;
                case "Helm": 
                case "Spirit Stone":
                case "Voodoo Mask":
                case "Wizard Hat":
                case "Bracers": 
                case "Ring":
                    sliderInfo.min = 4.5;
                    sliderInfo.max = 6;
                    break;
            }
            sliderInfo.step = 0.5;
            break;
        case "<span>Critical Hit Damage</span>":
            switch(type) {
                case "Soul Shard":
                    sliderInfo.min = 130;
                    sliderInfo.max = 150;
                    break;
                case "Amulet":
                case "Relic":
                case "Caduceus":
                case "Ancient Blade":
                case "Hyperion Spear":
                    sliderInfo.min = 51;
                    sliderInfo.max = 100;
                    break;
                case "Gloves": 
                case "Belt": 
                case "Ring":
                    sliderInfo.min = 26;
                    sliderInfo.max = 50;
                    break;
            }
            switch(itemName) {
                case "Rabid Strike":
                    sliderInfo.min = 31;
                    sliderInfo.max = 35;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>Elite%</span>":
            switch(type) {
                case "Soul Shard":
                    sliderInfo.min = 20;
                    sliderInfo.max = 25;
                    break;
                case "Chest Armor":
                case "Cloak":
                    sliderInfo.min = 10;
                    sliderInfo.max = 11;
                    break;
                case "Ring":
                    switch(itemName) {
                        case "Unity":
                            sliderInfo.min = 12;
                            sliderInfo.max = 15;
                            break;
                        case "Stone of Jordan":
                            sliderInfo.min = 25;
                            sliderInfo.max = 30;
                            break;
                    }
                    break;
                case "Flying Axe":
                case "Swirling Crystal":
                    sliderInfo.min = 12;
                    sliderInfo.max = 15;
                    break;
                default:
                    sliderInfo.min = 5;
                    sliderInfo.max = 8;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>Life%</span>":
            switch(type) {
                case "Shield":
                    sliderInfo.min = 10;
                    sliderInfo.max = 18;
                    break;
                case "Amulet":
                    sliderInfo.min = 14;
                    sliderInfo.max = 18;
                    break;
                case "Soul Shard":
                    sliderInfo.min = 23;
                    sliderInfo.max = 25;
                    break;
                default:
                    sliderInfo.min = 10;
                    sliderInfo.max = 15;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>Life per Second</span>":
            sliderInfo.min = ancient? 6080 : 4643;
            sliderInfo.max = ancient? 7185 : 5528;
            sliderInfo.step = 1;
            break;
        case "<span>Life per Hit</span>":
            switch(type) {
                case "Soul Shard":
                    sliderInfo.min = 28000;
                    sliderInfo.max = 30000;
                    break;
                case "Two-Handed Mighty Weapon":
                case "Two-Handed Mace":
                    sliderInfo.min = ancient? 30408 : 23211;
                    sliderInfo.max = ancient? 35940 : 27644;
                    break;
                case "Mighty Weapon":
                case "Bow":
                case "Dagger":
                case "Relic":
                case "Fist Weapon":
                case "Champion Sword":
                case "Battle Cestus":
                case "Greater Talons":
                case "Wrist Sword":
                    sliderInfo.min = ancient? 20271 : 15474;
                    sliderInfo.max = ancient? 23950 : 18429;
                    break;
                default:
                    switch(itemName) {
                        case "Khalim's Will":
                            sliderInfo.min = 20271
                            sliderInfo.max = 23950
                            break;
                        default:                
                            sliderInfo.min = ancient? 10135 : 7737;
                            sliderInfo.max = ancient? 11975 : 9214;
                            break;
                    }
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>Life per Fury Spent</span>":
            switch(type) {
                case "Two-Handed Mighty Weapon":
                    sliderInfo.min = ancient? 2059 : 1572;
                    sliderInfo.max = ancient? 2435 : 1872;
                    break;
                default:
                    sliderInfo.min = ancient? 1034 : 788;
                    sliderInfo.max = ancient? 1215 : 936;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>Cooldown Reduction</span>":
            switch(type) {
                case "Soul Shard":
                    sliderInfo.min = 12.5;
                    sliderInfo.max = 15;
                    sliderInfo.step = 0.5;
                    break;
                case "Shoulders": 
                case "Gloves": 
                case "Amulet": 
                case "Ring": 
                case "Shield": 
                case "Crusader Shield": 
                case "Quiver":
                case "Mojo":
                case "Source":
                    sliderInfo.min = 5;
                    sliderInfo.max = 8;
                    sliderInfo.step = 1;
                    break;
                case "Flying Axe":
                case "Colossus Blade":
                case "Caduceus":
                case "Mighty Scepter":
                case "Repeating Crossbow":
                case "Battle Cestus":
                case "Wrist Sword":
                case "Cinquedeas":
                case "Grave Wand":
                case "Soul Harvest":
                case "Ancient Blade":
                case "Legend Spike":
                case "Bone Knife":
                case "Swirling Crystal":
                    sliderInfo.min = 7;
                    sliderInfo.max = 10;
                    sliderInfo.step = 1;
                    break;
                case "Hydra Bow":
                    sliderInfo.min = 40;
                    sliderInfo.max = 50;
                    sliderInfo.step = 1;
                    break;
                default:
                    switch(itemName) {
                        case "Yang's Recurve":
                            sliderInfo.min = 40;
                            sliderInfo.max = 50;
                            sliderInfo.step = 1;
                            break;
                        case "Yang's Recurve ":
                            sliderInfo.min = 45;
                            sliderInfo.max = 55;
                            sliderInfo.step = 1;
                            break;
                        case "Khalim's Will":
                            sliderInfo.min = 7;
                            sliderInfo.max = 10;
                            sliderInfo.step = 1;
                            break;
                        default:
                            sliderInfo.min = 6;
                            sliderInfo.max = 10;
                            sliderInfo.step = 1;
                            break;
                    }
                    break;
            }
            break;
        case "<span>Resource Cost Reduction</span>":
            switch(type) {
                case "Soul Shard":
                    sliderInfo.min = 12.5;
                    sliderInfo.max = 15;
                    sliderInfo.step = 0.5;
                    break;
                case "Shoulders": 
                case "Gloves": 
                case "Amulet": 
                case "Ring": 
                case "Shield": 
                case "Crusader Shield": 
                case "Quiver":
                case "Mojo":
                case "Source":
                    sliderInfo.min = 5;
                    sliderInfo.max = 8;
                    sliderInfo.step = 1;
                    break;
                case "Flying Axe":
                case "Colossus Blade":
                case "Caduceus":
                case "Mighty Scepter":
                case "Repeating Crossbow":
                case "Battle Cestus":
                    sliderInfo.min = 8;
                    sliderInfo.max = 10;
                    sliderInfo.step = 1;
                    break;
                case "Hydra Bow":
                    sliderInfo.min = 40;
                    sliderInfo.max = 50;
                    sliderInfo.step = 1;
                    break;
                default:
                    switch(itemName) {
                        case "Yang's Recurve":
                            sliderInfo.min = 40;
                            sliderInfo.max = 50;
                            sliderInfo.step = 1;
                            break;
                        case "Yang's Recurve ":
                            sliderInfo.min = 45;
                            sliderInfo.max = 55;
                            sliderInfo.step = 1;
                            break;
                        case "Khalim's Will":
                            sliderInfo.min = 7;
                            sliderInfo.max = 10;
                            sliderInfo.step = 1;
                            break;
                        default:
                            sliderInfo.min = 6;
                            sliderInfo.max = 10;
                            sliderInfo.step = 1;
                            break;
                    }
                    break;
            }
            break;
        case "<span>Arcane%</span>": 
        case "<span>Cold%</span>": 
        case "<span>Fire%</span>": 
        case "<span>Holy%</span>": 
        case "<span>Physical%</span>": 
        case "<span>Poison%</span>":
            switch(type) {
                case "Soul Shard":
                    sliderInfo.min = 20;
                    sliderInfo.max = 25;
                    break;
                default:
                    sliderInfo.min = 15;
                    sliderInfo.max = 20;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>Lightning%</span>": 
            switch(type) {
                case "Soul Shard":
                    sliderInfo.min = 20;
                    sliderInfo.max = 25;
                    break;
                default:
                    if(itemName === "Won Khim Lau") {
                        sliderInfo.min = 15;
                        sliderInfo.max = 25;
                    }
                    else {
                        sliderInfo.min = 15;
                        sliderInfo.max = 20;
                    }
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>Damage%</span>":
            switch(type) {
                case "Champion Sword":
                case "Colossus Blade":
                case "Flying Axe":
                case "Caduceus":
                case "Mighty Scepter":
                case "Ballista":
                case "Repeating Crossbow":
                case "Hydra Bow":
                case "Battle Cestus":
                case "Greater Talons":
                case "Wrist Sword":
                case "Soul Harvest":
                case "Ancient Blade":
                case "Hyperion Spear":
                case "Legend Spike":
                case "Swirling Crystal":
                    sliderInfo.min = 75;
                    sliderInfo.max = 100;
                    sliderInfo.step = 1;
                    break;
                default:
                    if(itemName === "Soul Harvest") {
                        sliderInfo.min = 75;
                        sliderInfo.max = 100;
                    }
                    else {
                        sliderInfo.min = 6;
                        sliderInfo.max = 10;
                    }
                    sliderInfo.step = 1;
                    break;
            }
            break;
        case "<span>Block%</span>":
            sliderInfo.min = 12;
            sliderInfo.max = 16;
            sliderInfo.step = 1;
            break;
        case "<span>Cold Damage Reduction</span>":
            sliderInfo.min = 7;
            sliderInfo.max = 10;
            sliderInfo.step = 1;
            break;
        case "<span>Fire Damage Taken</span>":
            sliderInfo.min = 5;
            sliderInfo.max = 10;
            sliderInfo.step = 1;
            break;
        case "<span>Hatred Regeneration</span>":
            sliderInfo.min = 1.35;
            sliderInfo.max = 1.50;
            sliderInfo.step = 0.01;
            break;
        case "<span>Mana Regeneration</span>":
            sliderInfo.min = 12;
            sliderInfo.max = 14;
            sliderInfo.step = 1;
            break;
        case "<span>MovementSpeed%</span>":
            sliderInfo.min = 10;
            sliderInfo.max = 12;
            sliderInfo.step = 1;
            break;
        case "<span>Bleed%</span>":
            sliderInfo.min = 34;
            sliderInfo.max = 39;
            sliderInfo.step = 0.1;
            break;
        case "<span>Spirit Regeneration</span>":
            switch(type) {
                case "Daibo":
                    sliderInfo.min = 4.33;
                    sliderInfo.max = 6.00;
                    break;
                default:
                    sliderInfo.min = 2.17;
                    sliderInfo.max = 3.00;
                    break;
            }
            sliderInfo.step = 0.01;
            break;
        case "<span>Wrath Regeneration</span>":
        case "<span>Arcane Power Regeneration</span>":
            sliderInfo.min = 1.85;
            sliderInfo.max = 2.00;
            sliderInfo.step = 0.01;
            break;
        case "<span>Arcane Power on Critical Hit</span>":
            switch(type) {
                case "Swirling Crystal":
                    sliderInfo.min = 5;
                    sliderInfo.max = 7;
                    break;
                default:
                    sliderInfo.min = 3;
                    sliderInfo.max = 4;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>Damage</span>":
        case "<span>Poison Damage</span>":
            switch(type) {
                case "Soul Shard":
                    sliderInfo.min = 270;
                    sliderInfo.max = 300;
                    break;
                case "Ring":
                    sliderInfo.min = ancient? 88 : 60;
                    sliderInfo.max = ancient? 105 : 80;
                    break;
                case "Phylactery":
                case "Mojo":
                case "Source":
                    sliderInfo.min = ancient? 407 : 340;
                    sliderInfo.max = ancient? 485 : 370;
                    break;
                case "Champion Sword":
                case "Mighty Scepter":
                case "Battle Cestus":
                case "Greater Talons":
                    sliderInfo.min = 675;
                    sliderInfo.max = 812;
                    break;
                case "Wrist Sword":
                    sliderInfo.min = 661;
                    sliderInfo.max = 795;
                    break;
                case "Colossus Blade":
                    sliderInfo.min = 83;
                    sliderInfo.max = 100;
                    break;
                case "Repeating Crossbow":
                    sliderInfo.min = 327;
                    sliderInfo.max = 400;
                    break;
                case "Hydra Bow":
                    sliderInfo.min = 594;
                    sliderInfo.max = 715;
                    break;
                case "Grave Wand":
                    sliderInfo.min = 1368;
                    sliderInfo.max = 1620;
                    break;
                case "Ancient Blade":
                    sliderInfo.min = 517;
                    sliderInfo.max = 621;
                    break;
                case "Archon Staff":
                    sliderInfo.min = 1816;
                    sliderInfo.max = 2150;
                    break;
                case "Swirling Crystal":
                    sliderInfo.min = 684;
                    sliderInfo.max = 825;
                    break;
                case "Dagger":
                case "Hand Crossbow":
                    sliderInfo.min = ancient? 1153 : 858;
                    sliderInfo.max = ancient? 1365 : 1049;
                    break;
                case "Two-Handed Axe": 
                case "Two-Handed Mace": 
                case "Two-Handed Flail": 
                case "Polearm": 
                case "Two-Handed Sword": 
                case "Two-Handed Mighty Weapon":
                case "Daibo":
                    sliderInfo.min = ancient? 1582 : 1177;
                    sliderInfo.max = ancient? 1870 : 1439;
                    break;
                default:
                    switch(itemName) {
                        case "Soul Harvest":
                            sliderInfo.min = 675;
                            sliderInfo.max = 812;
                            break;
                    }
                    sliderInfo.min = ancient? 1318 : 981;
                    sliderInfo.max = ancient? 1560 : 1199;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "Damage2":
            switch(type) {
                case "Ring":
                    sliderInfo.min = ancient? 168 : 120;
                    sliderInfo.max = ancient? 210 : 160;
                    break;
                case "Phylactery":
                case "Mojo":
                case "Source":
                    sliderInfo.min = ancient? 495 : 380;
                    sliderInfo.max = ancient? 600 : 450;
                    break;
                case "Champion Sword":
                case "Battle Cestus":
                case "Greater Talons":
                    sliderInfo.min = 675;
                    sliderInfo.max = 812;
                    break;
                case "Wrist Sword":
                    sliderInfo.min = 661;
                    sliderInfo.max = 795;
                    break;
                case "Colossus Blade":
                    sliderInfo.min = 83;
                    sliderInfo.max = 100;
                    break;
                case "Flying Axe":
                    sliderInfo.min = 184;
                    sliderInfo.max = 225;
                    break;
                case "Caduceus":
                case "Hyperion Spear":
                    sliderInfo.min = 687;
                    sliderInfo.max = 876;
                    break;
                case "Ballista":
                    sliderInfo.min = 764;
                    sliderInfo.max = 970;
                    break;
                case "Hydra Bow":
                    sliderInfo.min = 594;
                    sliderInfo.max = 715;
                    break;
                case "Repeating Crossbow":
                    sliderInfo.min = 327;
                    sliderInfo.max = 400;
                    break;
                case "Grave Wand":
                    sliderInfo.min = 1368;
                    sliderInfo.max = 1620;
                    break;
                case "Ancient Blade":
                    sliderInfo.min = 517;
                    sliderInfo.max = 621;
                    break;
                case "Legend Spike":
                    sliderInfo.min = 627;
                    sliderInfo.max = 805;
                    break;
                case "Archon Staff":
                    sliderInfo.min = 1816;
                    sliderInfo.max = 2150;
                    break;
                case "Bone Knife":
                    sliderInfo.min = 1318;
                    sliderInfo.max = 1560;
                    break;
                case "Swirling Crystal":
                    sliderInfo.min = 684;
                    sliderInfo.max = 825;
                    break;
                case "Dagger":
                case "Hand Crossbow":
                    sliderInfo.min = ancient? 1410 : 1028;
                    sliderInfo.max = ancient? 1700 : 1304;
                    break;
                case "Two-Handed Axe": 
                case "Two-Handed Mace": 
                case "Polearm": 
                case "Two-Handed Flail": 
                case "Two-Handed Sword": 
                case "Two-Handed Mighty Weapon":
                case "Daibo":
                    sliderInfo.min = ancient? 1932 : 1410;
                    sliderInfo.max = ancient? 2325 : 1788;
                    break;
                default:
                    switch(itemName) {
                        case "Soul Harvest":
                            sliderInfo.min = 675;
                            sliderInfo.max = 812;
                            break;
                        case "Khalim's Will":
                        case "Blackbog's Sharp":
                            sliderInfo.min = 1538;
                            sliderInfo.max = 1875;
                            break;
                    }
                    sliderInfo.min = ancient? 1609 : 1175;
                    sliderInfo.max = ancient? 1940 : 1490;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>Fire Damage</span>":
        case "<span>Cold Damage</span>":
        case "<span>Lightning Damage</span>":
            switch(type) {
                case "Flail":
                case "Cinquedeas":
                    sliderInfo.min = 1368;
                    sliderInfo.max = 1620;
                    break;
                case "Ballista":
                    sliderInfo.min = 594;
                    sliderInfo.max = 715;
                    break;
                case "Hyperion Spear":
                    sliderInfo.min = 517;
                    sliderInfo.max = 621;
                    break;
                default:
                    sliderInfo.min = 184;
                    sliderInfo.max = 225;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>Holy Damage</span>":
            sliderInfo.min = 517;
            sliderInfo.max = 621;
            sliderInfo.step = 1;
            break;
        case "<span>Arcane Damage</span>":
            sliderInfo.min = 457;
            sliderInfo.max = 550;
            sliderInfo.step = 1;
            break;
        case "<span>Damage to Demons</span>":
        case "<span>Damage to Undead</span>":
            sliderInfo.min = 25;
            sliderInfo.max = 50;
            sliderInfo.step = 1;
            break;
        case "<span>Bonus to Gold and Health Pickup</span>":
            sliderInfo.min = 1;
            sliderInfo.max = 2;
            sliderInfo.step = 1;
            break;
        case "<span>Level Reduction</span>":
            sliderInfo.min = 30;
            sliderInfo.max = 40;
            sliderInfo.step = 1;
            break;
        case "<span>Movement Speed</span>":
            sliderInfo.min = 12;
            sliderInfo.max = 15;
            sliderInfo.step = 1;
            break;
        case "<span>Spirit per Crit</span>":
        case "<span>Mana per Crit</span>":
            sliderInfo.min = 5;
            sliderInfo.max = 7;
            sliderInfo.step = 1;
            break;
        case "<span>Freeze on Hit</span>":
        case "<span><i>Fear on Hit</i></span>":
            switch(type) {
                case "Crusader Shield":
                    sliderInfo.min = 1.0;
                    sliderInfo.max = 2.6;
                    break;
                default:
                    sliderInfo.min = 1.0;
                    sliderInfo.max = 5.1;
                    break;
            }
            sliderInfo.step = 0.1;
            break;
        case "<span>Slow on Hit</span>":
            sliderInfo.min = 1.0;
            sliderInfo.max = 2.6;
            sliderInfo.step = 0.1;
            break;
        case "<span><i>Reduces damage from melee attacks by</i></span>":
            sliderInfo.min = 6.0;
            sliderInfo.max = 7.0;
            sliderInfo.step = 0.1;
            break;
        case "<span>Gold Find</span>":
            sliderInfo.min = 32;
            sliderInfo.max = 35;
            sliderInfo.step = 1;
            break;
        case "<span>Experience</span>":
            sliderInfo.min = 41;
            sliderInfo.max = 50;
            sliderInfo.step = 1;
            break;

        case "<span>CallOfTheAncients%</span>":
            switch(type) {
                case "Two-Handed Mighty Weapon":
                    sliderInfo.min = 45;
                    sliderInfo.max = 60;
                    break;
                default:
                    sliderInfo.min = 10;
                    sliderInfo.max = 15;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>MysticAlly%</span>":
            switch(type) {
                case "Daibo":
                    sliderInfo.min = 90;
                    sliderInfo.max = 120;
                    break;
                default:
                    sliderInfo.min = 10;
                    sliderInfo.max = 15;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>RainOfVengeance%</span>":
            switch(type) {
                case "Hand Crossbow":
                    sliderInfo.min = 20;
                    sliderInfo.max = 25;
                    break;
                default:
                    sliderInfo.min = 10;
                    sliderInfo.max = 15;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>Sentry%</span>":
            switch(itemName) {
                case "Bombardier's Rucksack":
                    sliderInfo.min = 75;
                    sliderInfo.max = 100;
                    break;
                default:
                    sliderInfo.min = 10;
                    sliderInfo.max = 15;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>Strafe%</span>":
            switch(itemName) {
                case "Valla's Bequest":
                    sliderInfo.min = 75;
                    sliderInfo.max = 100;
                    break;
                default:
                    sliderInfo.min = 10;
                    sliderInfo.max = 15;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>WaveOfLight%</span>":
            switch(itemName) {
                case "Tzo Krin's Gaze":
                    sliderInfo.min = 125;
                    sliderInfo.max = 150;
                    break;
                default:
                    sliderInfo.min = 10;
                    sliderInfo.max = 15;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>ZombieCharger%</span>":
            switch(itemName) {
                case "Scrimshaw":
                    sliderInfo.min = 60;
                    sliderInfo.max = 80;
                    break;
                default:
                    sliderInfo.min = 10;
                    sliderInfo.max = 15;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>SpiritBarrage%</span>":
            switch(itemName) {
                case "Voo's Juicer":
                    sliderInfo.min = 45;
                    sliderInfo.max = 60;
                    break;
                default:
                    sliderInfo.min = 10;
                    sliderInfo.max = 15;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>FetishArmy%</span>":
            switch(itemName) {
                case "Zunimassa's String of Skulls":
                    sliderInfo.min = 20;
                    sliderInfo.max = 25;
                    break;
                default:
                    sliderInfo.min = 10;
                    sliderInfo.max = 15;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>Meteor%</span>":
            switch(itemName) {
                case "Tal Rasha's Unwavering Glare":
                    sliderInfo.min = 20;
                    sliderInfo.max = 25;
                    break;
                default:
                    sliderInfo.min = 10;
                    sliderInfo.max = 15;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span><i>Thorns</i></span>":
            switch(type) {
                case "Shoulders":
                case "Amulet":
                case "Chest Armor":
                case "Shield":
                case "Crusader Shield":
                case "Belt":
                    sliderInfo.min = ancient? 7697 : 5334;
                    sliderInfo.max = ancient? 9500 : 7696;
                    break;
                default:
                    sliderInfo.min = ancient? 2881 : 2401;
                    sliderInfo.max = ancient? 3500 : 2880;
                    break;
            }
            sliderInfo.step = 1;
            break;
            case "<span>Thorns</span>":
                sliderInfo.min = 38000;
                sliderInfo.max = 40000;
                sliderInfo.step = 1;
                break;
        case "<span><i>Maximum Discipline</i></span>":
        case "<span>Maximum Discipline</span>":
        case "<span>Maximum Essence</span>":
        case "<span>Your Signature Spells attack 50% faster and restore Arcane Power</span>":
        case "<span>Each stunned enemy within 25 yards reduces your damage taken by</span>":
            sliderInfo.min = 9;
            sliderInfo.max = 12;
            sliderInfo.step = 1;
            break;
        case "<span><i>Maximum Fury</i></span>":
            sliderInfo.min = 10;
            sliderInfo.max = 12;
            sliderInfo.step = 1;
            break;
        case "<span><i>Maximum Spirit</i></span>":
            sliderInfo.min = 13;
            sliderInfo.max = 15;
            sliderInfo.step = 1;
            break;
        case "<span><i>Maximum Essence</i></span>":
            sliderInfo.min = 18;
            sliderInfo.max = 20;
            sliderInfo.step = 1;
            break;
        case "<span>Maximum Arcane Power</span>":
            sliderInfo.min = 13;
            sliderInfo.max = 14;
            sliderInfo.step = 1;
            break;
        case "<span>Your skill cooldowns are reduced by seconds for 15 seconds after killing an elite pack</span>":
        case "<span>Your cold skills reduce the movement speed of enemies by 30%. In addition, your movement speed is increased by for 5 seconds. Maximum 5 stacks</span>":
        case "<span>Each time you hit an enemy with Explosive Blast your damage is increased by and your damage reduction is increased by 20% for 6 seconds. This effect can stack up to 4 times</span>":
            sliderInfo.min = 8;
            sliderInfo.max = 10;
            sliderInfo.step = 1;
            break;
        case "<span>Increase damage against elites by</span>":
        case "<span>Cyclone Strike reduces your damage taken by for 5 seconds</span>":
        case "<span>Dashing Strike reduces your damage taken by for 6 seconds</span>":
            sliderInfo.min = 40;
            sliderInfo.max = 50;
            sliderInfo.step = 1;
            break;
        case "<span>Gain increased movement speed for 4 seconds after Fearing an enemy</span>":
        case "<span>Your Spirit Generators reduce your damage taken by for 3 seconds</span>":
        case "<span>Locust Swarm gains the effect of the Pestilence rune and deals increased damage</span>":
            sliderInfo.min = 45;
            sliderInfo.max = 60;
            sliderInfo.step = 1;
            break;
        case "<span>Gain damage reduction equal to of your Block Chance</span>":
            sliderInfo.min = 45;
            sliderInfo.max = 55;
            sliderInfo.step = 1;
            break;
        case "<span>Gain increased damage to a single element for 4 seconds</span>":
        case "<span>Multishot attacks 50% faster and its damage is increased by</span>":
        case "<span>Your primary skills attack 50% faster and deal increased damage</span>":
        case "<span>Multishot hits enemies below 60% health twice and its damage is increased by</span>":
        case "<span>Your primary skills attack 30% faster and deal increased damage</span>":
        case "<span>When Land of the Dead expires, you are granted 50 stacks of Macabre Knowledge. Macabre Knowledge increases the damage of Corpse Lance and Corpse Explosion by</span>":
        case "<span>The Cursed Scythe rune for Grim Scythe now has a 100% chance to apply a curse and you deal increased damage to cursed enemies</span>":
        case "<span>Enemies hit by your Cyclone Strike take increased damage from your Mystic Ally for 5 seconds. Split Fire Allies gain 5 times this bonus</span>":
        case "<span>Mystic Ally summons two Mystic Allies that fight by your side. They deal increased damage and are able to attack with their active forms longer</span>":
        case "<span>Pets deal increased damage</span>":
        case "<span>You may have 2 additional Sentries. Cluster Arrow deals increased damage</span>":
        case "<span>Increase the damage of Ancient Spear by . If your Ancient Spear - Boulder Toss hits 5 or fewer enemies, the damage is increased by 100%</span>":
        case "<span>Weapon Throw and Ancient Spear deal increased damage. Weapon Throw generates up to 50 additional Fury based on the distance of the enemy hit. The generated Fury can go above the maximum cap by 200 Fury. Ancient Spear refunds up to 50 Fury based on the distance of the enemy hit, and resets your Fury cap to its base maximum.</span>":
        case "<span>Increase the damage of Weapon Throw and Ancient Spear by . The attack speed of Weapon Throw is increased by 200%</span>":
            sliderInfo.min = 150;
            sliderInfo.max = 200;
            sliderInfo.step = 1;
            break;
        case "<span>After casting Furious Charege, Ground Stomp, or Leap, take reduced damage for 8 seconds</span>":
        case "<span>The first time an enemy deals damage to you, reduce that damage by and Charm the enemy for 3 seconds</span>":
        case "<span>You take less damage for 5 seconds after your Storm Armor electrocutes an enemy more than 15 yards away</span>":
            sliderInfo.min = 60;
            sliderInfo.max = 80;
            sliderInfo.step = 1;
            break;
        case "<span>Primary skills that generate resource deal additional damage</span>":
            sliderInfo.min = 80;
            sliderInfo.max = 100;
            sliderInfo.step = 1;
            break;
        case "<span>Seismic Slam deals increased damage to the first 10 enemies it hits</span>":
            sliderInfo.min = 400;
            sliderInfo.max = 500;
            sliderInfo.step = 1;
            break;
        case "<span>Seismic Slam attacks 50% faster and also deals increased damage against Slowed or Chilled enemies</span>":
            sliderInfo.min = 100;
            sliderInfo.max = 150;
            sliderInfo.step = 1;
            break;
        case "<span>Seismic Slam increases Earthquake damage by for 3 seconds</span>":
            sliderInfo.min = 200;
            sliderInfo.max = 250;
            sliderInfo.step = 1;
            break;
        case "<span>Rend can now stack up to 2 times on an enemy, and the damage of Rend is increased by</span>":
        case "<span>The damage of Spirit Barrage is increased by . Spirit Barrage gains the Phantasm rune which lasts twice as long, and the attack rate from Manitou spectres is increased</span>":
        case "<span>Zombie Charger deals increased damage. The Zombie Bears rune now summons 8 bears that travel farther</span>":
            sliderInfo.min = 100;
            sliderInfo.max = 150;
            sliderInfo.step = 1;
            break;
        case "<span>Increases the duration of Ignore Pain by seconds</span>":
            sliderInfo.min = 4;
            sliderInfo.max = 6;
            sliderInfo.step = 1;
            break;
        case "<span>Frenzy gains the effect of every rune and deals increased damage</span>":
            sliderInfo.min = 300;
            sliderInfo.max = 400;
            sliderInfo.step = 1;
            break;
        case "<span>Your primary skills heal you for of your missing Life</span>":
            sliderInfo.min = 4.5;
            sliderInfo.max = 6.0;
            sliderInfo.step = 0.5;
            break;
        case "<span>The damage of Impale is increased by and it returns 15 Hatred if it hits an enemy already Impaled</span>":
            sliderInfo.min = 300;
            sliderInfo.max = 375;
            sliderInfo.step = 1;
            break;
        case "<span>Hammer of the Ancients attacks 50% faster and deals increased damage</span>":
        case "<span>Heaven's Fury gains two additional rays and has its damage increased by</span>":
            sliderInfo.min = 375;
            sliderInfo.max = 500;
            sliderInfo.step = 1;
            break;
        case "<span>Increase the damage of Meteor by 600%. When your Meteor hits 3 or fewer enemies, the damage is increased by</span>":
            sliderInfo.min = 675;
            sliderInfo.max = 900;
            sliderInfo.step = 1;
            break;
        case "<span>Fire skills deal increased damage</span>":
        case "<span>Cold skills deal increased damage and have a 50% chance to Freeze enemies</span>":
            sliderInfo.min = 15;
            sliderInfo.max = 20;
            sliderInfo.step = 1;
            break;
        case "<span>Reduces the resource cost of Fire skills by</span>":
            sliderInfo.min = 23;
            sliderInfo.max = 30;
            sliderInfo.step = 1;
            break;
        case "<span>While channeling you deal increased damage and take 25% reduced damage</span>":
        case "<span>Every successful block has a chance to reduce all cooldowns by 1 second</span>":
        case "<span>Your resource generation and damage is increased by 25% while moving and decreased by while standing still</span>":
        case "<span>The cooldown on Command Golem is reduced by seconds and you take 30% less damage while your golem is alive</span>":
            sliderInfo.min = 20;
            sliderInfo.max = 25;
            sliderInfo.step = 1;
            break;
        case "<span>Increase the effect of any gem socketed into your helm by</span>":
        case "<span>Impale throws two additional knives and deals increased damage</span>":
        case "<span>Exploding Palm's on-death explosion applies Exploding Palm. Exploding Palm's damage is increased by</span>":
        case "<span>Devour restores an additional Essence and Life. In addition, when Devour restores Essence or Life above your maximum, the excess is granted over 3 seconds</span>":
        case "<span>You gain increased movement speed for 10 seconds after using Blood Rush</span>":
        case "<span>Army of the Dead deals increased damage or double this bonus against an active target of Command Skeletons</span>":
        case "<span>You deal increased damage against slowed enemies or triple this bonus against enemies affected by any other type of control-impairing effect</span>":
        case "<span>Increases the potency of your shields by</span>":
        case "<span>When your Blessed Hammer hits 3 or fewer enemies, of its Wrath Cost is refunded</span>":
        case "<span>After the initial duration of Spirit Walk ends, it will continue to last until you attack 3 times or until an elite enemy is within 20 yards of you. Attacks while in the spirit realm deal increased damage</span>":
        case "<span>Corpse Spiders deals an additional damage, and each spider bite causes the target to take an additional 1% damage from Corpse Spiders for 5 seconds</span>":
            sliderInfo.min = 75;
            sliderInfo.max = 100;
            sliderInfo.step = 1;
            break;
        case "<span>While above primary resource, all damage taken is reduced by 50%</span>":
            sliderInfo.min = 90;
            sliderInfo.max = 95;
            sliderInfo.step = 1;
            break;
        case "<span>The first time an elite pack damages you, gain an absorb shield for of your maximum Life for 10 seconds</span>":
            sliderInfo.min = 120;
            sliderInfo.max = 150;
            sliderInfo.step = 1;
            break;
        case "<span>Heaven's Fury deals increased damage to enemies that are Blinded, Immobilized, or Stunned</span>":
        case "<span>Bone Spears cast from Simulacrums deal increased damage</span>":
        case "<span>Your Signature Spells increase the damage of Arcane Orb by for 6 seconds, stacking up to 3 times</span>":
            sliderInfo.min = 300;
            sliderInfo.max = 400;
            sliderInfo.step = 1;
            break;
        case "<span>Enemies hit by knockbacks suffer increased damage for 6 seconds</span>":
        case "<span>Chance to be protected by a shield of bones when you are hit</span>":
        case "<span>Your Signature Spells attack 50% faster and deal triple damage. You gain a Spectral buff whenever you land an attack with a Signature Spell. Hydras deal increased damage for each Spectral stack. Max 10 stacks</span>":
            sliderInfo.min = 20;
            sliderInfo.max = 30;
            sliderInfo.step = 1;
            break;
        case "<span>Every 4 seconds, call down Bombardment on a random nearby enemy. Bombardment deals increased damage</span>":
        case "<span>Exploding Palm's on-death explosion damage is increased by</span>":
        case "<span>Instead of dealing direct damage, your Spirit Barrage now accumulates on the target. When you stop casting, it explodes dealing of the accumulated damage to all enemies within 15 yards</span>":
        case "<span>Your Poison Darts and your Fetishes' Poison Darts now pierce and deal an additional damage</span>":
            sliderInfo.min = 400;
            sliderInfo.max = 500;
            sliderInfo.step = 1;
            break;
        case "<span>Each enemy hit by your Sweep Attack increases the damage of your next Sweep Attack by stacking up to 5 times</span>":
            sliderInfo.min = 100;
            sliderInfo.max = 125;
            sliderInfo.step = 1;
            break;
        case "<span>Blessed Hammer damage is increased by for the first 3 enemies it hits</span>":
        case "<span>Increase the damage of Wave of Light by 150%. When the initial impact of your Wave of Light hits 3 or fewer enemies, the damage is increased by</span>":
        case "<span>While channeling Arcane Torrent, Disintegrate, or Ray of Frost, the damage of your Energy Twister is increased by , and you also cast Energy Twister every second</span>":
            sliderInfo.min = 200;
            sliderInfo.max = 250;
            sliderInfo.step = 1;
            break;
        case "<span>Each time an enemy takes damage from your Heaven's Fury, it increases the damage they take from your Heaven's Fury by . This effect stacks up to 10 times</span>":
        case "<span>Health globes restore of your primary resource. This effect cannot occur more than once every 2 seconds</span>":
            sliderInfo.min = 25;
            sliderInfo.max = 30;
            sliderInfo.step = 1;
            break;
        case "<span>Your Hatred Generators reduce your damage taken by for 5 seconds</span>":
        case "<span>Increase attack speed of your pets by</span>":
        case "<span>You gain an additional damage reduction when there is an enemy afflicted by any of your curses</span>":
        case "<span>You automatically start with Archon stacks when entering Archon form</span>":
            sliderInfo.min = 40;
            sliderInfo.max = 50;
            sliderInfo.step = 1;
            break;
        case "<span>You take less damage for every Companion you have active</span>":
            sliderInfo.min = 8;
            sliderInfo.max = 9;
            sliderInfo.step = 0.1;
            break;
        case "<span>Grenades have a chance to bounce times dealing an additional 50% damage on each bounce. This bonus is increased to 800% on the final bounce</span>":
            sliderInfo.min = 3;
            sliderInfo.max = 5;
            sliderInfo.step = 1;
            break;
        case "<span>After casting Shadow Power, Smoke Screen, or Vault, take reduced damage for 8 seconds</span>":
            sliderInfo.min = 50;
            sliderInfo.max = 60;
            sliderInfo.step = 1;
            break;
        case "<span>Reduces the Hatred cost of Cluster Arrow by 50% and increases its damage by</span>":
        case "<span>Rapid Fire no longer has a channel cost and deals increased damage</span>":
        case "<span>Firebats deals increased damage to enemies affected by Locust Swarm or Piranhas</span>":
        case "<span>You deal increased damage to enemies affected by either your Haunt or Locust Swarm</span>":
        case "<span>Your Hydras now periodically cast Frost Nova and deal increased damage</span>":
        case "<span>You may have one extra Hydra active at a time and they deal increased damage</span>":
            sliderInfo.min = 250;
            sliderInfo.max = 300;
            sliderInfo.step = 1;
            break;
        case "<span>Reduce the cooldown of Vengeance by</span>":
        case "<span>Your Town Portal is no longer interrupted by taking damage. While casting Town Portal you gain a protective bubble that reduces damage taken by</span>":
            sliderInfo.min = 50;
            sliderInfo.max = 65;
            sliderInfo.step = 1;
            break;
        case "<span>Reduce all damage taken by 60% if your Soul Harvest stack is at least , and an additional 2% for each stack of Soul Harvest</span>":
            sliderInfo.min = 1;
            sliderInfo.max = 3;
            sliderInfo.step = 1;
            break;
        case "<span>Attacks grant you an absorb shield for of your maximum Life. Stacks up to 10 times</span>":
            sliderInfo.min = 2;
            sliderInfo.max = 3;
            sliderInfo.step = 0.1;
            break;
        case "<span>Hungering Arrow is guaranteed to pierce and also deals increased damage. Hungering Arrow can only pierce up to 4 times</span>":
            sliderInfo.min = 450;
            sliderInfo.max = 600;
            sliderInfo.step = 1;
            break;
        case "<span>Enemies take increased damage from your Tempest Rush for 5 seconds after you hit them with a Blind, Freeze or Stun</span>":
        case "<span>Increases the maximum stack count of Sweeping Wind by 10 and increases the damage by</span>":
        case "<span>Corpse Spiders deals an additional damage and releases a web on impact that Slows enemies by 80%</span>":
        case "<span>While both Wrath of the Berserker and Call of the Ancients are active, Hammer of the Ancients deals increased damage</span>":
            sliderInfo.min = 600;
            sliderInfo.max = 800;
            sliderInfo.step = 1;
            break;
        case "<span>Fist of the Heavens now casts twice and deals more damage</span>":
            sliderInfo.min = 800;
            sliderInfo.max = 1000;
            sliderInfo.step = 1;
            break;
        case "<span>Wave of Light also Slows enemies by 80% for 3 seconds and deals increased damage</span>":
        case "<span>Energy Twister damage is increased by for each Energy Twister you have out up to a maximum of 5. The Raging Storm rune is automatically applied to Energy Twister and allows the tornado to merge with 3 additional Energy Twisters</span>":
        case "<span>Enemies killed by Cold damage have a 25% chance to release a Frost Nova. Your Hydras deals increased damage to enemies in a Blizzard</span>":
            sliderInfo.min = 125;
            sliderInfo.max = 150;
            sliderInfo.step = 1;
            break;
        case "<span>Undead and Demon enemies within 25 years take weapon damage as Holy every second and are sometimes knocked into the air</span>":
            sliderInfo.min = 500;
            sliderInfo.max = 650;
            sliderInfo.step = 1;
            break;
        case "<span>Hitting with Tempest Rush will activate Cyclone Strike, and both skills deal increased damage</span>":
            sliderInfo.min = 500;
            sliderInfo.max = 600;
            sliderInfo.step = 1;
            break;
        case "<span>Skeletal Mage gains the effect of the Gift of Death and Singularity runes. You gain damage reduction if your Essence is not full</span>":
            sliderInfo.min = 35;
            sliderInfo.max = 50;
            sliderInfo.step = 1;
            break;
        case "<span>You now raise an additional Skeletal Mage with each cast and they last an additional seconds</span>":
            sliderInfo.min = 2;
            sliderInfo.max = 4;
            sliderInfo.step = 1;
            break;
        case "<span>Every point of Maximum Essence increases your damage by 0.5% and Bone Spikes generates additional Essence for each enemy hit</span>":
            sliderInfo.min = 2;
            sliderInfo.max = 5;
            sliderInfo.step = 1;
            break;
        case "<span>Your Secondary skills deal additional damage while Bone Armor is active but reduce the remaining duration of Bone Armor by 4 seconds</span>":
            sliderInfo.min = 350;
            sliderInfo.max = 400;
            sliderInfo.step = 1;
            break;
        case "<span>Grim Scythe deals an additional damage for each point of essence it restores</span>":
            sliderInfo.min = 65;
            sliderInfo.max = 80;
            sliderInfo.step = 1;
            break;
        case "<span>Reduces the Mana cost of Zombie Charger by 75% and increases its damage by times</span>":
            sliderInfo.min = 6;
            sliderInfo.max = 7;
            sliderInfo.step = 1;
            break;
        case "<span>Chance on hit to release a Poison Nova that deals weapon damage as Poison to enemies within 10 yards</span>":
        case "<span>The damage of Arcane Orb is increased by and its explosion triggers an additional time</span>":
        case "<span>Spirit spenders that teleport you while Epiphany is active are also mimicked on a nearby target with increased damage for free</span>":
            sliderInfo.min = 350;
            sliderInfo.max = 450;
            sliderInfo.step = 1;
            break;
        case "<span>The damage of Energy Twister is increased by and it periodically pulls in lesser enemies within 30 yards</span>":
            sliderInfo.min = 225;
            sliderInfo.max = 300;
            sliderInfo.step = 1;
            break;
        case "<span>While channeling Arcane Torrent, Disintegrate, or Ray of Frost for at least 1 second, all damage is increased by</span>":
            sliderInfo.min = 250;
            sliderInfo.max = 325;
            sliderInfo.step = 1;
            break;
        case "<span>Chance on hit to pull in enemies toward your target and Slow them by</span>":
            sliderInfo.min = 60;
            sliderInfo.max = 80;
            sliderInfo.step = 20;
            break;
        case "<span>Chance on hit to create a chaos field that Blinds and Slows enemies inside for seconds</span>":
            sliderInfo.min = 3;
            sliderInfo.max = 4;
            sliderInfo.step = 1;
            break;
        case "<span>Chance to create an area of focused power on killing a monster. Damage is increased by while standing in the area</span>":
            sliderInfo.min = 70;
            sliderInfo.max = 85;
            sliderInfo.step = 1;
            break;
        case "<span>Chance to cluck when attacking</span>":
            sliderInfo.min = 25;
            sliderInfo.max = 50;
            sliderInfo.step = 1;
            break;
        case "<span>Chance on hit to blast your enemy with Lightning, dealing weapon damage as Lightning and then jumping to additional nearby enemies. Each enemy hit has their attack speed and movement speed reduced by 30% for 3 seconds. Jumps up to 5 targets</span>":
            sliderInfo.min = 279;
            sliderInfo.max = 372;
            sliderInfo.step = 1;
            break;
        case "<span>Blocking an attack has a chance to Freeze the attacker for seconds</span>":
            sliderInfo.min = 0.5;
            sliderInfo.max = 1.5;
            sliderInfo.step = 0.1;
            break;

        default:
            sliderInfo.min = 10;
            sliderInfo.max = 15;
            sliderInfo.step = 1;
            break;
    }

    return sliderInfo;
}

export function enoughMissing(item: Item, number: Number): boolean {
    return item.stats.filter(x => !x.present && (x.guaranteed || x.guaranteed === undefined) && x.hellfire === undefined).length >= number;
}

export function getDifficulty(item: Item): Number {
    return item.stats.filter(x => (x.guaranteed === undefined || isElemental(x.name)) && x.passive === undefined && x.hellfire === undefined).length 
    // + item.stats.filter(x => x.guaranteed !== undefined && !x.guaranteed).length 
    - 1;
}

export function isElemental(name: string) {
    return name === "<span>Arcane%</span>" || name === "<span>Cold%</span>" || name === "<span>Fire%</span>" || name === "<span>Holy%</span>" ||
        name === "<span>Lightning%</span>" || name === "<span>Physical%</span>" || name === "<span>Poison%</span>"
}

export function isHellfire(stat: Stat): boolean {
    return stat.hellfire !== undefined;
}

export function isPassive(stat: Stat): boolean {
    return stat.passive !== undefined;
}

export function isForged(item: Item): boolean {
    return item.forged !== undefined;
}

export function isFollower(item: Item): boolean {
    return item.follower !== undefined;
}

export function isSlidable(name: string, type: string): boolean {
    if (name === "<span>Socket</span>" || name === "<span>Block%</span>" && type !== "Ring" 
        || name === "<span>Attacking with Whirlwind also applies Rend, and the total damage of Rend is dealt over 1 second</span>"
        || name === "<span>Block release forward a Fires of Heaven</span>"
        || name === "<span>Increase the attack speed and damage of Blessed Hammer by</span>"
        || name === "<span>Strafe projectiles pierce</span>"
        || name === "<span>Slaying enemies engulfs the wielder into a Frenzy</span>"
        || name === "<span>Chance to double your attack speed when attacking</span>"
        || name === "<span>Seven-Sided Strike performs an additional 7 strikes</span>"
        || name === "<span>Soul Harvest now stacks up to 10 times</span>"
        || name === "<span>Teleport no longer has a cooldown but costs 25 Arcane Power</span>"

        || name === "<span>Chance to restore health on killing marked enemy</span>"
        || name === "<span>Increase movement speed when applying mark</span>"
        || name === "<span>Trail of fire executes low health enemies</span>"
        
        || name === "<span>Increased damage per enemy</span>"
        || name === "<span>Pull in enemies after killing an elite</span>"
        || name === "<span>Increase movement speed when few enemies are nearby</span>"

        || name === "<span>Cast Ring of Fire after killing 100 enemies</span>"
        || name === "<span>Increase speed and critical for each skill on cooldown</span>"
        || name === "<span>Increase lightning and fire damage if three skills are on cooldown</span>"
        
        || name === "<span>Damage increased when pets hit enemies</span>"
        || name === "<span>Heal when receiving fatal damage</span>"
        || name === "<span>Killing elites reduces cooldowns</span>"
        
        || name === "<span>Movement speed and cooldown reduction stacks to 15</span>"
        || name === "<span>Enemies take increased poison damage</span>"
        || name === "<span>Death blow damage splashes to nearby enemies</span>"

        || name === "<span>Chance to freeze with cold damage</span>"
        || name === "<span>Move through enemies when over 50% movement speed</span>"
        || name === "<span>Increase party attack speed on critical hit</span>"

        || name === "<span>Pool of blood negates Elite affixes</span>"
        || name === "<span>Gain additional Progress Orb on killing elite pack</span>"
        || name === "<span>Pool of blood collects Progress Orbs</span>"
        ) {
        return false;
    }
    else {
        return true;
    }
}

export function isWeapon(name: string): boolean {
    if (name === "<span>Damage</span>" || name === "<span>Fire Damage</span>" || name === "<span>Lightning Damage</span>" || name === "<span>Holy Damage</span>" || name === "<span>Cold Damage</span>" || name === "<span>Poison Damage</span>" || name === "<span>Arcane Damage</span>") {
        return true;
    }
    else {
        return false;
    }
}

export function countMissing(items: Item[]): number {
    var count: number = 0;
    items = items.filter(item => {
        count += item.stats.filter(x => x.hellfire === undefined && x.present === false && (x.guaranteed === undefined || x.guaranteed === true)).length;
    });
    return count;
}

export function countMissingBuild(items: Item[], build: number): number {
    var count: number = 0;
    items = items.filter(x => x.builds.includes(build));
    count = countMissing(items);
    return count;
}

export function itemsMissing(items: Item[], threshold: number): number {
    items = items.filter(x => x.stats.filter(y => !y.present && (y.guaranteed || y.guaranteed === undefined) && y.hellfire === undefined).length >= threshold);
    return items.length;
}

export function gemDown(gem: Gem) {
    if(gem.level > 0)
        gem.level--;
}

export function gemUp(gem: Gem) {
    if(gem.level < gem.maxLevel)
        gem.level++;
}

export function toggleEnchantable(stat: Stat, item: Item) {
    if(stat.enchantable && item.locked) {
        stat.enchantable = false;
        item.locked = false;
    }
    else if (!stat.enchantable && !item.locked) {
        stat.enchantable = true;
        item.locked = true;
    }
  }