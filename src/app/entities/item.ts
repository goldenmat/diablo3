export class Item {
    ancient!: boolean;
    name!: string;
    type!: string;
    rarity!: string;
    image!: string;
    stats!: Stat[];
}

export class Stat {
    present!: boolean;
    name!: string;
}