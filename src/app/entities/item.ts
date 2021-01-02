export class Item {
    ancient!: boolean;
    locked!: boolean;
    name!: string;
    type!: string;
    rarity!: string;
    image!: string;
    stats!: Stat[];
}

export class Stat {
    present!: boolean;
    name!: string;
    value?: number;
    value2?: number;
    enchantable!: boolean;
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

export const commonItems : string[] = [
    "Andariel's Visage",
    "Leoric's Crown",
    "Pride's Fall",

    "Homing Pads",
    "Mantle of Channeling",
    "Pauldrons of the Skeleton King",

    "Aquila Cuirass",
    "Cindercoat",

    "Frostburn",
    "Gloves of Worship",
    "Magefist",
    "Stone Gauntlets",
    "Tasker and Theo",

    "Depth Diggers",
    "Hexing Pants of Mr. Yan",
    "Swamp Land Waders",

    "Ice Climbers",
    "Illusory Boots",

    "Nemesis Bracers",
    "Strongarm Bracers",
    "Warzechian Armguards",

    "Goldwrap",
    "The Witching Hour",

    "Focus",
    "Litany of the Undaunted",
    "Restraint",
    "The Compass Rose",
    "The Wailing Host",
    "Avarice Band",
    "Convention of Elements",
    "Justice Lantern",
    "Obsidian Ring of the Zodiac",
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

    "Echoing Fury",

    "Little Rogue",
    "The Slanderer",
    "In-Geom"
];

export function getSliderInfo(name: string, type: string, ancient: boolean, itemName: string): SliderInfo {
    let sliderInfo = new SliderInfo();

    switch(name) {
        case "<span>Strength</span>":
        case "<span>Dexterity</span>":
        case "<span>Intelligence</span>":
        case "<span>Vitality</span>":
            switch(type) {
                case "Shoulders": 
                case "Chest Armor": 
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
                case "Polearm": 
                case "Two-Handed Sword": 
                case "Two-Handed Mighty Weapon":
                    sliderInfo.min = ancient? 1237 : 946;
                    sliderInfo.max = ancient? 1465 : 1125;
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
                case "Amulet" || "Shield":
                    sliderInfo.min = ancient? 654 : 559;
                    break;
                default:
                    sliderInfo.min = ancient? 436 : 373;
                    break;
            }
            switch(type) {
                case "Helm" || "Chest Armor" || "Pants" || "Amulet" || "Shield":
                    sliderInfo.max = ancient? 775 : 595;
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
        case "<span>Area Damage</span>":
            switch(type) {
                case "Shoulders": 
                case "Gloves": 
                case "Ring": 
                case "Amulet":
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
                    sliderInfo.min = 15;
                    sliderInfo.max = 20;
                    break;
                default:
                    sliderInfo.min = 5;
                    sliderInfo.max = 7;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>Critical Hit Chance</span>":
            switch(type) {
                case "Gloves": 
                case "Amulet": 
                case "Shield": 
                case "Quiver":
                case "Shield":
                case "Mojo":
                case "Phylactery":
                case "Source":
                    sliderInfo.min = 8;
                    sliderInfo.max = 10;
                    break;
                case "Helm": 
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
                case "Amulet":
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
                case "Chest Armor":
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
                default:
                    sliderInfo.min = 10;
                    sliderInfo.max = 15;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>Life per Hit</span>":
            switch(type) {
                case "Two-Handed Mighty Weapon":
                    sliderInfo.min = ancient? 30408 : 23211;
                    sliderInfo.max = ancient? 35940 : 27644;
                    break;
                case "Mighty Weapon":
                    sliderInfo.min = ancient? 20271 : 15474;
                    sliderInfo.max = ancient? 23950 : 18429;
                    break;
                default:
                    sliderInfo.min = ancient? 10135 : 7737;
                    sliderInfo.max = ancient? 11975 : 9214;
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
        case "<span>Resource Cost Reduction</span>":
            switch(type) {
                case "Shoulders": 
                case "Gloves": 
                case "Amulet": 
                case "Ring": 
                case "Shield": 
                case "Quiver":
                    sliderInfo.min = 5;
                    sliderInfo.max = 8;
                    break;
                default:
                    switch(itemName) {
                        case "Yang's Recurve":
                            sliderInfo.min = 40;
                            sliderInfo.max = 50;
                            break;
                        default:
                            sliderInfo.min = 6;
                            sliderInfo.max = 10;
                            break;
                    }
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>Arcane%</span>": 
        case "<span>Cold%</span>": 
        case "<span>Fire%</span>": 
        case "<span>Holy%</span>": 
        case "<span>Physical%</span>": 
        case "<span>Poison%</span>":
            sliderInfo.min = 15;
            sliderInfo.max = 20;
            sliderInfo.step = 1;
            break;
        case "<span>Lightning%</span>": 
            switch(itemName) {
                case "Won Khim Lau":
                    sliderInfo.min = 15;
                    sliderInfo.max = 25;
                    break;
                default:
                    sliderInfo.min = 10;
                    sliderInfo.max = 15;
                    break;
            }
            sliderInfo.step = 1;
            break;
        case "<span>Damage%</span>":
            sliderInfo.min = 6;
            sliderInfo.max = 10;
            sliderInfo.step = 1;
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
        case "<span>Hatred Regeneration</span>":
            sliderInfo.min = 1.35;
            sliderInfo.max = 1.50;
            sliderInfo.step = 0.01;
            break;
        case "<span>Arcane Power on Critical Hit</span>":
            sliderInfo.min = 3;
            sliderInfo.max = 4;
            sliderInfo.step = 1;
            break;
        case "<span>Damage</span>":
            switch(type) {
                case "Ring":
                    sliderInfo.min = ancient? 88 : 60;
                    sliderInfo.max = ancient? 105 : 80;
                    break;
                case "Phylactery":
                case "Mojo":
                case "Wand":
                    sliderInfo.min = ancient? 407 : 340;
                    sliderInfo.max = ancient? 485 : 370;
                    break;
                case "Dagger":
                    sliderInfo.min = ancient? 1155 : 858;
                    sliderInfo.max = ancient? 1365 : 1049;
                    break;
                case "Two-Handed Axe": 
                case "Two-Handed Mace": 
                case "Polearm": 
                case "Two-Handed Sword": 
                case "Two-Handed Mighty Weapon":
                    sliderInfo.min = ancient? 1582 : 1177;
                    sliderInfo.max = ancient? 1870 : 1439;
                    break;
                default:
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
                case "Wand":
                    sliderInfo.min = ancient? 495 : 380;
                    sliderInfo.max = ancient? 600 : 450;
                    break;
                case "Dagger":
                    sliderInfo.min = ancient? 1410 : 1028;
                    sliderInfo.max = ancient? 1700 : 1304;
                    break;
                case "Two-Handed Axe": 
                case "Two-Handed Mace": 
                case "Polearm": 
                case "Two-Handed Sword": 
                case "Two-Handed Mighty Weapon":
                    sliderInfo.min = ancient? 1932 : 1410;
                    sliderInfo.max = ancient? 2325 : 1788;
                    break;
                default:
                    sliderInfo.min = ancient? 1609 : 1175;
                    sliderInfo.max = ancient? 1940 : 1490;
                    break;
            }
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
                    sliderInfo.min = ancient? 7697 : 5334;
                    sliderInfo.max = ancient? 9500 : 7696;
                    break;
                default:
                    sliderInfo.min = ancient? 2881 : 2401;
                    sliderInfo.max = ancient? 3500 : 2880;
                    break;
            }
            sliderInfo.step = 0.5;
            break;
        case "<span><i>Maximum Discipline</i></span>":
            sliderInfo.min = 9;
            sliderInfo.max = 12;
            sliderInfo.step = 1;
            break;
        default:
            sliderInfo.min = 10;
            sliderInfo.max = 15;
            sliderInfo.step = 1;
            break;
    }

    return sliderInfo;
}

export function isSlidable(name: string, type: string): boolean {
    if (name === "<span>Socket</span>" || name === "<span>Block%</span>" && type !== "Ring") {
        return false;
    }
    else {
        return true;
    }
}

export function isWeapon(name: string): boolean {
    if (name === "<span>Damage</span>") {
        return true;
    }
    else {
        return false;
    }
}